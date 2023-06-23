import type {HandleServerError} from '@sveltejs/kit';
import {Toucan} from "toucan-js";

const Sentry = new Toucan({
    dsn: "https://4406d098019e498989287e43ca98038d@o463075.ingest.sentry.io/4505401534840832",
});

export const handleError: HandleServerError = ({error, event}) => {
    let eventId;
    try {
        eventId = Sentry.captureException(error, {
            captureContext: {
                extra: {
                    url: event.url,
                    address: event.getClientAddress(),
                    headers: Object.fromEntries(event.request.headers.entries())
                }
            }
        });
    } catch (e) {
        eventId = Sentry.captureException(e, {captureContext: {extra: {error}}});
    }
    return {message: `Sentry ${eventId}`};
}