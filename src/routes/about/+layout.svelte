<div>
	<slot />
</div>

<style>
	div {
		width: 95%;
		height: 100%;
		margin: 0 auto;
	}

	@media (min-width: 768px) {
		div {
			width: 60%;
		}
	}
</style>
