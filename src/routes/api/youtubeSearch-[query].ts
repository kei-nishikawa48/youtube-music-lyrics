/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get({ params, url }) {
	const aaaa = url.searchParams.get('aaaa');
	const bbb = url.searchParams.get('bbb');
	return {
		body: { aaaa, bbb, message: `youtube get:${params.query}` }
	};
}

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function post({ request, params }) {
	const body = await request.formData();
	const aaa = body.get('aaa');
	const bbb = body.get('bbb');

	return {
		body: { aaa, bbb, message: `youtube post:/*${params.query}` }
	};
}
