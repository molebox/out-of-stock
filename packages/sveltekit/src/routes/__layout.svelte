<script>
	import DesktopHeader from '$lib/base/header/desktop-header.svelte';
	import MobileHeader from '$lib/base/header/mobile-header.svelte';
	import Main from '$lib/base/main.svelte';
	import Footer from '$lib/base/footer.svelte';
	import { media } from '$lib/stores/media';
	import '../app.css';

	let open = false;
</script>

<div class="base {$media.classNames}">
	{#if $media.large}
		<DesktopHeader />
	{:else}
		<MobileHeader />
	{/if}
	<Main>
		<slot />
	</Main>
	{#if $media.large}
		<Footer />
	{/if}
</div>

<style lang="scss">
	.base {
		min-height: 100vh;
		background-color: var(--baby-powder);
	}
</style>
