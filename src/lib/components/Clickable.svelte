<script lang="ts">
	export let onclick: () => any;
</script>

<span class="clickable" on:click={onclick}>
	<slot />
</span>

<style lang="scss">
	.clickable {
		cursor: pointer;

		padding: 3.2px 6.4px;
		border-radius: var(--radius);

		&:hover:not(:disabled) {
			background-color: rgba(var(--gray-rgb), 0.4);
		}

		&:active:not(:disabled) {
			background-color: rgba(var(--gray-rgb), 0.6);
		}

		&:disabled {
			background-color: rgba(var(--gray-rgb), 0.3);
		}
	}
</style>
