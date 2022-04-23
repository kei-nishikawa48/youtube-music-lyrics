<script lang="ts">
	import type { ColorProp } from '../../../type';
	import Label from '$components/atoms/Label/index.svelte';

	export let direction: 'row' | 'column' = 'row';
	export let title: string = '';
	export let content: string = '';
	export let titleTextColor: ColorProp = 'gray';
	export let titleSize: 'small' | 'medium' | 'large' = 'small';

	let contentSize: 'small' | 'medium' | 'large' = 'medium';
</script>

<div class="flex {direction === 'row' ? 'flex-row items-center' : 'flex-col items-start'} ">
	{#if direction === 'row'}
		<Label text={title} textColor={titleTextColor} size={titleSize} />
		<Label text={content} size={contentSize} />
	{:else}
		<Label text={title} textColor={titleTextColor} size={titleSize} mode="column_title" />
		<Label text={content} size={contentSize} mode="column_content" />
	{/if}
</div>
