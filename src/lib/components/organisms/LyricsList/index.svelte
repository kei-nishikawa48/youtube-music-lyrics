<script lang="ts">
	import LyricsCard from '$components/organisms/LyricsCard/index.svelte';

	export let lyricsList: { song: string; artist: string }[];
</script>

<div class="flex flex-col justify-between">
	{#each lyricsList as lyric}
		<LyricsCard song={lyric.song} artist={lyric.artist} />
	{/each}
</div>
