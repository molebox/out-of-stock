<script context="module">
	import client from '$lib/sanity-client';

	export async function load() {
		const query = '*[_type == "product"]';
		const products = await client.fetch(query);
		console.log({ products });
		return {
			props: { products }
		};
	}
</script>

<script>
	export let products;
</script>

<section>{JSON.stringify(products, null, 2)}</section>

<style>
	section {
		min-height: 1000px;
	}
</style>
