<script lang="ts">
	import { browser } from "$app/environment";
	import { page } from "$app/stores";

	import { pb } from "$lib/core/stores";
	import { onDestroy, onMount } from "svelte";

	type Vote = {
		id: string;
		name: string;
		votes: number;
	};

	let votes: Vote[];
	let voted = false;

	loadVotes();

	/**
	 * Loads the current votes and sets `pbVotes`
	 */
	async function loadVotes(): Promise<void> {
		try {
			votes = (await pb.records.getFullList("error_voting")) as unknown as Vote[];
		} catch {
			console.debug("Failed to load votes");
		}
	}

	async function updateVote(vote: Vote): Promise<void> {
		try {
			await pb.records.update("error_voting", vote.id, { votes: ++vote.votes });
			voted = true;
		} catch {
			console.debug("Failed to load votes");
		}
	}

	onMount(() => {
		pb.realtime.subscribe("error_voting", (e): void => {
			if (e.action == "update") {
				const index = votes.findIndex((r) => r.id == e.record.id);
				if (index != -1) votes[index] = e.record as unknown as Vote;
			}
		});
	});

	onDestroy(() => {
		pb.realtime.unsubscribe("error_voting");
	});
</script>

<div class="ac">
	<div>
		{#if browser && window.history.length > 1}
			<a href="#!" on:click|preventDefault={() => window.history.back()}>&larr; Zurück</a>
		{/if}
		<h1>{$page.status} <small>- {$page.error.message}</small></h1>
		{#if votes && votes.length > 0}
			<p>Wer soll für diesen Fehler gefeuert werden?</p>
			<div class="btns">
				{#each votes as vote}
					<button type="button" disabled={voted} on:click={() => updateVote(vote)}>
						{#if voted}
							{vote.votes}
						{/if}
						{vote.name}
					</button>
				{/each}
			</div>
		{/if}
		<small>
			Wenn Du nichts für den Fehler kannst, melde ihn bitte
			<a href="https://github.com/felix-schindler/com/issues" rel="nofollow noreferrer">hier</a>.
		</small>
	</div>
</div>

<style lang="scss">
	.ac {
		min-height: 100vh;
		text-align: center;

		a {
			&:hover {
				color: var(--accent);
			}
		}

		p {
			margin-bottom: 0;
		}

		.btns {
			margin-block: 0.25em;

			button:disabled {
				transition: none;
			}
		}

		small {
			a {
				text-decoration: underline;
			}
		}
	}
</style>
