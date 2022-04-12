<script lang="ts">
	import type { Color, ColorProp, BgColor, BgColorProp } from '../../../type';
	import Item from '$components/molecules/Item/index.svelte';

	export let song: string = '';
	export let artist: string = '';
	export let borderColor: ColorProp = 'gray';
	export let bgColor: BgColorProp = 'grayLight';

	const classBorderColor: Color = {
		black: 'border-black',
		gray: 'border-gray-500',
		grayDark: 'border-gray-700',
		grayLight: 'border-gray-200',
		white: 'border-white'
	};

	const classBgColor: BgColor = {
		transparent: 'bg-transparent',
		black: 'bg-black',
		gray: 'bg-gray-500',
		grayDark: 'bg-gray-700',
		grayLight: 'bg-gray-200',
		white: 'bg-white'
	};
</script>

<div
	class={`flex frex-row border ${classBorderColor[borderColor]} ${classBgColor[bgColor]} m-2 p-2`}
>
	<div class="flex-1">
		<Item title="曲名" content={song} titleSize="small" titleTextColor="gray" />
	</div>
	<div class="flex-1">
		<Item title="歌手名" content={artist} titleSize="small" titleTextColor="gray" />
	</div>
</div>
