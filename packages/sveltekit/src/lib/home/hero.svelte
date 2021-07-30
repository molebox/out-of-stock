<section>
	<img src="/man-on-roof.jpg" alt="A man sitting on a roof" />
</section>

<style lang="scss">
	section {
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: var(--eerie-black);
		width: 100vw;

		img {
			margin-top: 5rem;
			height: auto;
			width: 100vw;
			object-fit: contain;
		}
	}

	@media (max-width: 849px) {
		section {
			img {
				margin: 5rem;
				object-fit: contain;
			}
		}
	}
</style>
