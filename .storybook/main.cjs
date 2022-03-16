module.exports = {
  "stories": [
  "../src/**/*.stories.mdx",
  "../src/**/*.stories.@(js|jsx|ts|tsx|svelte)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-svelte-csf"
  ],
  "framework": "@storybook/svelte",
  "svelteOptions": {
    // "preprocess": require("../svelte.config.js").preprocess
  },
  async viteFinal(config, { configType }) {
	const { resolve } = await import('path');
	// customize the Vite config here
	config.resolve.alias = {
		$lib: resolve('src/lib'),
		$app: resolve('node_modules/@sveltejs/kit/assets/runtime/app')
	};
	// return the customized config
	return config;
  }
}
