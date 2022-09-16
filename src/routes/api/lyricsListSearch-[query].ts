/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get({ params }) {
	const genius_search_url = `http://api.genius.com/search?q=${params.query}&access_token=${process.env.LYRICS_API_KEY}`;
	const response = await fetch(genius_search_url);
	const response_json = await response.json();

	console.log(response_json);

	const result = response_json.response.hits.map((el) => ({
		artist: el.result.artist_names,
		artist_id: el.result.primary_artist.id,
		title: el.result.title,
		lyrics_url: el.result.url,
		song_art_image_url: el.result.song_art_image_url
	}));

	return {
		body: { status: '200', result: result }
	};
}
