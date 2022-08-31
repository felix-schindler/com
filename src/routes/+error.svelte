<script lang="ts">
	import { browser } from "$app/environment";

	import { page } from "$app/stores";

	let votes: Record<string, number> = { Felix: 0, Florian: 0, Beide: 0 };
	let voted = false;

	function vote(name: string): void {
		votes[name]++;
		voted = true;
	}
</script>

<div class="ac">
	<div>
		{#if browser && window.history.length > 2}
			<a href="#!" on:click|preventDefault={() => window.history.back()}>&larr; Zurück</a>
		{/if}
		<h1>{$page.status} <small>- {$page.error.message}</small></h1>
		<p>Wer soll für diesen Fehler gefeuert werden?</p>
		<div class="btns">
			<button type="button" disabled={voted} on:click={() => vote("Felix")}>
				{#if voted}
					{votes["Felix"] + votes["Beide"]}
				{/if}
				Felix
			</button>
			<button type="button" disabled={voted} on:click={() => vote("Florian")}>
				{#if voted}
					{votes["Florian"] + votes["Beide"]}
				{/if}
				Florian
			</button>
			<button type="button" disabled={voted} on:click={() => vote("Beide")}>
				{#if voted}
					{votes["Beide"]}
				{/if}
				Beide
			</button>
		</div>
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

			button {
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
