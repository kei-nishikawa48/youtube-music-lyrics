import LyricsCard from './index.svelte';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// More on argTypes: https://storybook.js.org/docs/svelte/api/argtypes
export default {
	title: 'Organisms/LyricsCard',
	component: LyricsCard,
	argTypes: {
		song: { control: 'text' },
		artist: { control: 'text' },
		borderColor: {
			control: { type: 'select' },
			options: ['transparent', 'black', 'gray', 'grayDark', 'grayLight', 'white']
		},
		bgColor: {
			control: { type: 'select' },
			options: ['black', 'gray', 'grayDark', 'grayLight', 'white']
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
	borderColor: 'gray',
	bgColor: 'grayLight0'
};
