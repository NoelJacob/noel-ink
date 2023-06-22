import {init, handleErrorWithSentry, Replay} from "@sentry/sveltekit";
import type {HandleClientError} from '@sveltejs/kit';

init({
    dsn: "https://4406d098019e498989287e43ca98038d@o463075.ingest.sentry.io/4505401534840832",

    tracesSampleRate: 1.0,
    integrations: [new Replay()],
    replaysSessionSampleRate: 1.0,
    replaysOnErrorSampleRate: 1.0,
});

export const handleError = handleErrorWithSentry();