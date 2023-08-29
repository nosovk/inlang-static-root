<script lang="ts">
	import { page } from '$app/stores';
	import data from '$lib/utils/site-data';
	import { serializeSchema, type Schema } from '$lib/utils/json-ld';

	export let schemas: Schema[];
	export let canonical = '';
	export let title = '';
	export let thumbnail = '';
	export let desc = '';
	export let noindex = false;

	const { siteName, siteUrl } = data;
	const defaultDesc = data.description;
</script>

<svelte:head>
	<title>{siteName} | {title}</title>
	<link
		rel="canonical"
		href={canonical ? siteUrl + canonical : siteUrl + ($page.url.pathname ?? '')}
	/>
	<meta name="description" content={desc || defaultDesc} />
	<link href="" rel="publisher" />
	<meta property="fb:admins" content="" />
	<meta name="msapplication-TileColor" content="#FFFFFF" />
	<meta name="robots" content={noindex ? 'noindex' : 'all'} />

	<!-- Facebook -->
	<meta property="fb:admins" content="" />
	<meta property="fb:app_id" content="" />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="{siteUrl}{$page.url.pathname}" />
	<meta property="twitter:title" content={title || siteName} />
	<meta property="twitter:description" content={desc || defaultDesc} />
	{#if thumbnail}
		<meta property="twitter:image" content={thumbnail} />
	{/if}

	<!-- JSON-LD Schema -->
	{#each schemas as schema}
		{@html serializeSchema(schema)}
	{/each}
</svelte:head>
