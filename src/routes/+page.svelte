<script lang="ts">
    import {onMount} from "svelte";
    import {load} from '@fingerprintjs/fingerprintjs';
    import {ClientJS} from 'clientjs/dist/client.base.min.js';
    import {extractClientData} from "$lib/extract";

    let x = "all good!";

    export let data;

    onMount(() => {
        const sendLog = async () => {
            const fp = await load({delayFallback: 10, monitoring: false}).then(fp => fp.get());
            const client = new ClientJS();
            const cj = {
                fingerprint: client.getFingerprint(),
                browser: client.getBrowserData(),
                mobile: client.isMobile(),
                screenPrint: client.getScreenPrint(),
                plugins: client.getPlugins(),
                mimeTypes: client.getMimeTypes(),
                fonts: client.getFonts(),
                localStorage: client.isLocalStorage(),
                sessionStorage: client.isSessionStorage(),
                cookie: client.isCookie(),
                timeZone: client.getTimeZone(),
                language: client.getLanguage(),
                systemLanguage: client.getSystemLanguage(),
                canvas: client.isCanvas()
            }
            delete fp.confidence.comment;
            const time = new Date().toString();
            const body = extractClientData({load_id: data.load_id, cookie_id: data.cookie_id, fp, cj, time});
            const res = await fetch('/log', {
                body: JSON.stringify({type: "client", body}),
                method: 'POST',
                keepalive: true,
            }).then(x => x.text());
            console.log(res);
        }

        sendLog();


    })

    const handleClick = async (event) => {
        const body = {
            cookie_id: data.cookie_id,
            load_id: data.load_id,
            link: event.srcElement.href,
            time: new Date().toString()
        };
        const res = await fetch('/log', {
            body: JSON.stringify({type: "page", body}),
            method: 'POST',
            keepalive: true,
        }).then(x => x.text());
        console.log(res);
    }

</script>

