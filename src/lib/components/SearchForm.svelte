<script>
	export let value = '';
	export let searchYouTube = false;
	export let searchLyrics = false;

	const handleSubmit = () => {
		console.log(value);
		console.log(searchYouTube);
		console.log(searchLyrics);
	};
</script>

<form on:submit|preventDefault={handleSubmit} class="w-full flex justify-center items-baseline m-2">
	<input
		type="text"
		class="text-gray-700 bg-white border border-solid border-gray-300 rounded mr-2"
		bind:value
		placeholder="Search..."
	/>
	<button class="px-5 py-1.5 bg-blue-600 text-white text-xs rounded mr-2">検索</button>
	<input type="checkbox" bind:checked={searchYouTube} />YouTube
	<input type="checkbox" bind:checked={searchLyrics} />歌詞検索
</form>
