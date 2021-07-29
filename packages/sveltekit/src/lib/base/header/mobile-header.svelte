<script>
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
</style>
