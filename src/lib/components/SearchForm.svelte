<script>
    import CheckBox from "./CheckBox.svelte";

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
    <CheckBox bind:checked={searchYouTube} />YouTube
    <CheckBox bind:checked={searchLyrics} />歌詞検索
</form>