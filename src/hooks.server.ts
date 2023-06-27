import type {Handle, HandleServerError} from '@sveltejs/kit';
import {Toucan} from "toucan-js";
import {drizzle} from "drizzle-orm/planetscale-serverless";
import {connect} from "@planetscale/database";
import * as schema from "$lib/db/schema";
// @ts-ignore
import {DB_HOST, DB_PASSWORD, DB_USERNAME} from '$env/static/private';

// create the connection
const connection = connect({
    host: DB_HOST, username: DB_USERNAME, password: DB_PASSWORD, fetch: (url: string, init) => {
        delete (init as any)["cache"]; // Remove cache header
        return fetch(url, init);
    }
});

const db = drizzle(connection, {schema});

const Sentry = new Toucan({
    dsn: "https://4406d098019e498989287e43ca98038d@o463075.ingest.sentry.io/4505401534840832",
});

export const handleError: HandleServerError = ({error, event}) => {
    let eventId;
    console.error(error)
    try {
        eventId = Sentry.captureException(error, {
            captureContext: {
                extra: {
                    url: event.url,
                    address: event.getClientAddress(),
                    headers: Object.fromEntries(event.request.headers.entries())
                }
            }
        });
    } catch (e) {
        eventId = Sentry.captureException(e, {captureContext: {extra: {error}}});
    }
    return {message: `Sentry ${eventId}`};
}

export const handle: Handle = ({event, resolve}) => {
    event.locals.db = db;
    return resolve(event);
}