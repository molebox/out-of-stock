<script>
	import Logo from '../../../static/oos-logo.svg?component';
</script>

<header>
	<nav>
		<Logo />
		<ul>
			<li>
				<a href="/">out of stock</a>
			</li>
			<li>
				<a href="/products">products</a>
			</li>
			<li>
				<a href="/about">about</a>
			</li>
			<li>
				<a href="/contact">contact</a>
			</li>
		</ul>
	</nav>
</header>

<style lang="scss">
	header {
		display: flex;
		align-items: center;
		height: 100px;

		nav {
			display: flex;
			width: 60%;
			justify-content: start;
			align-items: center;

			svg {
				padding: 1.5rem;
			}

			a {
				color: var(--baby-powder);
				font-size: 1.3rem;
				text-decoration: none;
			}

			ul {
				display: flex;
				justify-content: space-evenly;
				list-style: none;
				width: 100%;
			}
		}
	}
</style>
