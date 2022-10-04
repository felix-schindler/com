<script lang="ts">
	export let onclick: () => any;
</script>

<span class="clickable" on:click={onclick}>
	<slot />
</span>
