import type {HandleServerError} from '@sveltejs/kit';
import {init, sentryHandle, handleErrorWithSentry, } from "@sentry/sveltekit";

init({
    dsn: "https://4406d098019e498989287e43ca98038d@o463075.ingest.sentry.io/4505401534840832",

    // We recommend adjusting this value in production, or using tracesSampler
    // for finer control
    tracesSampleRate: 1.0,
});

export const handle = sentryHandle();

export const handleError = handleErrorWithSentry();
