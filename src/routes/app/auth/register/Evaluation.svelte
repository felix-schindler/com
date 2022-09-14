<script lang="ts">
	import type { GivenAnswer } from "$lib/core/types";
	import { tooltip } from "svooltip";

	let mail: string; // mail address of registering customer
	export let answers: GivenAnswer[]; // All answers given by the user

	// Evaluation values
	let estimate = {
		frontend: "SvelteKit",
		backend: "PocketBase",
		desktop: undefined,
		time: 0,
		fixedCost: 0,
		monthlyCost: 0,
	};

	$: if (answers.length > 0) {
		answers.map((a) => {
			console.table(a);
		});
	}

	async function saveAnswers() {
		// loading = true;

		try {
			const { pb } = await import("$lib/core/stores");
			pb.records.create("register_answers", { mail, answers });
			// success = true;
		} catch {
			// success = false;
		} finally {
			// loading = false;
		}
	}
</script>

<form on:submit|preventDefault={saveAnswers}>
	<input type="email" bind:value={mail} />
	<button type="submit">Antworten speichern und in Kontakt treten</button>
</form>
<table class="w">
	<thead>
		<th>Kategorie</th>
		<th>Wert</th>
	</thead>
	<tbody>
		<tr>
			<td>Festkosten</td>
			<td class="end">{estimate.fixedCost}</td>
		</tr>
		<tr>
			<td>
				Laufende Kosten <abbr use:tooltip={{ content: "pro Monat" }} title="pro Monat">
					(p. M.)
				</abbr>
			</td>
			<td class="end">{estimate.monthlyCost}</td>
		</tr>
		<tr>
			<td>Technologien</td>
			<td>
				{#if estimate.desktop}
					mit {estimate.desktop}
				{/if}
			</td>
		</tr>
	</tbody>
</table>

<style lang="scss">
	form {
		padding: 0.5em;
		border-color: rgba(var(--gray-rgb), 0.8);
		border-radius: var(--radius);
	}

	table {
		.end {
			text-align: end;
		}
	}
</style>
