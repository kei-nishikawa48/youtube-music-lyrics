import LyricsCard from './index.svelte';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// More on argTypes: https://storybook.js.org/docs/svelte/api/argtypes
export default {
	title: 'Organisms/LyricsCard',
	component: LyricsCard,
	argTypes: {
		song: { control: 'text' },
		artist: { control: 'text' },
		primary: { control: 'boolean' },
		color: {
			control: { type: 'select' },
			options: ['black', 'gray', 'red', 'blue', 'green']
		},
		direction: {
			control: { type: 'select' },
			options: ['row', 'column']
		}
	}
};

// More on component templates: https://storybook.js.org/docs/svelte/writing-stories/introduction#using-args
const Template = (args) => ({
	Component: LyricsCard,
	props: args,
	on: {
		click: args.onClick
	}
});

// More on args: https://storybook.js.org/docs/svelte/writing-stories/args
export const Primary = Template.bind({});
Primary.args = {
	song: '曲名',
	artist: 'アーティスト名',
	primary: true,
	color: 'red',
	direction: 'row'
};

export const Secondary = Template.bind({});
Secondary.args = {
	song: '曲名',
	artist: 'アーティスト名',
	primary: false,
	color: 'blue',
	direction: 'column'
};
