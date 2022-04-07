<script lang="ts">
	import Sentence from '../molecules/Sentence.svelte';
	export let song: string = '';
	export let artist: string = '';
</script>

<div class="flex frex-row border-gray-500">
	<div class="flex-1"><Sentence title="曲名" content={song} /></div>
	<div class="flex-1"><Sentence title="歌手名" content={artist} /></div>
</div>
