import {int, json, mysqlTable, serial, text, varchar} from 'drizzle-orm/mysql-core';

// export const device = mysqlTable('device', {
//     id: serial('id').primaryKey(),
//     fingerprint: varchar('fingerprint', {length: 32}),
//     ip: text('ip'),
//     cookie: varchar('cookie', {length: 256}),
// });

export const debug = mysqlTable('debug', {
    id: serial('id').primaryKey(),
    data: json('data'),
});

// export const click = mysqlTable('auth_otp', {
//     id: serial('id').primaryKey(),
//     phone: varchar('phone', {length: 256}),
//     userId: int('user_id').references(() => device.id),
// });