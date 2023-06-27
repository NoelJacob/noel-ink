import type {NewClient, NewIp} from "$lib/db/schema";

// export interface ipData {
//     ip: string, /*ip.ip*/
//     city: string, /*ip.city*/
//     ip_ype: string, /*ip.type*/
//     eu: boolean, /*ip.is_eu*/
//     postal: string, /*ip.postal*/
//     region: string, /*ip.region*/
//     country: string, /*ip.country*/
//     tor: boolean, /*ip.security.tor*/
//     vpn: boolean, /*ip.security.vpn*/
//     proxy: boolean, /*ip.security.proxy*/
//     hosting: boolean, /*ip.security.hosting*/
//     anonymous: boolean, /*ip.security.anonymous*/
//     tz: string, /*ip.timezone.utc*/
//     tz_dst: boolean, /*ip.timezone.is_dst*/
//     tz_time: string, /*ip.timezone.current_time*/
//     ip_org: string, /*ip.connection.org*/
//     ip_asn: string, /*ip.connection.asn*/
//     ip_isp: string, /*ip.connection.isp*/
//     ip_domain: string, /*ip.connection.domain*/
//     region_code: string, /*ip.region_code*/
//     calling_code: string, /*ip.calling_code*/
// }
// export interface clientData {
//     cookies: boolean, /*client.cj.cookies_enabled*/
//     mobile: boolean, /*client.cj.mobile*/
//     os_name: string, /*client.cj.browser.os.name*/
//     os_version: string, /*client.cj.browser.os.version*/
//     cpu_arch: string, /*client.cj.browser.os.cpu.architecture*/
//     engine_name: string, /*client.cj.browser.engine.name*/
//     engine_version: string, /*client.cj.browser.engine.version*/
//     browser_name: string, /*client.cj.browser.browser.name*/
//     browser_version: string, /*client.cj.browser.browser.version*/
//     lang: string, /*client.cj.language*/
//     sys_lang: string, /*client.cj.systemLanguage*/
//     screen_print: string, /*client.cj.screenPrint*/
//     local_storage: boolean, /*client.cj.localStorage*/
//     plugins: string, /*client.cj.plugins*/
//     vendor_flavor: string, /*client.fp.components.vendorFlavors.value.join(",")*/
//     device_memory: number, /*client.fp.components.deviceMemory.value*/
//     color_depth: number, /*client.fp.components.colorDepth.value*/
//     color_gamut: string, /*client.fp.components.colorGamut.value*/
//     hardware_concurrency: number, /*client.fp.components.hardwareConcurrency.value*/
//     hdr: boolean, /*client.fp.components.hdr.value*/
//     languages: string, /*client.fp.components.languages.value.join(",")*/
//     openDatabase: boolean, /*client.fp.components.openDatabase.value*/
//     os_cpu: number, /*client.fp.components.osCpu.value*/
//     pdf_viewer: boolean, /*client.fp.components.pdfViewerEnabled.value*/
//     platform: string, /*client.fp.components.platform.value*/
//     res: string, /*client.fp.components.screenResolution.value.join("x")*/
//     session_storage: string, /*client.fp.components.sessionStorage.value*/
//     device_tz: string, /*client.fp.components.timezone.value*/
//     touch_points: number, /*client.fp.components.touchSupport.value.maxTouchPoints*/
//     vendor: string, /*client.fp.components.vendor.value+client.cj.browser.device.vendor*/
//     video_card: string, /*client.fp.components.videoCard.value.renderer*/
//     video_card_vendor: string, /*client.fp.components.videoCard.value.vendor*/
//     fp_visitor_id: string, /*client.fp.visitorId*/
// }

interface ExtractIpData {
    cookie_id: string,
    load_id: string,
    ip: any
}

