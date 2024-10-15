// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Florian Clanet',
			social: {
				'x.com': 'https://x.com/FlolightC',
				linkedin: 'https://www.linkedin.com/in/florianclanet/',
				github: 'https://github.com/flolight',
				// twitter: 'https://x.com/FlolightC',
				twitch: 'https://www.twitch.tv/flolightc',
				youtube: 'https://www.youtube.com/@flolight7439'
			},
			// sidebar: [
			// 	{
			// 		label: 'Guides',
			// 		items: [
			// 			// Each item here is one entry in the navigation menu.
			// 			{ label: 'Example Guide', slug: 'guides/example' },
			// 		],
			// 	},
			// 	{
			// 		label: 'Reference',
			// 		autogenerate: { directory: 'reference' },
			// 	},
			// ],
		}),
	],
});
