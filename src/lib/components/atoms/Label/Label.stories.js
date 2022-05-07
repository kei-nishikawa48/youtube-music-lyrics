import Label from './index.svelte';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// More on argTypes: https://storybook.js.org/docs/svelte/api/argtypes
export default {
	title: 'atoms/Label',
	component: Label,
	argTypes: {
		text: { control: 'text' },
		textColor: {
			control: { type: 'select' },
			options: ['black', 'gray', 'red', 'blue', 'green']
		},
		size: {
			control: { type: 'select' },
			options: ['small', 'medium', 'large']
		},
		mode: {
			control: { type: 'select' },
			options: ['row', 'column_title', 'column_content']
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
	textColor: 'black',
	size: 'medium',
	mode: 'row'
};

export const Secondary = Template.bind({});
Secondary.args = {
	text: 'ラベル',
	textColor: 'red',
	size: 'small',
	mode: 'column_title'
};

export const Tertiary = Template.bind({});
Tertiary.args = {
	text: 'ラベル',
	textColor: 'black',
	size: 'medium',
	mode: 'column_content'
};
