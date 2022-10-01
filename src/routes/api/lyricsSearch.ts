import { load } from 'cheerio';

/** @type {import('@sveltejs/kit').RequestHandler} */
/** 歌詞取得
 * @param request(Json): {url: lyrics_url}
 */
export async function post({ request }) {
	const requestJson = await request.json();
	const lyrics_url = requestJson.url;

	const lyrics_response = await fetch(lyrics_url);

	let lyricsHTML = '';
	const $ = load(await lyrics_response.text());
	const isLyricsClass = $('div[class="lyrics"]').text().trim();
	if (!isLyricsClass) {
		$('div[class^="Lyrics__Container"]').each((i, elem) => {
			if ($(elem).text().length !== 0) {
				const snippet = $(elem)
					.html()
					.replace(/<br>/g, '\n')
					.replace(/<(?!\s*br\s*\/?)[^>]+>/gi, '');
				lyricsHTML += snippet.trim() + '\n\n';
			}
		});
	}

	// アーティスト

	return {
		status: '200',
		body: {
			lyricsHTML
		}
	};
}
