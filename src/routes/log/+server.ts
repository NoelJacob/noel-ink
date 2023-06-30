import {text} from '@sveltejs/kit';
import type {RequestHandler} from './$types';
import * as schema from "$lib/db/schema";

export const POST: RequestHandler = async ({request, getClientAddress, locals}) => {
    interface ExtractClientDataRequest {
        type: string,
        body: schema.NewClient,
    }

    const {type, body}: ExtractClientDataRequest = await request.json()
    // let ip = await fetch(`https://ipwhois.app/widget.php?ip=${getClientAddress()}&lang=en`, {
    //     headers: {
    //         Referer: 'https://ipwhois.io/', Origin: 'https://ipwhois.io/'
    //     }
    // }).then(res => res.json());
    // const info = {
    //     client: body, ip
    // }
    if (type === "client") {
        await locals.db.insert(schema.client).values(body).execute();
        return text("db: added client");
    }
    else if (type === "page") {
        await locals.db.insert(schema.page).values(body).execute();
        return text("db: added page");
    }
}

//link clicked, cookie, device, dimensions, browser, localtime, os