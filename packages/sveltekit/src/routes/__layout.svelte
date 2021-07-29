<script>
	import DesktopHeader from '$lib/base/header/desktop-header.svelte';
	import MobileHeader from '$lib/base/header/mobile-header.svelte';
	import Main from '$lib/base/main.svelte';
	import Footer from '$lib/base/footer.svelte';
	import { media } from '$lib/stores/media';
	import Sidebar from '$lib/base/header/sidebar.svelte';

	import '../app.css';

	let open = false;
</script>

<div class="base {$media.classNames}">
	{#if $media.large}
		<DesktopHeader />
	{:else}
		<Sidebar bind:open />
		<MobileHeader bind:sidebar={open} />
	{/if}
	<Main>
		<slot />
	</Main>
	<Footer />
</div>

<style>
	.base {
		background-color: var(--eerie-black);
		height: 100vh;
		position: relative;
	}
</style>
