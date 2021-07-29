<script>
</script>

<section>
	<div class="cta">
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ullam at iste, nemo quod
			voluptatem!
		</p>
		<a href="/products">shop now</a>
	</div>
	<img
		src="https://source.unsplash.com/collection/3770957/1240x874"
		alt="Random from a moody collection on unsplash"
	/>
</section>

<style lang="scss">
	section {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		padding: 2rem;

		img {
			height: auto;
			max-width: 400px;
		}

		.cta {
			display: flex;
			flex-direction: column;
			align-items: center;

			p {
				font-size: 1.4rem;
				padding: 2rem;
			}

			a {
				border: 1px solid var(--eerie-black);
				padding: 0.5rem 1rem;
				text-decoration: none;
				text-transform: uppercase;
				color: var(--eerie-black);
				width: 200px;
				text-align: center;
			}

			a:hover {
				background-color: var(--eerie-black);
				border-color: var(--baby-powder);
				color: var(--baby-powder);
				cursor: crosshair;
			}
		}

		@media (max-width: 849px) {
			flex-direction: column;

			.cta {
				p {
					font-size: 1.1rem;
					text-align: center;
				}
			}

			img {
				margin: 1.5rem auto;
			}
		}
	}
</style>
