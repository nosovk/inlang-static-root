<script>
	export let src = '';
	export let alt = 'icon';
</script>

<img srcset={src} {src} {alt} loading="lazy" decoding="async" {...$$restProps} /><slot />
