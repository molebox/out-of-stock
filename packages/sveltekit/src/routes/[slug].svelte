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
	import { urlFor } from '$lib/sanity/image-builder';
	export let product;
</script>

<div class="layout">
	<section class="image">
		<img src={urlFor(product.defaultProductVariant.images[0].asset)} alt="" />
	</section>
	<section class="info">
		<div class="content">
			<div class="title">
				<h1>{product.title}</h1>
			</div>
		</div>
	</section>
</div>

<style lang="scss">
	.layout {
		display: flex;
		margin-top: 5rem;
		background-color: var(--gray-x-11-gray);

		.image {
			width: 50%;
			order: 0;

			img {
				width: 100%;
			}
		}

		.info {
			width: 50%;
			order: 1;

			.content {
				display: flex;
				flex-direction: column;

				padding: 2rem;
			}

			.title {
				width: 100%;

				h1 {
					color: var(--eerie-black);
					text-transform: uppercase;
					font-size: 5rem;
					border-top: solid 2px var(--eerie-black);
					border-bottom: solid 2px var(--eerie-black);
				}
			}
		}
	}

	// mobile
	@media (max-width: 992px) {
		.layout {
			flex-direction: column;
			height: 100vh;
			.image {
				width: 100%;
			}
			.info {
				width: 100%;
				height: 100%;

				h1 {
					text-align: center;
				}
			}
		}
	}
</style>
