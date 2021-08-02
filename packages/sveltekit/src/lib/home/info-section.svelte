<script>
	import Button from '$lib/button.svelte';
</script>

<section>
	<div class="outer">
		<h2>
			Out of stock is a project built to demostrate the <span>ecommerce power of Sveltekit</span>.
			All items are out of stock and unavalaible for purchase.
		</h2>
		<div class="inner">
			<div class="cta">
				<p>
					All product data is stored and populated from a Sanity backend. The aim of this project is
					to have some fun with some new tech and see how to connect the essentail dots while
					creating an ecommerce experience.
				</p>
				<Button to="https://github.com/molebox/out-of-stock" text="explore code" width="200px" />
			</div>
			<img
				src="https://source.unsplash.com/collection/3770957/1240x874"
				alt="Random from a moody collection on unsplash"
			/>
		</div>
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

		.outer {
			max-width: 1000px;
			margin: 0 auto;
		}

		h2 {
			font-size: 1.6rem;
			font-weight: 700;
			padding: 2rem;
			position: relative;

			span {
				background-image: linear-gradient(var(--volt), var(--volt));
				background-position: 0% 100%;
				background-repeat: no-repeat;
				background-size: 100% 25px;
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
					font-size: 1.4rem;
					padding: 2rem;
				}
			}
		}
	}

	// mobile
	@media (max-width: 992px) {
		section {
			h2 {
				font-size: 2.4rem;
			}
			.inner {
				flex-direction: column;
				img {
					margin: 1.5rem auto;
					max-width: 500px;
				}

				.cta {
					p {
						font-size: 2rem;
					}
				}
			}
		}
	}
</style>
