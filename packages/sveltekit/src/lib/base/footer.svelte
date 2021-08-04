<script>
	import Twitter from '../../../static/twitter.svg?component';
	import Website from '../../../static/website.svg?component';
	import GitHub from '../../../static/github.svg?component';
</script>

<footer>
	<div class="container">
		<div class="top">
			<a href="https://twitter.com/studio_hungry">
				<Twitter />
			</a>
			<a href="https://github.com/molebox">
				<GitHub />
			</a>
			<a href="https://richardhaines.dev/">
				<Website />
			</a>
		</div>
		<div class="bottom"><p>Created for fun, by Rich Haines</p></div>
	</div>
</footer>

<style lang="scss">
	footer {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 200px;
		background-color: var(--eerie-black);

		.container {
			display: flex;
			flex-direction: column;
			width: 400px;
			height: 100px;
			align-items: center;
			justify-content: space-evenly;

			.top {
				display: flex;
				justify-content: space-evenly;
				align-items: center;
				width: 100%;
			}

			.bottom {
				color: var(--baby-powder);
			}
		}
	}

	@media (max-width: 992px) {
		.bottom {
			p {
				font-size: 1.6rem;
			}
		}
	}
</style>
