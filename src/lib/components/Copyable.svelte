<script lang="ts">
	export let value: string;

	function copy() {
		navigator.clipboard.writeText(value);
	}
</script>

<span class="clickable" on:keypress={copy} on:click={copy}>
	<slot />
</span>

<style>
	:global(.clickable) {
		cursor: copy !important;
	}
</style>
