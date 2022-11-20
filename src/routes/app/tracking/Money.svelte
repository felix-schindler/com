<script lang="ts">
	export let start: string;

	// @ts-ignore
	let money = (new Date() - new Date(start) / 1000) * 0.00555555555;

	setInterval(() => {
		money += 0.00555555555;
	}, 1000);
</script>

<p>💸 {money.toFixed(2).replace(".", ",")} €</p>

<style>
	p {
		margin-block: 0;

		font-family: ui-rounded, var(--sans);
		font-size: 2em;
		font-weight: 600;
		padding: 0.4em 0.6em;
		border: 1px solid rgba(var(--gray-rgb), 0.8);
		border-radius: var(--radius);
	}
</style>
