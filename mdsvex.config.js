import { defineMDSveXConfig as defineConfig } from "mdsvex";

const config = defineConfig({
	extensions: [".svelte.md", ".md", ".svx"],

	layout: {
		text: "./src/lib/mdlayouts/text.svelte",
		_: "./src/lib/mdlayouts/text.svelte",
	},

	smartypants: {
		dashes: "oldschool",
	},

	remarkPlugins: [],
	rehypePlugins: [],
});

export default config;