export const extractIpData = ({cookie_id, load_id, ip}: ExtractIpData): NewIp => {
    return {
        load_id,
        cookie_id,
        ip: ip.ip,
        city: ip.city,
        ip_ype: ip.type,
        eu: ip.is_eu,
        postal: ip.postal,
        region: ip.region,
        country: ip.country,
        tor: ip.security?.tor,
        vpn: ip.security?.vpn,
        proxy: ip.security?.proxy,
        hosting: ip.security?.hosting,
        anonymous: ip.security?.anonymous,
        tz: ip.timezone?.utc,
        tz_dst: ip.timezone?.is_dst,
        tz_time: ip.timezone?.current_time,
        ip_org: ip.connection?.org,
        ip_asn: ip.connection?.asn,
        ip_isp: ip.connection?.isp,
        ip_domain: ip.connection?.domain,
        region_code: ip.region_code,
        calling_code: ip.calling_code
    }
}

interface ExtractClientData {
    cookie_id: string,
    load_id: string,
    cj: any,
    fp: any
}

export const extractClientData = ({cookie_id, load_id, cj, fp}: ExtractClientData): NewClient => {
    return {
        load_id,
        cookie_id,
        cookies: cj.cookies_enabled,
        mobile: cj.mobile,
        os_name: cj.browser?.os?.name,
        os_version: cj.browser?.os?.version,
        cpu_arch: cj.browser?.cpu?.architecture,
        engine_name: cj.browser?.engine?.name,
        engine_version: cj.browser?.engine?.version,
        browser_name: cj.browser?.browser?.name,
        browser_version: cj.browser?.browser?.version,
        lang: cj.language,
        sys_lang: cj.systemLanguage,
        screen_print: cj.screenPrint,
        local_storage: cj.localStorage,
        plugins: cj.plugins,
        vendor_flavor: fp.components?.vendorFlavors?.value?.join(","),
        device_memory: fp.components?.deviceMemory?.value,
        color_depth: fp.components?.colorDepth?.value,
        color_gamut: fp.components?.colorGamut?.value,
        hardware_concurrency: fp.components?.hardwareConcurrency?.value,
        hdr: fp.components?.hdr?.value,
        languages: fp.components?.languages?.value?.join(","),
        openDatabase: fp.components?.openDatabase?.value,
        os_cpu: fp.components?.osCpu?.value,
        pdf_viewer: fp.components?.pdfViewerEnabled?.value,
        platform: fp.components?.platform?.value,
        res: fp.components?.screenResolution?.value?.join("x"),
        session_storage: fp.components?.sessionStorage?.value,
        device_tz: fp.components?.timezone?.value,
        touch_points: fp.components?.touchSupport?.value?.maxTouchPoints,
        vendor: fp.components?.vendor?.value + ", " + cj.browser?.device?.vendor ?? '',
        video_card: fp.components?.videoCard?.value?.renderer,
        video_card_vendor: fp.components?.videoCard?.value?.vendor,
        fp_visitor_id: fp.visitorId,
        fingerprint: cj.fingerprint
    }
}

