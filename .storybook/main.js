const preprocess = require('svelte-preprocess');
module.exports = {
	core: {
		builder: 'storybook-builder-vite'
	},
	stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx|svelte)'],
	addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
	framework: '@storybook/svelte',
	svelteOptions: {
		preprocess: preprocess({ postcss: true, typescript: true })
	},
	async viteFinal(config, { configType }) {
		const { resolve } = await import('path');
		// customize the Vite config here
		config.resolve.alias = {
			$lib: resolve('src/lib'),
			$components: resolve('src/lib/components'),
			$app: resolve('.svelte-kit/runtime/app')
		};
		// return the customized config
		return config;
	}
};
