<script lang="ts">
	import LyricsList from '$components/organisms/LyricsList/index.svelte';

	const lyricsList: { song: string; artist: string }[] = [
		{ song: '曲名1', artist: 'アーティスト1' },
		{ song: '曲名2', artist: 'アーティスト2' },
		{ song: '曲名3', artist: 'アーティスト3' },
		{ song: '曲名4', artist: 'アーティスト4' },
		{ song: '曲名5', artist: 'アーティスト5' },
		{ song: '曲名6', artist: 'アーティスト6' }
	];
</script>

<div class="w-full">
	<LyricsList {lyricsList} />
</div>
