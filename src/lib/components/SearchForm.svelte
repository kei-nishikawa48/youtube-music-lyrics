<script>
    export let value = '';
    export let searchYouTube = false;
    export let searchLyrics = false;

    const handleSubmit = () => {
        console.log(value)
        console.log(searchYouTube)
        console.log(searchLyrics)
    }
</script>

<form on:submit|preventDefault={handleSubmit}>
    <input type="text" bind:value placeholder="Search...">
    <button>検索</button>
    <input type="checkbox" bind:checked={searchYouTube} />YouTube
    <input type="checkbox" bind:checked={searchLyrics} />歌詞検索
</form>