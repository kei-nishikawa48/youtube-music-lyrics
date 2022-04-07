<script lang="ts">
	import Label from '../atoms/Label.svelte';

	export let title: string = '';
	export let content: string = '';
	export let direction: 'row' | 'column' = 'row';
	export let titleBgColor: string = '#fff';
	export let titleTextColor: string = '#000';
	export let contentBgColoer: string = '#fff';
	export let contentTextColoer: string = '#000';
</script>

<div class="flex {direction === 'row' ? 'flex-row' : 'flex-column'}">
	<Label text={title} bgColor={titleBgColor} textColor={titleTextColor} />
	<Label text={content} bgColor={contentBgColoer} textColor={contentTextColoer} />
</div>
