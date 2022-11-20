<script lang="ts">
	import { authStore, pb } from "$lib/core/stores";
	import Spinner from "$lib/components/Spinner.svelte";
	import Money from "./Money.svelte";

	async function newTracking() {
		// Only create new if there's non active
		await pb.collection("tracking").create({
			user: $authStore?.id,
			start: new Date().toISOString(),
		});
	}

	async function endTracking(id: string) {
		await pb.collection("tracking").update(id, {
			end: new Date(),
		});
	}
</script>

<button type="button" on:click={newTracking}>New Tracking</button>
<div class="ac">
	{#await pb.collection("tracking").getList()}
		<p><Spinner /> Loading...</p>
	{:then tracking}
		{#if tracking.items.length > 0}
			<div class="list">
				<h1>Liste</h1>
				{#each tracking.items as track}
					<div>
						<p>ID: {track.id}</p>
						<p>Start: {track.start}</p>
						{#if track.end}
							<p>Ende: {track.end}</p>
						{:else}
							<p class="row">
								<Money start={track.start} />
								<button type="button" class="inverse" on:click={() => endTracking(track.id)}>
									⏹️ Stop
								</button>
							</p>
						{/if}
						<hr />
					</div>
				{/each}
			</div>
		{:else}
			<div class="ac">
				<p>⚠️ There are no records</p>
			</div>
		{/if}
	{:catch e}
		<div class="ac">
			<p class="red">🚨 {e}</p>
		</div>
	{/await}
</div>

<style>
	.red {
		color: red;
	}

	.list {
		width: 100%;
	}

	.row {
		display: flex;
		align-items: center;
		gap: 0.5em;
	}
</style>
