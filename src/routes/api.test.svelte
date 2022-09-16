<script lang="ts">
	import '../styles/tailwind.css';

	async function handleYoutubeGet(): Promise<void> {
		const res = await fetch(`./api/youtubeSearch-あいう えお?aaaa=tsssest&bbb=tttaaat`);
		const data = await res.json();
		console.log(data);
	}

	async function handleYoutubePost(): Promise<void> {
		const formData = new FormData();
		formData.append('aaa', 'aiue');
		formData.append('bbb', 'aitestseue');
		const res = await fetch(`./api/youtubeSearch-vvvv`, {
			method: 'POST',
			body: formData
		});
		const data = await res.json();
		console.log(data);
	}

	let inputValue: string;
	let lyrics_url: string;
	async function handleLyricsListSearch(): Promise<void> {
		if (inputValue) {
			const res = await fetch(`./api/lyricsListSearch-${inputValue}`);
			const data = await res.json();
			console.log(data);
			lyrics_url = data.result[0].lyrics_url;
		} else {
			alert('inputText is empty');
		}
	}

	async function handleLyricsSearch(): Promise<void> {
		if (lyrics_url) {
			const res = await fetch(`./api/lyricsSearch`, {
				method: 'POST',
				body: JSON.stringify({ url: lyrics_url })
			});
			const data = await res.json();
			console.log(data);
		} else {
			alert('lyrics_url is empty');
		}
	}
</script>

<div class="flex flex-col justify-between">
	<button on:click={handleYoutubeGet}>youtube get</button>
	<button on:click={handleYoutubePost}>youtube post</button>
	<br />

	歌詞検索テスト<br />
	<input class="border-2" type="text" bind:value={inputValue} /><br />
	<button class="border-2" on:click={handleLyricsListSearch}>lyricsListSearch</button>
	<button class="border-2" on:click={handleLyricsSearch}>lyricsSearch</button>
</div>
