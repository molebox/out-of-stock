<script context="module">
	// looking at detecting route change to close the sidebar
	export async function load({ page }) {
		console.log({ page });

		return {};
	}
</script>

<script>
	export let open = false;
</script>

<aside class:open>
	<nav>
		<a href="/">home</a>
		<a href="/products">products</a>
		<a href="/about">about</a>
		<a href="/contact">contact</a>
	</nav>
</aside>

<style lang="scss">
	aside {
		position: fixed;
		width: 100%;
		height: 100%;
		border-left: 0.2rem;
		right: -100%;
		transition: right 0.3s ease-in-out;
		background-color: var(--eerie-black);

		nav {
			padding: 0.6rem;
			height: 100vh;
			width: 100%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;

			a {
				font-size: 1.8rem;
				color: var(--baby-powder);
				text-decoration: none;

				background-image: linear-gradient(currentColor, var(--volt));
				background-position: 0% 100%;
				background-repeat: no-repeat;
				background-size: 0% 2px;
				transition: background-size 0.7s;
			}

			a:hover {
				color: var(--volt);
				transition: 0.3s;
				cursor: crosshair;
				background-size: 100% 2px;
			}
		}
	}

	.open {
		right: 0;
	}
</style>
