<script context="module">
	import Hero from '$lib/home/hero.svelte';
	import InfoSection from '$lib/home/info-section.svelte';
	import Showcase from '$lib/home/showcase.svelte';
	import client from '$lib/sanity/sanity-client';

	// add http://localhost:3000 to the api cors on the sanity studio settings

	export async function load() {
		const query = '*[_type == "product"][0...6]';
		const products = await client.fetch(query);
		return {
			props: { products }
		};
	}
</script>

<script>
	import Video from '$lib/home/video.svelte';

	export let products;
</script>

<svelte:head>
	<title>Out of stock</title>
</svelte:head>

<Video />
<InfoSection />
<Hero />
<Showcase {products} />

<!-- <style lang="scss">
</style> -->
