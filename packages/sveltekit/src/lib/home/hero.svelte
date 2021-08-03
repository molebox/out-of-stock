<script>
	import { urlFor } from '$lib/sanity/image-builder';
	export let image;
</script>

<section>
	<img src={urlFor(image)} alt="A man sitting on a roof" />
</section>

<style lang="scss">
	section {
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: var(--eerie-black);
		width: 100vw;

		img {
			height: auto;
			width: 100vw;
			object-fit: contain;
			z-index: 100;
		}
	}

	@media (max-width: 992px) {
		section {
			img {
				margin: 5rem;
				object-fit: contain;
			}
		}
	}
</style>
