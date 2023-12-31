import {text} from '@sveltejs/kit';
import type {RequestHandler} from './$types';
import * as schema from "$lib/db/schema";

export const POST: RequestHandler = async ({request, getClientAddress, locals}) => {
    interface ExtractClientDataRequest {
        type: string,
        body: schema.NewClient,
    }

    const {type, body}: ExtractClientDataRequest = await request.json();
    if (type === "client") {
        await locals.db.insert(schema.client).values(body).execute();
        return text("db: added client");
    }
    else if (type === "page") {
        await locals.db.insert(schema.page).values(body).execute();
        return text("db: added page");
    }
    else {
        throw new Error(`Unknown type ${type}`);
    }
}

//link clicked, cookie, device, dimensions, browser, localtime, os