<script>
	import Logo from '../../../../static/oos-logo.svg?component';
</script>

<header>
	<div class="logo">
		<Logo />
	</div>
	<nav>
		<ul>
			<li>
				<a href="/">home</a>
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
		height: 5rem;
		padding-left: 0.8rem;
		padding-right: 0.8rem;
		z-index: 500;
		top: 0;
		left: 0;
		position: fixed;
		width: 100%;
		background-color: var(--eerie-black);

		.logo {
			padding: 1.5rem;
		}

		nav {
			display: flex;
			flex: 1 1 auto;
			justify-content: flex-start;
			align-items: center;

			a {
				color: var(--baby-powder);
				font-size: 1rem;
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

			ul {
				display: flex;
				justify-content: flex-start;
				list-style: none;
				width: 100%;
				height: 100%;

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