<div class="inner">
    <a href="https://ngl.link/n.o.e.11" on:click={handleClick} target="_blank">
        <svg class="ngl" clip-rule="evenodd" fill-rule="evenodd" image-rendering="optimizeQuality"
             shape-rendering="geometricPrecision" text-rendering="geometricPrecision" viewBox="0 0 822 460"
             xmlns="http://www.w3.org/2000/svg">
            <path d="M616 6c34 2 67 7 101 16 23 11 35 30 37 56-9 42-17 84-22 127 27 0 47 12 59 37 8 22 15 44 21 67 9 34-2 58-33 74-45 10-89 18-133 25-14-1-26-5-37-12-14-12-26-24-37-37-64 73-138 86-223 38l-23-16h-3c-2 33-19 54-52 60-32 1-64-3-95-10h-2a61 61 0 0 1-55 21c-25-3-48-8-71-15-24-9-38-26-42-50-2-37-1-73 3-108 5-52 11-103 20-154 6-57 37-81 94-73 20 2 40 5 60 10 7-7 16-13 25-17 7-3 15-5 24-4 29 2 57 7 86 15l15 9c36-38 79-52 131-42 34 5 66 17 96 36l2-1c6-30 24-47 54-52Zm86 66 2 3c-12 52-20 104-26 158v25c2 2 4 3 8 3l47-7c5 0 9 2 12 7a1613 1613 0 0 1 20 72l-5 4-114 21-9-3a467 467 0 0 1-37-43c0-2-1-3-2-3l-4-6c0-2-1-3-2-3-6-10-8-21-7-32a1486 1486 0 0 1 27-205l7-7h12l67 12 4 4Zm-152 99c-3 1-5 3-6 6-23 4-46 7-68 8-3-1-5-4-5-6 0-12-3-22-7-32-8-9-16-8-23 2a193 193 0 0 0-23 115c1 12 6 22 16 30 16 4 27-2 34-17-1-2-2-3-4-3l-10 1-10-2c-6-18-10-35-11-53 0-6 4-9 10-10 24-5 49-8 74-9 6-1 10 1 13 7 10 24 17 50 22 76l-3 13a398 398 0 0 1-13 27 22179 22179 0 0 1-24 26c-15 11-32 19-50 24-16 3-31 2-45-2a221 221 0 0 1-40-16 91 91 0 0 1-48-58c-14-60-7-116 20-170 12-23 29-40 52-52 17-6 35-7 54-4 27 4 52 13 76 27 11 8 18 18 21 32 1 13 0 26-2 40ZM179 377a955 955 0 0 0-17-50l-5-19-2-7a619 619 0 0 0-12-44l-4 47-4 96-3 2h-13a741 741 0 0 1-59-14l-4-5a1455 1455 0 0 1 27-272c1-5 4-8 9-10 28 0 55 3 83 10 3 1 6 3 8 7l2 3c4 34 10 68 18 103l4 2a2162 2162 0 0 1 14-130c2-2 3-4 6-5 24 1 48 5 72 11 4 1 6 4 7 9-19 91-30 183-34 276l-4 4c-28 1-56-3-82-10l-7-4Z"/>
            <path d="M702 72c1 0 2 1 2 3l-2-3Zm-519 46c1 0 2 1 2 3l-2-3Zm367 53c-1 3-3 5-6 6 1-3 3-5 6-6Z"/>
            <path d="M143 257c1-2 1-1 2 1l-2-1Z" opacity=".1"/>
            <path d="M592 300c1 0 2 1 2 3-2-1-3-2-2-3Zm-437 1 2 7c-2-3-3-5-2-7Zm443 8c1 0 2 1 2 3-2-1-3-2-2-3Zm-60 12-2 3c-1-2 0-3 2-3Zm-376 6 2 7c-2-3-3-5-2-7Zm455 7c1 0 2 1 2 3-2-1-3-2-2-3Zm-453 0 2 7c-2-3-3-5-2-7Zm354 11-6 5c1-3 3-5 6-5Zm-141 11 3 2c-2 0-3-1-3-2Zm-200 18c1 0 2 1 2 3-2-1-3-2-2-3Z"/>
        </svg>
        NGL.Link&emsp;<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g data-name="Layer 2"><path d="M18 7.05a1 1 0 0 0-1-1L9 6a1 1 0 0 0 0 2h5.56l-8.27 8.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L16 9.42V15a1 1 0 0 0 1 1 1 1 0 0 0 1-1z" data-name="diagonal-arrow-right-up"/></g></svg></a>
    <a href="https://github.com/NoelJacob" on:click={handleClick} target="_blank">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2.2467a10.00042 10.00042 0 0 0-3.16248 19.48749c.5.08752.6875-.21247.6875-.475 0-.23749-.01251-1.025-.01251-1.86249C7 19.85919 6.35 18.78423 6.15 18.22173a3.636 3.636 0 0 0-1.025-1.41253c-.35-.1875-.85-.65-.01251-.66248A2.00117 2.00117 0 0 1 6.65 17.17169a2.13742 2.13742 0 0 0 2.91248.825A2.10376 2.10376 0 0 1 10.2 16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187 3.89187 0 0 1 1.025-2.6875 3.59373 3.59373 0 0 1 .1-2.65s.83747-.26251 2.75 1.025a9.42747 9.42747 0 0 1 5 0c1.91248-1.3 2.75-1.025 2.75-1.025a3.59323 3.59323 0 0 1 .1 2.65 3.869 3.869 0 0 1 1.025 2.6875c0 3.83747-2.33752 4.6875-4.5625 4.9375a2.36814 2.36814 0 0 1 .675 1.85c0 1.33752-.01251 2.41248-.01251 2.75 0 .26251.1875.575.6875.475A10.0053 10.0053 0 0 0 12 2.2467Z"/>
        </svg>
        Github&emsp;<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g data-name="Layer 2"><path d="M18 7.05a1 1 0 0 0-1-1L9 6a1 1 0 0 0 0 2h5.56l-8.27 8.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L16 9.42V15a1 1 0 0 0 1 1 1 1 0 0 0 1-1z" data-name="diagonal-arrow-right-up"/></g></svg></a>
    <a href="https://pinterest.com/noeljacob91/_saved" on:click={handleClick} target="_blank">
        <svg viewBox="0 0 999.9 999.9" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 500c2.6-141.9 52.7-260.4 150.4-355.4S364.6 1.3 500 0c145.8 2.6 265.3 52.4 358.4 149.4 93.1 97 140.3 213.9 141.6 350.6-2.6 140.6-52.7 258.8-150.4 354.5-97.7 95.6-214.2 144.1-349.6 145.4-46.9 0-93.7-7.2-140.6-21.5 9.1-14.3 18.2-30.6 27.3-48.8 10.4-22.1 23.4-63.8 39.1-125 3.9-16.9 9.8-39.7 17.6-68.4 9.1 15.6 24.7 29.9 46.9 43 58.6 27.3 120.4 24.7 185.5-7.8 67.7-39.1 114.6-99.6 140.6-181.6 23.4-85.9 20.5-165.7-8.8-239.2C778.3 277 725.9 224 650.4 191.4c-95-27.3-187.5-24.4-277.3 8.8s-152.3 90.2-187.5 170.9C176.5 401 171 430.7 169 460c-2 29.3-1 57.9 2.9 85.9s13.7 53.1 29.3 75.2 36.5 39.1 62.5 50.8c6.5 2.6 11.7 2.6 15.6 0 5.2-2.6 10.4-13 15.6-31.2 5.2-18.2 7.2-30.6 5.9-37.1-1.3-2.6-3.9-7.2-7.8-13.7-27.3-44.3-36.5-90.8-27.3-139.6 9.1-48.8 29.3-90.2 60.5-124 48.2-43 104.5-66.4 168.9-70.3 64.4-3.9 119.5 13.7 165 52.7 24.7 28.6 40.7 63.1 47.8 103.5s7.2 79.1 0 116.2c-7.2 37.1-19.9 71.9-38.1 104.5-32.6 50.8-71 76.8-115.2 78.1-26-1.3-47.2-11.4-63.5-30.3s-21.2-40.7-14.6-65.4c2.6-14.3 10.4-42.3 23.4-84 13-41.7 20.2-72.9 21.5-93.7-3.9-49.5-26.7-74.9-68.4-76.2-32.6 3.9-56.6 18.6-72.3 43.9s-24.1 54.4-25.4 86.9c3.9 37.8 9.8 63.8 17.6 78.1-14.3 58.6-25.4 105.5-33.2 140.6-2.6 9.1-9.8 37.1-21.5 84s-18.2 82.7-19.5 107.4V957C206.3 914 133.3 851.9 80 770.5 26.7 689.1 0 598.9 0 500z"/>
        </svg>
        Pinterest&emsp;<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g data-name="Layer 2"><path d="M18 7.05a1 1 0 0 0-1-1L9 6a1 1 0 0 0 0 2h5.56l-8.27 8.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L16 9.42V15a1 1 0 0 0 1 1 1 1 0 0 0 1-1z" data-name="diagonal-arrow-right-up"/></g></svg></a>
    <a href="https://open.spotify.com/user/noeljacob" on:click={handleClick} target="_blank">
        <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 0C3.589 0 0 3.589 0 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zm3.67 11.548a.499.499 0 0 1-.696.122c-1.875-1.318-4.994-1.391-7.1-.9a.5.5 0 0 1-.226-.975c2.315-.536 5.775-.438 7.9 1.057a.5.5 0 0 1 .122.696zm.976-1.951a.5.5 0 0 1-.698.114C9.773 8.15 7.101 7.762 3.535 8.49a.5.5 0 1 1-.201-.98c3.857-.787 6.779-.347 9.197 1.388a.502.502 0 0 1 .115.699zm.986-2.62a.5.5 0 0 1-.695.133c-2.757-1.871-6.948-1.88-9.661-.92a.5.5 0 1 1-.333-.944C5.894 4.203 10.467 4.225 13.5 6.282a.502.502 0 0 1 .132.695z"/>
        </svg>
        Spotify&emsp;<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g data-name="Layer 2"><path d="M18 7.05a1 1 0 0 0-1-1L9 6a1 1 0 0 0 0 2h5.56l-8.27 8.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L16 9.42V15a1 1 0 0 0 1 1 1 1 0 0 0 1-1z" data-name="diagonal-arrow-right-up"/></g></svg></a>
    <a href="https://www.linkedin.com/in/noel-jacob" on:click={handleClick} target="_blank">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.47 2H3.53a1.45 1.45 0 0 0-1.47 1.43v17.14A1.45 1.45 0 0 0 3.53 22h16.94a1.45 1.45 0 0 0 1.47-1.43V3.43A1.45 1.45 0 0 0 20.47 2ZM8.09 18.74h-3v-9h3ZM6.59 8.48a1.56 1.56 0 1 1 0-3.12 1.57 1.57 0 1 1 0 3.12Zm12.32 10.26h-3v-4.83c0-1.21-.43-2-1.52-2A1.65 1.65 0 0 0 12.85 13a2 2 0 0 0-.1.73v5h-3v-9h3V11a3 3 0 0 1 2.71-1.5c2 0 3.45 1.29 3.45 4.06Z"/>
        </svg>
        LinkedIn&emsp;<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g data-name="Layer 2"><path d="M18 7.05a1 1 0 0 0-1-1L9 6a1 1 0 0 0 0 2h5.56l-8.27 8.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L16 9.42V15a1 1 0 0 0 1 1 1 1 0 0 0 1-1z" data-name="diagonal-arrow-right-up"/></g></svg></a>