// export const getFromBrowser = () => {
//    const vc = getVideoCard();
//     return {
//         vendor_flavors: getVendorFlavors().join(","),
//         device_memory: parseFloat(window.navigator.deviceMemory),
//         color_depth: window.screen.colorDepth,
//         color_gamut: getColorGamut(),
//         hardware_concurrency: window.navigator.hardwareConcurrency,
//         hdr: isHDR(),
//         languages: getLanguages().join(","),
//         openDatabase:!!window.openDatabase,
//         os_cpu: window.navigator.oscpu,
//         pdf_viewer: window.navigator.pdfViewerEnabled,
//         platform: getPlatform(),
//         res: getScreenResolution().join("x"),
//         session_storage: !!window.sessionStorage,
//         device_tz: getTimezone(),
//         touch_points: window.navigator?.maxTouchPoints ?? window.navigator?.msMaxTouchPoints ?? null,
//         vendor: window.navigator?.vendor ?? null,
//         video_card: vc?.renderer ?? null,
//         video_card_vendor: vc?.vendor ?? null,
//
//     }
// }
//
// function getVideoCard() {
//     var _a;
//     var canvas = document.createElement('canvas');
//     var gl = (_a = canvas.getContext('webgl')) !== null && _a !== void 0 ? _a : canvas.getContext('experimental-webgl');
//     if (gl && 'getExtension' in gl) {
//         var debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
//         if (debugInfo) {
//             return {
//                 vendor: (gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL) || '').toString(),
//                 renderer: (gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL) || '').toString(),
//             };
//         }
//     }
//     return undefined;
// }
//
// function getTimezone() {
//     var _a;
//     var DateTimeFormat = (_a = window.Intl) === null || _a === void 0 ? void 0 : _a.DateTimeFormat;
//     if (DateTimeFormat) {
//         var timezone = new DateTimeFormat().resolvedOptions().timeZone;
//         if (timezone) {
//             return timezone;
//         }
//     }
//     // For browsers that don't support timezone names
//     // The minus is intentional because the JS offset is opposite to the real offset
//     var offset = -getTimezoneOffset();
//     return "UTC".concat(offset >= 0 ? '+' : '').concat(Math.abs(offset));
// }
//
// function getTimezoneOffset() {
//     var currentYear = new Date().getFullYear();
//     // The timezone offset may change over time due to daylight saving time (DST) shifts.
//     // The non-DST timezone offset is used as the result timezone offset.
//     // Since the DST season differs in the northern and the southern hemispheres,
//     // both January and July timezones offsets are considered.
//     return Math.max(
//         // `getTimezoneOffset` returns a number as a string in some unidentified cases
//         parseFloat(new Date(currentYear, 0, 1).getTimezoneOffset()), parseFloat(new Date(currentYear, 6, 1).getTimezoneOffset()));
// }
//
// function getScreenResolution() {
//     var s = screen;
//     // Some browsers return screen resolution as strings, e.g. "1200", instead of a number, e.g. 1200.
//     // I suspect it's done by certain plugins that randomize browser properties to prevent fingerprinting.
//     // Some browsers even return  screen resolution as not numbers.
//     var parseDimension = function (value) { return replaceNaN(parseInt(value), null); };
//     var dimensions = [parseDimension(s.width), parseDimension(s.height)];
//     dimensions.sort().reverse();
//     return dimensions;
// }
//
// function replaceNaN(value, replacement) {
//     return typeof value === 'number' && isNaN(value) ? replacement : value;
// }
//
// function getPlatform() {
//     // Android Chrome 86 and 87 and Android Firefox 80 and 84 don't mock the platform value when desktop mode is requested
//     var platform = navigator.platform;
//     // iOS mocks the platform value when desktop version is requested: https://github.com/fingerprintjs/fingerprintjs/issues/514
//     // iPad uses desktop mode by default since iOS 13
//     // The value is 'MacIntel' on M1 Macs
//     // The value is 'iPhone' on iPod Touch
//     if (platform === 'MacIntel') {
//         if (isWebKit() && !isDesktopSafari()) {
//             return isIPad() ? 'iPad' : 'iPhone';
//         }
//     }
//     return platform;
// }
//
// function isIPad() {
//     // Checked on:
//     // Safari on iPadOS (both mobile and desktop modes): 8, 11, 12, 13, 14
//     // Chrome on iPadOS (both mobile and desktop modes): 11, 12, 13, 14
//     // Safari on iOS (both mobile and desktop modes): 9, 10, 11, 12, 13, 14
//     // Chrome on iOS (both mobile and desktop modes): 9, 10, 11, 12, 13, 14
//     // Before iOS 13. Safari tampers the value in "request desktop site" mode since iOS 13.
//     if (navigator.platform === 'iPad') {
//         return true;
//     }
//     var s = screen;
//     var screenRatio = s.width / s.height;
//     return (countTruthy([
//         'MediaSource' in window,
//         !!Element.prototype.webkitRequestFullscreen,
//         // iPhone 4S that runs iOS 9 matches this. But it won't match the criteria above, so it won't be detected as iPad.
//         screenRatio > 0.65 && screenRatio < 1.53,
//     ]) >= 2);
// }
// function isDesktopSafari() {
//     var w = window;
//     return (countTruthy([
//         'safari' in w,
//         !('DeviceMotionEvent' in w),
//         !('ongestureend' in w),
//         !('standalone' in navigator),
//     ]) >= 3);
// }
//
// function isWebKit() {
//     // Based on research in September 2020
//     var w = window;
//     var n = navigator;
//     return (countTruthy([
//         'ApplePayError' in w,
//         'CSSPrimitiveValue' in w,
//         'Counter' in w,
//         n.vendor.indexOf('Apple') === 0,
//         'getStorageUpdates' in n,
//         'WebKitMediaKeys' in w,
//     ]) >= 4);
// }
//
// function getVendorFlavors() {
//     let flavors = [];
//     for (let _i = 0, _a = [
//         // Blink and some browsers on iOS
//         'chrome',
//         // Safari on macOS
//         'safari',
//         // Chrome on iOS (checked in 85 on 13 and 87 on 14)
//         '__crWeb',
//         '__gCrWeb',
//         // Yandex Browser on iOS, macOS and Android (checked in 21.2 on iOS 14, macOS and Android)
//         'yandex',
//         // Yandex Browser on iOS (checked in 21.2 on 14)
//         '__yb',
//         '__ybro',
//         // Firefox on iOS (checked in 32 on 14)
//         '__firefox__',
//         // Edge on iOS (checked in 46 on 14)
//         '__edgeTrackingPreventionStatistics',
//         'webkit',
//         // Opera Touch on iOS (checked in 2.6 on 14)
//         'oprt',
//         // Samsung Internet on Android (checked in 11.1)
//         'samsungAr',
//         // UC Browser on Android (checked in 12.10 and 13.0)
//         'ucweb',
//         'UCShellJava',
//         // Puffin on Android (checked in 9.0)
//         'puffinDevice',
//         // UC on iOS and Opera on Android have no specific global letiables
//         // Edge for Android isn't checked
//     ]; _i < _a.length; _i++) {
//         let key = _a[_i];
//         let value = window[key];
//         if (value && typeof value === 'object') {
//             flavors.push(key);
//         }
//     }
//     return flavors.sort();
// }
//
// function getColorGamut() {
//     // rec2020 includes p3 and p3 includes srgb
//     for (let _i = 0, _a = ['rec2020', 'p3', 'srgb']; _i < _a.length; _i++) {
//         let gamut = _a[_i];
//         if (matchMedia("(color-gamut: ".concat(gamut, ")")).matches) {
//             return gamut;
//         }
//     }
//     return undefined;
// }
//
// function isHDR() {
//     function doesMatch(value: string) {
//         return matchMedia("(dynamic-range: ".concat(value, ")")).matches;
//     }
//     if (doesMatch('high')) {
//         return true;
//     }
//     if (doesMatch('standard')) {
//         return false;
//     }
//     return undefined;
// }
//
// function getLanguages() {
//     var n = window.navigator;
//     var result = [];
//     var language = n.language || n.userLanguage || n.browserLanguage || n.systemLanguage;
//     if (language !== undefined) {
//         result.push([language]);
//     }
//     if (Array.isArray(n.languages)) {
//         // Starting from Chromium 86, there is only a single value in `navigator.language` in Incognito mode:
//         // the value of `navigator.language`. Therefore the value is ignored in this browser.
//         if (!(isChromium() && isChromium86OrNewer())) {
//             result.push(n.languages);
//         }
//     }
//     else if (typeof n.languages === 'string') {
//         var languages = n.languages;
//         if (languages) {
//             result.push(languages.split(','));
//         }
//     }
//     return result;
// }
//
// function isChromium86OrNewer() {
//     // Checked in Chrome 85 vs Chrome 86 both on desktop and Android
//     var w = window;
//     return (countTruthy([
//         !('MediaSettingsRange' in w),
//         'RTCEncodedAudioFrame' in w,
//         '' + w.Intl === '[object Intl]',
//         '' + w.Reflect === '[object Reflect]',
//     ]) >= 3);
// }
//
// function countTruthy(values) {
//     return values.reduce(function (sum, value) { return sum + (value ? 1 : 0); }, 0);
// }
//
// function isChromium() {
//     // Based on research in October 2020. Tested to detect Chromium 42-86.
//     var w = window;
//     var n = navigator;
//     return (countTruthy([
//         'webkitPersistentStorage' in n,
//         'webkitTemporaryStorage' in n,
//         n.vendor.indexOf('Google') === 0,
//         'webkitResolveLocalFileSystemURL' in w,
//         'BatteryManager' in w,
//         'webkitMediaStream' in w,
//         'webkitSpeechGrammar' in w,
//     ]) >= 5);
// }