<script context="module">
	import Hero from '$lib/home/hero.svelte';
	import InfoSection from '$lib/home/info-section.svelte';
	import Showcase from '$lib/home/showcase.svelte';
	import client from '$lib/sanity/sanity-client';

	// add http://localhost:3000 to the api cors on the sanity studio settings

	export async function load() {
		const productQuery = '*[_type == "product"][0...6]';
		const products = await client.fetch(productQuery);
		const homepageQuery = '*[_type == "homepage"]';
		const homepage = await client.fetch(homepageQuery);
		console.log(homepage);
		return {
			props: { products, homepage }
		};
	}
</script>

<script>
	import Video from '$lib/home/video.svelte';

	export let products;
	export let homepage;
</script>

<svelte:head>
	<title>Out of stock</title>
</svelte:head>

<Video videoUrl={homepage[0].heroVideo.secure_url} />
<InfoSection image={homepage[0].smallInfoImage.asset} />
<Hero image={homepage[0].largeHeroImage.asset} />
<Showcase {products} />

<!-- <style lang="scss">
</style> -->