</div>

<div class="banner">
   <span>
       🚧&emsp;This page is under construction&emsp;🚧
   </span>
</div>

<style>

    .banner {
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        padding: 1rem 0;
        text-align: center;
        color: white;
        font-weight: 500;
    }

    .banner > span {
        display: inline-block;
        padding: 0.5rem 1rem;
        border-radius: 0.7rem;
        background: indianred;
        /*text-shadow: 0.03rem 0.03rem 0.1rem #2f1d20;*/
    }

    svg {
        position: relative;
        top: .125em;
        height: 1em;
        width: 1em;
        fill: currentColor;
        right: .250em;
    }

    svg.ngl {
        height: 1.3em;
        width: 1.3em;
        right: .125em;
        top: .250em;
        transform: rotate(5deg);
    }

    .inner {
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        margin: 2rem 0 0 2rem;
        font-weight: 900;
    }

    .inner > a {
        margin: 1rem 0;
        font-size: 2rem;
        text-decoration: none;
        color: #ffdfe4;
        letter-spacing: -0.07rem;
    }

    .inner > a:hover {
        color: #ffffff;
        text-shadow: 0.25rem 0.25rem 0.05rem #2f1d20;
    }

    /*.inner > a:after {*/
    /*    content: ' ↗';*/
    /*}*/

</style>