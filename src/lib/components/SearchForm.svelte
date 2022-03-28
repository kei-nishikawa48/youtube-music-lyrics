<script>
    export let value = '';
    let searchYouTube = false;
    let searchLyrics = false;
</script>

<input type="text" bind:value placeholder="Search...">
<button>検索</button>
<input type="checkbox" bind:checked={searchYouTube} />YouTube
<input type="checkbox" bind:checked={searchLyrics} />歌詞検索
