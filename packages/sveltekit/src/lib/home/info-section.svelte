<script>
</script>

<section>
	<div class="cta">
		<p>
			Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, autem recusandae!
			Quibusdam, consequuntur omnis! Sit quod consequuntur a ipsa dolor?
		</p>
		<a href="/products">explore</a>
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
		background-color: var(--gray-x-11-gray);
		padding: 2rem;
		min-height: 500px;

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
				text-align: center;
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
				box-shadow: -12px 10px 14px -6px var(--eerie-black);
			}
		}
	}

	@media (max-width: 849px) {
		.cta {
			p {
				font-size: 1.1rem;
			}
		}

		section {
			flex-direction: column;
			img {
				margin: 1.5rem auto;
				max-width: 300px;
			}
		}
	}
</style>
