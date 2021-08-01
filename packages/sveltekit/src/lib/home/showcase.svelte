<script>
	import { urlFor } from '$lib/sanity/image-builder';
	import Button from '$lib/button.svelte';
	import Divider from '$lib/divider.svelte';

	// import BlockContent from '@movingbrands/svelte-portable-text';
	export let products;
</script>

<section>
	<div class="outer">
		<h2>Showcase</h2>
		<Divider />
		<div class="products-grid">
			{#each products as product}
				<div class="container">
					<img src={urlFor(product.defaultProductVariant.images[0].asset).width(400)} alt="" />
					<h3>{product.title}</h3>
					<p>{product.blurb.en}</p>
					<Button to={product.slug.current} text="shop" width="100%" />
				</div>
			{/each}
		</div>
	</div>
</section>

<style lang="scss">
	section {
		min-height: 1000px;
		background-color: var(--baby-powder);
		display: flex;
		flex-direction: column;
		padding: 1rem;

		.outer {
			max-width: 1440px;
			margin: 0 auto;
			width: 100%;
		}

		h2 {
			font-size: 0.8rem;
			text-transform: uppercase;
			font-weight: 700;
			letter-spacing: 0.1rem;
			margin-top: 1.5rem;
		}

		.products-grid {
			display: grid;
			gap: 20px;
			grid-template-columns: repeat(auto-fill, minmax(auto, 400px));
			justify-content: space-evenly;

			.container {
				margin: 2rem 0;
				display: flex;
				flex-direction: column;

				img {
					box-shadow: -12px 10px 14px -6px var(--eerie-black);
				}
			}
		}
	}
</style>
