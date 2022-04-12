<script lang="ts">
	import type { Color, ColorProp, BgColor, BgColorProp } from '../../../type';
	export let text: string = '';
	export let bgColor: BgColorProp = 'transparent';
	export let textColor: ColorProp = 'black';
	export let size: 'small' | 'medium' | 'large' = 'medium';

	const classBgColor: BgColor = {
		transparent: 'bg-transparent',
		black: 'bg-black',
		gray: 'bg-gray-500',
		grayDark: 'bg-gray-700',
		grayLight: 'bg-gray-200',
		white: 'bg-white'
	};

	const classTextColor: Color = {
		black: 'text-black',
		gray: 'text-gray-500',
		grayDark: 'text-gray-700',
		grayLight: 'text-gray-200',
		white: 'text-white'
	};
	const classSize = {
		small: 'text-xs',
		medium: 'text-base',
		large: 'text-xl'
	};
</script>

<div class={`${classBgColor[bgColor]} ${classTextColor[textColor]} ${classSize[size]} m-0.5`}>
	{text}
</div>
