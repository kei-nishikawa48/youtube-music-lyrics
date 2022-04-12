import Label from './index.svelte';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// More on argTypes: https://storybook.js.org/docs/svelte/api/argtypes
export default {
	title: 'atoms/Label',
	component: Label,
	argTypes: {
		text: { control: 'text' },
		bgColor: {
			control: { type: 'select' },
			options: ['transparent', 'black', 'gray', 'grayDark', 'grayLight', 'white']
		},
		textColor: {
			control: { type: 'select' },
			options: ['black', 'gray', 'grayDark', 'grayLight', 'white']
		},
		size: {
			control: { type: 'select' },
			options: ['small', 'medium', 'large']
		}
	}
};

// More on component templates: https://storybook.js.org/docs/svelte/writing-stories/introduction#using-args
const Template = (args) => ({
	Component: Label,
	props: args,
	on: {
		click: args.onClick
	}
});

// More on args: https://storybook.js.org/docs/svelte/writing-stories/args
export const Primary = Template.bind({});
Primary.args = {
	text: 'ラベル',
	bgColor: 'transparent',
	textColor: 'black',
	size: 'medium'
};
