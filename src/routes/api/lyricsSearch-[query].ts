/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get({ params }) {
	return {
		body: { message: `lyrics get:${params.query}` }
	};
}

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function post({ params }) {
	return {
		body: { message: `lyrics post:${params.query}` }
	};
}
