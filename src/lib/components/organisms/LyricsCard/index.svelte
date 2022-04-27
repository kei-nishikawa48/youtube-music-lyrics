<script lang="ts">
	import type { ColorProp } from '../../../type';
	import Item from '$components/molecules/Item/index.svelte';

	export let song: string = '';
	export let artist: string = '';
	export let primary: boolean = true;
	export let color: ColorProp = 'red';
	export let direction: 'row' | 'column' = 'row';

	const classBoxStyle: string = primary ? `shadow-md  shadow-slate-300` : `border border-slate-400`;
</script>

<div class={`flex frex-row ${classBoxStyle} m-2 p-2`}>
	<div class="flex-1">
		<Item title="曲名" {direction} content={song} titleTextColor={color} />
	</div>
	<div class="flex-1">
		<Item title="歌手名" {direction} content={artist} titleTextColor={color} />
	</div>
</div>
