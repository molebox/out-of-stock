<div class="indicator" />

<style>
	.indicator {
		width: 30px;
		height: 50px;
		border: 2px solid var(--baby-powder);
		border-radius: 50px;
		position: relative;
	}
	.indicator:before {
		content: '';
		position: absolute;
		width: 10px;
		height: 10px;
		background: var(--baby-powder);
		margin: auto;
		left: 0;
		right: 0;
		top: 30px;
		border-radius: 50%;
		animation: animate 1s linear infinite;
	}
	@keyframes animate {
		0% {
			opacity: 1;
			top: 10px;
		}
		50% {
			opacity: 1;
			top: 20px;
		}
		100% {
			opacity: 0;
			top: 40px;
			transform: scale(0.8);
		}
	}
</style>
