/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get({ params }) {
	const genius_search_url = `http://api.genius.com/search?q=${params.query}&access_token=${process.env.LYRICS_API_KEY}`;
	const response = await fetch(genius_search_url);
	const response_json = await response.json();

	console.log(response, response_json);

	if (response_json.response.hits.length === 0) {
		return {
			status: 404,
			body: {
				message: 'Not Found'
			}
		};
	}

	const result = response_json.response.hits.map(
		(song: {
			result: {
				artist_names: string;
				primary_artist: { id: string };
				title: string;
				url: string;
				song_art_image_url: string;
			};
		}) => ({
			artist: song.result.artist_names,
			artist_id: song.result.primary_artist.id,
			title: song.result.title,
			lyrics_url: song.result.url,
			song_art_image_url: song.result.song_art_image_url
		})
	);

	return {
		status: '200',
		body: { result: result }
	};
}
