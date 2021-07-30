<script>
	import Circles from '../../../static/circles.svg?component';
</script>

<section>
	<h2>
		Out of stock is a project built to demostrate the <span>ecommerce power of Sveltekit</span>. All
		items are out of stock and unavalaible for purchase.
	</h2>
	<div class="inner">
		<div class="cta">
			<p>
				All product data is stored and populated from a Sanity backend. The aim of this project is
				to have some fun with some new tech and see how to connect the essentail dots while creating
				an ecommerce experience.
			</p>
			<a href="/products">explore</a>
		</div>
		<img
			src="https://source.unsplash.com/collection/3770957/1240x874"
			alt="Random from a moody collection on unsplash"
		/>
	</div>
</section>

<style lang="scss">
	section {
		display: flex;
		flex-direction: column;
		padding: 2rem;
		background-color: var(--gray-x-11-gray);
		padding: 2rem;
		min-height: 500px;
		position: relative;

		h2 {
			font-size: 1.5rem;
			font-weight: 700;
			padding: 2rem;
			position: relative;

			span {
				background-image: linear-gradient(var(--volt), var(--volt));
				background-position: 0% 100%;
				background-repeat: no-repeat;
				background-size: 100% 13px;
			}
		}

		.inner {
			display: flex;
			flex-direction: row;
			gap: 20px;
			justify-content: space-around;
			align-items: center;

			img {
				height: auto;
				max-width: 400px;
				box-shadow: -12px 10px 14px -6px var(--eerie-black);
			}

			.cta {
				display: flex;
				flex-direction: column;
				align-items: center;

				p {
					font-size: 1.3rem;
					padding: 2rem;
				}

				a {
					padding: 0.5rem 1rem;
					text-decoration: none;
					text-transform: uppercase;
					background-color: var(--eerie-black);
					border-color: var(--baby-powder);
					color: var(--baby-powder);
					width: 200px;
					text-align: center;
				}

				a:hover {
					cursor: crosshair;
					box-shadow: -12px 10px 14px -6px var(--eerie-black);
					transition: box-shadow 0.3s ease-in-out;
				}
			}
		}
	}

	@media (max-width: 849px) {
		section {
			.inner {
				flex-direction: column;
				img {
					margin: 1.5rem auto;
					max-width: 300px;
				}

				.cta {
					p {
						font-size: 1.1rem;
					}
				}
			}
		}
	}
</style>
