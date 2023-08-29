import { mdsvex } from "mdsvex";
import mdsvexConfig from "./mdsvex.config.js";
import preprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-cloudflare";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: [".svelte", ...mdsvexConfig.extensions],

	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [
		preprocess({
			postcss: true,
			scss: {
				prependData: '@use "src/variables.scss" as *;',
			},
		}),
		mdsvex(mdsvexConfig),
	],

	// compilerOptions: {
	// 	immutable: true
	// },

	kit: {
		adapter: adapter(),
		prerender: {
			entries: ["*", "/de", "/en"],
		},
	},
};

export default config;
