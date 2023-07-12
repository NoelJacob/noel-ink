import type {PageServerLoad} from "./$types"
import * as schema from "$lib/db/schema";
import {extractIpData} from "$lib/extract";

export const load: PageServerLoad = async ({getClientAddress, locals, cookies, platform}) => {
    let old_load_id = Number(cookies.get("load"));
    if (!isFinite(old_load_id)) old_load_id = 0;
    let load_id = String(old_load_id + 1);
    cookies.set("load", load_id, {path: "/", maxAge: 60 * 60 * 24 * 365 * 9});

    let cookie_id = cookies.get("UUID");
    if (!cookie_id) {
        cookie_id = crypto.randomUUID();
        cookies.set("UUID", cookie_id, {path: "/", maxAge: 60 * 60 * 24 * 365 * 9});
    }

    const addIp = async (cookie_id: string, load_id: string) => {
        let ip = await fetch(`https://ipwhois.app/widget.php?ip=${getClientAddress()}&lang=en`, {
            headers: {
                Referer: 'https://ipwhois.io/', Origin: 'https://ipwhois.io/'
            }
        }).then(res => res.json());
        const ipData = await extractIpData({ip, cookie_id, load_id});
        await locals.db.insert(schema.ip).values(ipData).execute();
    }

    platform.context.waitUntil(addIp(cookie_id, load_id));
    return {load_id, cookie_id}
}