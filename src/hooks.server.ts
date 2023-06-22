import type {HandleServerError} from '@sveltejs/kit';
import {init, captureException} from '@sentry/svelte';
// import crypto from 'crypto';

init({
    dsn: "https://4406d098019e498989287e43ca98038d@o463075.ingest.sentry.io/4505401534840832",
});

export const handleError: HandleServerError = ({error, event}) => {
    const errorId = crypto.randomUUID();
    const eventId = captureException(error, { extra: { event, errorId } });
    return {
        message: `Error ID: ${eventId}`
    }
}