/** @type {import('@sveltejs/kit').Config} */
import sveltePreProcess from 'svelte-preprocess';
import svelteSVG from 'vite-plugin-svelte-svg';
import netlify from '@sveltejs/adapter-netlify';
const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		vite: {
			plugins: [
				svelteSVG({
					svgoConfig: {}, // See https://github.com/svg/svgo#configuration
				}),
			],
		},
		adapter: netlify()
	},
	preprocess: sveltePreProcess()
};

export default config;
