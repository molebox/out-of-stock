<script>
	import { urlFor } from '$lib/sanity/image-builder';
	import Button from '$lib/button.svelte';

	// import BlockContent from '@movingbrands/svelte-portable-text';
	export let products;
</script>

<section>
	{#each products as product}
		<div class="container">
			<img src={urlFor(product.defaultProductVariant.images[0].asset).width(500)} alt="" />
			<h2>{product.title}</h2>
			<p>{product.blurb.en}</p>
			<Button to={product.slug.current} text="shop" width="100%" />
		</div>
	{/each}
</section>

<style lang="scss">
	section {
		min-height: 1000px;
		display: grid;
		gap: 20px;
		grid-template-columns: repeat(auto-fill, minmax(auto, 500px));
		justify-content: space-evenly;
		width: 100%;
		background-color: var(--baby-powder);

		.container {
			margin: 2rem 0;
			display: flex;
			flex-direction: column;

			img {
				box-shadow: -12px 10px 14px -6px var(--eerie-black);
			}
		}
	}
</style>
