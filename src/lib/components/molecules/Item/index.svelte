<script lang="ts">
	import type { ColorProp, BgColorProp } from '../../../type';
	import Label from '$components/atoms/Label/index.svelte';

	export let title: string = '';
	export let content: string = '';
	export let direction: 'row' | 'column' = 'row';
	export let titleBgColor: BgColorProp = 'transparent';
	export let titleTextColor: ColorProp = 'black';
	export let titleSize: 'small' | 'medium' | 'large' = 'medium';
	export let contentBgColor: BgColorProp = 'transparent';
	export let contentTextColor: ColorProp = 'black';
	export let contentSize: 'small' | 'medium' | 'large' = 'medium';
</script>

<div class="flex {direction === 'row' ? 'flex-row' : 'flex-col'} items-center">
	<Label text={title} bgColor={titleBgColor} textColor={titleTextColor} size={titleSize} />
	<Label text={content} bgColor={contentBgColor} textColor={contentTextColor} size={contentSize} />
</div>
