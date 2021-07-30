<script>
	import Logo from '../../../../static/oos-logo.svg?component';
	import HomeLogo from '../../../../static/home.svg?component';
	import ProductLogo from '../../../../static/hanger.svg?component';
	import AboutLogo from '../../../../static/question.svg?component';
	import ContactLogo from '../../../../static/contact.svg?component';
</script>

<header>
	<div class="logo">
		<Logo />
	</div>
</header>

<div class="wrapper">
	<a class="link" href="/">
		<HomeLogo />
		home
	</a>
	<a class="link" href="/products">
		<ProductLogo />
		products
	</a>
	<a class="link" href="/about">
		<AboutLogo />
		about
	</a>
	<a class="link" href="/contact">
		<ContactLogo />
		contact
	</a>
</div>

<!-- <script>
	import Logo from '../../../../static/oos-logo.svg?component';
	import Burger from './burger.svelte';

	export let sidebar = false;
</script>

<header>
	<div class="logo">
		<Logo />
	</div>
	<Burger bind:open={sidebar} />
</header>

<style lang="scss">
	header {
		display: flex;
		align-items: center;
		justify-content: space-between;
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
	}
</style> -->
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
	}
	.wrapper {
		display: flex;
		justify-content: space-evenly;
		width: 100vw;
		height: 5rem;
		bottom: 0;
		left: 0;
		position: fixed;
		background-color: var(--eerie-black);

		a {
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			align-items: center;
			margin: 1rem auto;
			color: var(--volt);
			text-decoration: none;
		}
	}
</style>
