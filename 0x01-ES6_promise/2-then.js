/**
 * Handles the response from a promise.
 * @param {Promise} promise - The promise to handle.
 * @returns {Promise} - The handled promise.
 */
export default function handleResponseFromAPI(promise) {
  return promise
    .then(() => ({ status: 200, body: 'success' }))
    .catch(() => new Error())
    .finally(() => console.log('Got a response from the API'));
}
