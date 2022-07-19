import { JSDOM } from 'jsdom';

/** @type {import('@sveltejs/kit').RequestHandler} */
/** 歌詞取得
 * @param request(Json): {url: lyrics_url}
 */
export async function post({ request }) {
	const body = await request.json();
	const lyrics_url = body.url;

	const lyrics_response = await fetch(lyrics_url);

	let lyricsHTML = '';
	const jsdom = new JSDOM(await lyrics_response.text());
	const divAll = jsdom.window.document.querySelectorAll('div');
	divAll.forEach((divElement: HTMLElement) => {
		if (divElement.dataset.lyricsContainer === 'true') {
			lyricsHTML += divElement.innerHTML;
		}
	});

	return {
		body: { status: '200', lyricsHTML }
	};
}
