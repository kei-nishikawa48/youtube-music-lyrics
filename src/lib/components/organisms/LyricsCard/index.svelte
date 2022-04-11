<script lang="ts">
	import Item from '$components/molecules/Item/index.svelte';

	export let song: string = '';
	export let artist: string = '';
	export let borderColor: string = 'border-neutral-500';
	export let bgColor: string = 'bg-neutral-200';
</script>

<div class={`flex frex-row border ${borderColor} ${bgColor} m-2 p-2`}>
	<div class="flex-1">
		<Item title="曲名" content={song} titleSize="small" titleTextColor="text-gray-500" />
	</div>
	<div class="flex-1">
		<Item title="歌手名" content={artist} titleSize="small" titleTextColor="text-gray-500" />
	</div>
</div>
