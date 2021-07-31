<script>
	export let to;
	export let text;
	export let size;
</script>

<a style="font-size: {size}" href={to}>{text}</a>

<style>
	a {
		color: var(--baby-powder);
		text-transform: uppercase;
		font-weight: 700;
		letter-spacing: 0.1rem;
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
</style>
