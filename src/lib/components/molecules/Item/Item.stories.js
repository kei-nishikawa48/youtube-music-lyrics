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
		titleBgColor: { control: 'text' },
		titleTextColor: { control: 'text' },
		titleSize: {
			control: { type: 'select' },
			options: ['bg-small', 'medium', 'large']
		},
		contentBgColor: { control: 'text' },
		contentTextColor: { control: 'text' },
		contentSize: {
			control: { type: 'select' },
			options: ['bg-small', 'medium', 'large']
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
	titleBgColor: 'bg-transparent',
	titleTextColor: 'text-black',
	titleSize: 'medium',
	contentBgColoer: 'bg-transparent',
	contentTextColoer: 'text-black',
	contentSize: 'medium'
};
