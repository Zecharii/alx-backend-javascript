/**
 * Function to get a response from an API.
 * This function returns a Promise which will resolve or reject based on some condition.
 * 
 * @returns {Promise} A Promise that represents the asynchronous operation.
 */
export default function getResponseFromAPI() {
	return new Promise((resolve, reject) => {
		resolve('This is a success');
	});
}
