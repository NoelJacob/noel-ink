import {connect} from "@planetscale/database";
import {drizzle} from "drizzle-orm/planetscale-serverless";
import {eq, isNull} from "drizzle-orm";
import * as schema from "./src/lib/db/schema";
import {extractIpData} from "./src/lib/extract";
import 'dotenv/config'

const {DB_HOST, DB_USERNAME, DB_PASSWORD} = process.env;

console.log(DB_HOST, DB_USERNAME, DB_PASSWORD);

const connection = connect({
    host: DB_HOST, username: DB_USERNAME, password: DB_PASSWORD
});

const db = drizzle(connection, {schema});

const x = await db.select({
    db_id: schema.ip.db_id,
    ip_addr: schema.ip.ip,
    cookie_id: schema.ip.cookie_id,
    load_id: schema.ip.load_id,
}).from(schema.ip).where(isNull(schema.ip.city)).execute();

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

let i = 0;

let z: any[] = [];
for (const {db_id, ip_addr, cookie_id, load_id} of x) {
    if (!ip_addr || !cookie_id || !load_id) throw new Error(`Null in ${JSON.stringify({ip_addr, cookie_id, load_id})}`);

    ++i;
    // await delay(100);
    // if (i % 5 === 0) {
    //     console.log("waiting...");
    //     await delay(1500);
    // }
    const ip = await fetch(`https://ipwhois.app/widget.php?ip=${ip_addr}&lang=en`, {
        headers: {
            Referer: 'https://ipwhois.io/', Origin: 'https://ipwhois.io/'
        }
    }).then(res => res.json()).catch(e => {
        console.error(`${ip_addr} failed on ${i}`);
        throw e;
    });

    let data = extractIpData({ip, cookie_id, load_id})
    console.log(db_id, data.ip, data.city);
    if (!data.ip || !data.city) break;

    await db.update(schema.ip).set(data).where(eq(schema.ip.db_id, db_id)).execute();
    z.push({db_id, data});
}

console.log("done")

// await db.transaction(
//     async (tx) => {
//         for (let i of z) {
//             const {db_id, data} = await i;
//             await tx.update(schema.ip).set(data).where(eq(schema.ip.db_id, db_id)).execute();
//         }
//     }
// );
