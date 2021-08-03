<script context="module">
	import Hero from '$lib/home/hero.svelte';
	import InfoSection from '$lib/home/info-section.svelte';
	import Showcase from '$lib/home/showcase.svelte';
	import client from '$lib/sanity/sanity-client';

	// add http://localhost:3000 to the api cors on the sanity studio settings

	export async function load() {
		const productQuery = '*[_type == "product"][0...6]';
		const products = await client.fetch(productQuery);
		const homepageQuery = `*[_type == "homepage"][0] {
			"video": heroVideo.secure_url,
			"infoImage": smallInfoImage.asset,
			"hero": largeHeroImage.asset
		}`;
		const homepage = await client.fetch(homepageQuery);
		return {
			props: { products, homepage }
		};
	}
</script>

<script>
	import Video from '$lib/home/video.svelte';

	export let products;
	export let homepage;
	$: ({ video, infoImage, hero } = homepage);
</script>

<svelte:head>
	<title>Out of stock</title>
</svelte:head>

<Video {video} />
<InfoSection image={infoImage} />
<Hero image={hero} />
<Showcase {products} />
