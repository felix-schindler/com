<script lang="ts">
	import Clickable from "./Clickable.svelte";

	export let value: string;

	function copy() {
		navigator.clipboard.writeText(value);
	}
</script>

<Clickable onclick={copy}>
	<slot />
</Clickable>

<style>
	:global(.clickable) {
		cursor: copy !important;
	}
</style>
