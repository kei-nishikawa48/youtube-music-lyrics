import Label from './Label.svelte';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// More on argTypes: https://storybook.js.org/docs/svelte/api/argtypes
export default {
	title: 'atoms/Label',
	component: Label,
	argTypes: {
		text: { control: 'text' },
		bgColor: { control: 'color' },
		txtColor: { control: 'color' },
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
	primary: true,
	label: 'Button'
};

export const Secondary = Template.bind({});
Secondary.args = {
	label: 'Button'
};

export const Large = Template.bind({});
Large.args = {
	size: 'large',
	label: 'Button'
};

export const Small = Template.bind({});
Small.args = {
	size: 'small',
	label: 'Button'
};
