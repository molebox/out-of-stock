<script>
	export let to;
	export let text;
	export let width;
</script>

<a style="width: {width}" href={to}>{text}</a>

<style lang="scss">
	a {
		padding: 0.5rem 1rem;
		text-decoration: none;
		text-transform: uppercase;
		background-color: var(--eerie-black);
		border-color: var(--baby-powder);
		color: var(--baby-powder);
		/* width: 200px; */
		text-align: center;
		transition: box-shadow 0.3s ease-in-out;
	}

	a:hover {
		cursor: crosshair;
		box-shadow: -12px 10px 14px -6px var(--eerie-black);
	}

	// mobile
	@media (max-width: 992px) {
		a {
			font-size: 1.7rem;
			min-width: 300px;
		}
	}
</style>
