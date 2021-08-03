<script context="module">
	import client from '$lib/sanity/sanity-client';

	export async function load({ page }) {
		const query = `*[_type == "product" && slug.current == $slug][0]`;

		const product = await client.fetch(query, { slug: page.params.slug });
		return {
			props: { product }
		};
	}
</script>

<script>
	export let product;
</script>

<h1>{product.title}</h1>
