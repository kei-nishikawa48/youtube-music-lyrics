import LyricsList from './index.svelte';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// More on argTypes: https://storybook.js.org/docs/svelte/api/argtypes
export default {
	title: 'Organisms/LyricsList',
	component: LyricsList,
	argTypes: {}
};

// More on component templates: https://storybook.js.org/docs/svelte/writing-stories/introduction#using-args
const Template = (args) => ({
	Component: LyricsList,
	props: args,
	on: {
		click: args.onClick
	}
});

// More on args: https://storybook.js.org/docs/svelte/writing-stories/args
export const Primary = Template.bind({});
Primary.args = {
	lyricsList: [
		{ song: 'song1', lyrics: 'lyrics1' },
		{ song: 'song2', lyrics: 'lyrics2' }
	]
};
