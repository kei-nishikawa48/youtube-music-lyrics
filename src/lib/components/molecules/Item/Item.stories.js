import Item from './index.svelte';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// More on argTypes: https://storybook.js.org/docs/svelte/api/argtypes
export default {
	title: 'molecules/Item',
	component: Item,
	argTypes: {
		title: { control: 'text' },
		content: { control: 'text' },
		direction: {
			control: { type: 'select' },
			options: ['row', 'column']
		},
		titleTextColor: {
			control: { type: 'select' },
			options: ['black', 'gray', 'red', 'blue', 'green']
		},
		titleSize: {
			control: { type: 'select' },
			options: ['small', 'medium', 'large']
		}
	}
};

// More on component templates: https://storybook.js.org/docs/svelte/writing-stories/introduction#using-args
const Template = (args) => ({
	Component: Item,
	props: args,
	on: {
		click: args.onClick
	}
});

// More on args: https://storybook.js.org/docs/svelte/writing-stories/args
export const Primary = Template.bind({});
Primary.args = {
	title: 'タイトル',
	content: '内容',
	direction: 'row',
	titleTextColor: 'red',
	titleSize: 'small'
};

export const Secondary = Template.bind({});
Secondary.args = {
	title: 'タイトル',
	content: '内容',
	direction: 'column',
	titleTextColor: 'blue',
	titleSize: 'small'
};
