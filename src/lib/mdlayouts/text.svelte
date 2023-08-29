<script context="module" lang="ts">
	import { img } from './components';
	export { img };
</script>

<script lang="ts">
	import Seo from '$lib/components/Seo/index.svelte';
	import { websiteSchema, articleSchema } from '$lib/utils/json-ld';

	export let desc = '';
	export let title = '';
	export let thumbnail = { src: '' };
</script>

<Seo
	{title}
	{desc}
	thumbnail={thumbnail.src}
	isPost={true}
	schemas={[websiteSchema, articleSchema]}
/>

<section>
	<slot />
</section>

<style lang="scss">
</style>
