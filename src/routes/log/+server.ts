import {error, json} from '@sveltejs/kit';
import type {RequestHandler} from './$types';
import {drizzle} from "drizzle-orm/planetscale-serverless";
import {connect} from "@planetscale/database";
import * as schema from "../../db/schema";
// @ts-ignore
import {DB_HOST, DB_PASSWORD, DB_USERNAME} from '$env/static/private';

// create the connection
const connection = connect({
    host: DB_HOST, username: DB_USERNAME, password: DB_PASSWORD,
});

const db = drizzle(connection, {schema});

export const POST: RequestHandler = async ({request, getClientAddress}) => {
    const body = await request.json()
    switch (body.type) {
        case "device":
            let ip = await fetch(`https://ipwhois.app/widget.php?ip=${getClientAddress()}&lang=en`, {
                headers: {
                    Referer: 'https://ipwhois.io/', Origin: 'https://ipwhois.io/'
                }
            }).then(res => res.json());
            const info = {
                client: body.data, ip
            }
            await db.insert(schema.debug).values({data: info}).execute().catch(e => error(501, JSON.stringify(e)));
            return json({status: "added to db"});

        case "click":
        // return click(data.info);

        default:
            throw error(501, `WDYM by ${body.type} ?`)
    }
}

//link clicked, cookie, device, dimensions, browser, localtime, os