import type {HandleServerError} from '@sveltejs/kit';

export const handleError: HandleServerError = ({error, event}) => {
    console.log(`Caught ${JSON.stringify(error)}`);

}