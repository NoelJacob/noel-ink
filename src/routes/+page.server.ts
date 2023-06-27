import type {PageServerLoad} from "./$types"
import * as schema from "$lib/db/schema";

export const load: PageServerLoad = async ({getClientAddress, locals, cookies}) => {
    const load_id = crypto.randomUUID();
    let cookie_id = cookies.get("UUID");
    if (!cookie_id) {
        cookies.set("UUID", load_id, {path: "/"});
        cookie_id = load_id;
    }
    await locals.db.insert(schema.ip).values({load_id, cookie_id, ip: getClientAddress()}).execute();
    return {load_id}
}