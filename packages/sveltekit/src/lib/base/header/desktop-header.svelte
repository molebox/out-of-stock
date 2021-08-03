<script>
	import Logo from '../../../../static/oos-logo.svg?component';
	import Link from '../../link.svelte';
</script>

<header>
	<div class="logo">
		<Logo />
	</div>
	<a href="/">out of stock</a>
	<nav>
		<ul>
			<li>
				<Link to="/products" text="products" size="0.7rem" />
			</li>
			<li>
				<Link to="/about" text="about" size="0.7rem" />
			</li>
			<li>
				<Link to="/contact" text="contact" size="0.7rem" />
			</li>
		</ul>
	</nav>
</header>

<style lang="scss">
	header {
		display: flex;
		align-items: center;
		justify-content: space-around;
		height: 5rem;
		padding-left: 0.8rem;
		padding-right: 0.8rem;
		z-index: 2000;
		top: 0;
		left: 0;
		position: fixed;
		width: 100%;
		background-color: var(--eerie-black);
		border-bottom: solid 2px var(--baby-powder);

		a {
			color: var(--baby-powder);
			text-transform: uppercase;
			font-weight: 700;
			letter-spacing: 0.1rem;
			text-decoration: none;
		}

		a:hover {
			cursor: crosshair;
		}

		.logo {
			padding: 1.5rem;
		}

		nav {
			display: flex;
			flex: 1 1 auto;
			justify-content: flex-start;
			align-items: center;

			ul {
				display: flex;
				list-style: none;

				li {
					position: relative;
					height: 100%;
					justify-content: center;
					align-items: center;
					padding-left: 0.7rem;
					padding-right: 0.7rem;
				}
			}
		}
	}
</style>
