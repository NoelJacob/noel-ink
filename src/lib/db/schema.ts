import {boolean, int, json, mysqlTable, serial, text, varchar, timestamp} from 'drizzle-orm/mysql-core';
import type {InferModel} from 'drizzle-orm';

export const debug = mysqlTable('debug', {
    id: serial('id').primaryKey(),
    data: json('data'),
});

export type Debug = InferModel<typeof debug>;
export type NewDebug = InferModel<typeof debug, 'insert'>;

export const ip = mysqlTable('ip', {
    db_id: serial("db_id", ).primaryKey(), /*here*/
    timestamp: timestamp("timestamp", {mode: 'date' }).defaultNow(), /*here*/
    cookie_id: varchar("cookie_id", {length: 36}), /*cookie.UUID*/
    load_id: varchar("load_id", {length: 36}), /*page.server.UUID*/
    ip: text("ip"), /*ip.ip*/
    city: text("city"), /*ip.city*/
    ip_ype: text("ip_ype"), /*ip.type*/
    eu: boolean("eu"), /*ip.is_eu*/
    postal: text("postal"), /*ip.postal*/
    region: text("region"), /*ip.region*/
    country: text("country"), /*ip.country*/
    tor: boolean("tor"), /*ip.security.tor*/
    vpn: boolean("vpn"), /*ip.security.vpn*/
    proxy: boolean("proxy"), /*ip.security.proxy*/
    hosting: boolean("hosting"), /*ip.security.hosting*/
    anonymous: boolean("anonymous"), /*ip.security.anonymous*/
    tz: text("tz"), /*ip.timezone.utc*/
    tz_dst: boolean("tz_dst"), /*ip.timezone.is_dst*/
    tz_time: text("tz_time"), /*ip.timezone.current_time*/
    ip_org: text("ip_org"), /*ip.connection.org*/
    ip_asn: text("ip_asn"), /*ip.connection.asn*/
    ip_isp: text("ip_isp"), /*ip.connection.isp*/
    ip_domain: text("ip_domain"), /*ip.connection.domain*/
    region_code: text("region_code"), /*ip.region_code*/
    calling_code: text("calling_code"), /*ip.calling_code*/
});

export type Ip = InferModel<typeof ip>;
export type NewIp = InferModel<typeof ip, 'insert'>;

export const client = mysqlTable('client', {
    db_id: serial("db_id", ).primaryKey(), /*here*/
    timestamp: timestamp("timestamp", {mode: 'date' }).defaultNow(), /*here*/
    cookie_id: varchar("cookie_id", {length: 36}), /*cookie.UUID*/
    load_id: varchar("load_id", {length: 36}), /*page.server.UUID*/
    cookies: boolean("cookies"), /*client.cj.cookies_enabled*/
    mobile: boolean("mobile"), /*client.cj.mobile*/
    os_name: text("os_name"), /*client.cj.browser.os.name*/
    os_version: text("os_version"), /*client.cj.browser.os.version*/
    cpu_arch: text("cpu_arch"), /*client.cj.browser.os.cpu.architecture*/
    engine_name: text("engine_name"), /*client.cj.browser.engine.name*/
    engine_version: text("engine_version"), /*client.cj.browser.engine.version*/
    browser_name: text("browser_name"), /*client.cj.browser.browser.name*/
    browser_version: text("browser_version"), /*client.cj.browser.browser.version*/
    lang: text("lang"), /*client.cj.language*/
    sys_lang: text("sys_lang"), /*client.cj.systemLanguage*/
    screen_print: text("screen_print"), /*client.cj.screenPrint*/
    local_storage: boolean("local_storage"), /*client.cj.localStorage*/
    plugins: text("plugins"), /*client.cj.plugins*/
    vendor_flavor: text("vendor_flavor"), /*client.fp.components.vendorFlavors.value.join(",")*/
    device_memory: int("device_memory"), /*client.fp.components.deviceMemory.value*/
    color_depth: int("color_depth"), /*client.fp.components.colorDepth.value*/
    color_gamut: text("color_gamut"), /*client.fp.components.colorGamut.value*/
    hardware_concurrency: int("hardware_concurrency"), /*client.fp.components.hardwareConcurrency.value*/
    hdr: boolean("hdr"), /*client.fp.components.hdr.value*/
    languages: text("languages"), /*client.fp.components.languages.value.join(",")*/
    openDatabase: boolean("openDatabase"), /*client.fp.components.openDatabase.value*/
    os_cpu: text("os_cpu"), /*client.fp.components.osCpu.value*/
    pdf_viewer: boolean("pdf_viewer"), /*client.fp.components.pdfViewerEnabled.value*/
    platform: text("platform"), /*client.fp.components.platform.value*/
    res: text("res"), /*client.fp.components.screenResolution.value.join("x")*/
    session_storage: text("session_storage"), /*client.fp.components.sessionStorage.value*/
    device_tz: text("device_tz"), /*client.fp.components.timezone.value*/
    touch_points: int("touch_points"), /*client.fp.components.touchSupport.value.maxTouchPoints*/
    vendor: text("vendor"), /*client.fp.components.vendor.value+client.cj.browser.device.vendor*/
    video_card: text("video_card"), /*client.fp.components.videoCard.value.renderer*/
    video_card_vendor: text("video_card_vendor"), /*client.fp.components.videoCard.value.vendor*/
    fp_visitor_id: text("fp_visitor_id"), /*client.fp.visitorId*/
    fingerprint: text("fingerprint"), /*client.cj.fingerprint*/
});

export type Client = InferModel<typeof client>;
export type NewClient = InferModel<typeof client, 'insert'>;