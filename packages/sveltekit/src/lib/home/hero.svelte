<section>
	<img src="/man-on-roof.jpg" alt="A man sitting on a roof" />
</section>

<style lang="scss">
	section {
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: var(--eerie-black);

		img {
			margin-top: 5rem;
			height: auto;
			max-width: 1440px;
		}
	}

	@media (max-width: 849px) {
		section {
			img {
				width: 350px;
				margin: 5rem;
			}
		}
	}
</style>
