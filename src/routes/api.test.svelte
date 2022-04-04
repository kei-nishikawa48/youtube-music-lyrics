<script lang="ts">
	let aaaa: string = 'aaaa';

	async function handleYoutubeGet(): Promise<void> {
		const res = await fetch(`./api/youtubeSearch-あいう　えお?aaaa=tsssest&bbb=tttaaat`);
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

	async function handleLyricsGet(): Promise<void> {
		const res = await fetch(`./api/lyricsSearch-か　きくけ`);
		const data = await res.json();
		console.log(data);
	}

	async function handlelyricsSearchPost(): Promise<void> {
		const res = await fetch(`./api/lyricsSearch-か　きくけ`, {
			method: 'POST'
		});
		const data = await res.json();
		console.log(data);
	}
</script>

<button on:click={handleYoutubeGet}>youtube get</button>
<button on:click={handleYoutubePost}>youtube post</button>
<br />

<button on:click={handleLyricsGet}>lyrics get</button>
<button on:click={handlelyricsSearchPost}>lyrics post</button>
