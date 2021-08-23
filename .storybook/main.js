const path = require('path');
const toPath = (_path) => path.join(process.cwd(), _path);

module.exports = {
	stories: [
		'../**/*.stories.mdx',
		'../**/*.stories.@(js|jsx|ts|tsx)',
		'../**/*.stories.tsx',
	],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-controls',
		'storybook-addon-styled-component-theme/dist/preset',
	],
};
