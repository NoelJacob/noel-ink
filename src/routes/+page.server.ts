import type {PageServerLoad} from "./$types"
import * as schema from "$lib/db/schema";

export const load: PageServerLoad = async ({getClientAddress, locals, cookies}) => {
    let old_load_id = cookies.get("load") ?? "0";
    let load_id = String(Number(old_load_id) + 1);
    cookies.set("load", load_id, {path: "/", maxAge: 60 * 60 * 24 * 365 * 9});

    let cookie_id = cookies.get("UUID");
    if (!cookie_id) {
        cookie_id = crypto.randomUUID();
        cookies.set("UUID", cookie_id, {path: "/", maxAge: 60 * 60 * 24 * 365 * 9});
    }
    await locals.db.insert(schema.ip).values({load_id, cookie_id, ip: getClientAddress()}).execute();
    return {load_id, cookie_id}
}