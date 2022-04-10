<script>
	import '../styles/tailwind.css';

	import SearchForm from '../lib/components/SearchForm.svelte';
	import CheckBox from '../lib/components/CheckBox.svelte';
	let searchWord = '';
	let searchYouTube = false;
	let searchLyrics = false;

	const handleSubmit = () => {
		console.log(searchWord);
		console.log(searchYouTube);
		console.log(searchLyrics);
	};

	import LyricsView from '../lib/components/organisms/LyricsView.svelte';
</script>

<h1>Welcome to SvelteKit</h1>

<form on:submit|preventDefault={handleSubmit}>
	<SearchForm bind:value={searchWord} />
	<CheckBox bind:checked={searchYouTube} />YouTube
	<CheckBox bind:checked={searchLyrics} />歌詞検索
</form>

<div class="flex flex-row">
	<div>youtube</div>
	<LyricsView />
</div>
