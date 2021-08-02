<script>
	import Twitter from '../../../static/twitter.svg?component';
	import Website from '../../../static/website.svg?component';
	import GitHub from '../../../static/github.svg?component';
</script>

<footer>
	<div class="container">
		<div class="top">
			<a class="link" href="https://twitter.com/studio_hungry">
				<Twitter />
			</a>
			<a class="link" href="https://github.com/molebox">
				<GitHub />
			</a>
			<a class="link" href="https://richardhaines.dev/">
				<Website />
			</a>
		</div>
		<div class="bottom"><p>Created by Rich Haines</p></div>
	</div>
</footer>

<style lang="scss">
	footer {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 300px;
		margin: 50px 50px 150px 50px;
		box-shadow: -12px 10px 14px -6px var(--eerie-black);
		background-color: var(--eerie-black);

		.container {
			display: flex;
			flex-direction: column;
			width: 400px;
			height: 200px;
			align-items: center;
			justify-content: space-evenly;

			.top {
				display: flex;
				justify-content: space-evenly;
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
