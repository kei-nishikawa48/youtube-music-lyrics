<script lang="ts">
	import LyricsCard from './LyricsCard.svelte';

	const lyricsList: { song: string; artist: string }[] = [
		{ song: '曲名1', artist: 'アーティスト1' },
		{ song: '曲名2', artist: 'アーティスト2' },
		{ song: '曲名3', artist: 'アーティスト3' },
		{ song: '曲名4', artist: 'アーティスト4' },
		{ song: '曲名5', artist: 'アーティスト5' },
		{ song: '曲名6', artist: 'アーティスト6' }
	];
</script>

<div class="flex justify-between">
	{#each lyricsList as lyric}
		<LyricsCard song={lyric.song} artist={lyric.artist} />
	{/each}
</div>
