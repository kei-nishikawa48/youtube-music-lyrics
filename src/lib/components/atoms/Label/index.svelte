<script lang="ts">
	import type { ColorProp, Color } from '../../../type';
	export let text: string = '';
	export let textColor: ColorProp = 'black';
	export let size: 'small' | 'medium' | 'large' = 'medium';
	export let mode: 'row' | 'column_title' | 'column_content' = 'row';

	const classTextColor: Color = {
		black: 'text-gray-800',
		gray: 'text-slate-600',
		red: 'text-rose-600',
		blue: 'text-sky-600',
		green: 'text-teal-600'
	};
	const classSize = {
		small: 'text-xs',
		medium: 'text-base',
		large: 'text-xl'
	};

	const classPx = mode == 'column_content' ? 'px-3' : '';
	const classMargin =
		mode == 'column_title' ? 'mx-0.5 mt-0.5' : mode == 'column_content' ? 'mx-0.5 mb-0.5' : 'm-0.5';
</script>

<div class={`${classTextColor[textColor]} ${classSize[size]} ${classPx} ${classMargin}`}>
	{text}
</div>
