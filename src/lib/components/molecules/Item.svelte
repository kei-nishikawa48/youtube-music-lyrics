<script lang="ts">
	import Label from '../atoms/Label.svelte';

	export let title: string = '';
	export let content: string = '';
	export let direction: 'row' | 'column' = 'row';
	export let titleBgColor: string = 'bg-transparent';
	export let titleTextColor: string = 'text-black';
	export let titleSize: 'small' | 'medium' | 'large' = 'medium';
	export let contentBgColoer: string = 'bg-transparent';
	export let contentTextColoer: string = 'text-black';
	export let contentSize: 'small' | 'medium' | 'large' = 'medium';
</script>

<div class="flex {direction === 'row' ? 'flex-row' : 'flex-col'} items-center">
	<Label text={title} bgColor={titleBgColor} textColor={titleTextColor} size={titleSize} />
	<Label
		text={content}
		bgColor={contentBgColoer}
		textColor={contentTextColoer}
		size={contentSize}
	/>
</div>
