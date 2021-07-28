<script>
	import Header from '$lib/base/header.svelte';
	import Main from '$lib/base/main.svelte';
	import Footer from '$lib/base/footer.svelte';
	import '../app.css';
</script>

<div class="base">
	<Header />
	<Main>
		<slot />
	</Main>
	<Footer />
</div>

<style>
	.base {
		background-color: var(--eerie-black);
	}
</style>
