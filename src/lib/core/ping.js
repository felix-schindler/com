/**
 * Creates and loads an image element by url.
 * @param  {string} url
 * @return {Promise<HTMLImageElement>} promise that resolves to an image element or
 *                   fails to an Error.
 */
function request_image(url) {
	return new Promise((resolve, reject) => {
		let img = new Image();
		img.onload = () => resolve(img);
		img.onerror = () => reject(url);
		img.src = url + '?random-no-cache=' + Math.floor((1 + Math.random()) * 0x10000).toString(16);
	});
}

/**
 * Pings a url.
 * @param  {string} url
 * @param  {number | undefined} multiplier - optional, factor to adjust the ping by.  0.3 works well for HTTP servers.
 * @return {Promise<number>} promise that resolves to a ping (ms, float).
 */
export default async function ping(url, multiplier = undefined) {
	return new Promise((resolve, reject) => {
		let start = (new Date()).getTime();
		let response = () => {
			let delta = ((new Date()).getTime() - start);
			delta *= (multiplier || 1);
			resolve(delta);
		};
		request_image(url).then(response).catch(response);

		// Set a timeout for max-pings, 5s.
		setTimeout(() => reject(Error('Timeout')), 5000);
	});
}
