<script lang="ts">
	export let text: string = '';
	export let bgColor: string = 'bg-transparent';
	export let textColor: string = 'text-black';
	export let size: 'small' | 'medium' | 'large' = 'medium';

	const classSize = {
		small: 'text-xs',
		medium: 'text-base',
		large: 'text-xl'
	};
</script>

<div class={`${bgColor} ${textColor} ${classSize[size]} m-0.5`}>{text}</div>
