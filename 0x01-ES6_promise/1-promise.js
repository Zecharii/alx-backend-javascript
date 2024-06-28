/**
 * Returns a promise that resolves or rejects based on the input parameter.
 * @param {boolean} success - Determines whether the promise resolves or rejects.
 * @returns {Promise} - A promise that either resolves with an object or rejects with an error.
 */
export default function getFullResponseFromAPI(success) {
	return new Promise((resolve, reject) => {
		if (success) {
			resolve({
				status: 200,
				body: 'Success'
			});
		} else {
			reject(new Error('The fake API is not working currently'));
		}
	});
}
