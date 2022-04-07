<script lang="ts">
	export let text: string = '';
	export let bgColor: string = '#fff';
	export let textColor: string = '#000';
	export let size: 'small' | 'medium' | 'large' = 'medium';
</script>

<div class={`${bgColor} ${textColor} ${size}`}>{text}</div>
