<script lang="ts">
	import { tooltip } from "svooltip";
	import "svooltip/svooltip.css";

	import type { GivenAnswer } from "$lib/core/types";
	import Spinner from "$lib/components/Spinner.svelte";

	let mail: string; // mail address of registering customer
	export let answers: GivenAnswer[]; // All answers given by the user

	let success: boolean;
	let loading = false;

	// Evaluation values
	let estimate = {
		frontend: "SvelteKit",
		backend: "PocketBase",
		desktop: undefined,
		time: 0,
		fixedCost: 0,
		monthlyCost: 0,
	};

	async function saveAnswers() {
		loading = true;

		const { pb } = await import("$lib/core/stores");
		try {
			await pb.collection("register_user_answers").create({ mail, answers });
			mail = "";
			success = true;
		} catch (e) {
			success = false;
			console.debug(e);
		} finally {
			loading = false;
		}
	}

	async function evaluation() {
		if (answers[0].answer == "(Web) Anwendung") {
			let device: "mobile" | "pc" | "both" = "both";
			let offline: "none" | "small part" | "local" | "completely" = "none";
			let moreThan15000Users = false;

			answers.map((a) => {
				switch (a.question) {
					case "Muss die Anwendung auch ohne Internet funktionieren?":
						if (a.answer == "Ein Teil muss offline funktionieren") offline = "small part";
						else if (a.answer == "Die ganze Anwendung muss auch ohne Internet funktionieren")
							offline = "completely";
						else if (a.answer == "Die Anwendung muss nur im lokalen Netzwerk funktioneren")
							offline = "local";
						break;
					case "Auf welchem Gerät soll die Anwendung vorallem laufen?":
						if (a.answer == "Mobil") device = "mobile";
						break;
					case "Wie viele Benutzer erwarten Sie?":
						moreThan15000Users = a.answer != "unter 15.000";
						break;
					default:
						break;
				}
			});

			estimate.time += 80;

			// @ts-ignore
			if (offline != "local") estimate.monthlyCost += 5;

			if (moreThan15000Users) {
				estimate.backend = "SupaBase";
				estimate.monthlyCost += 50;
				estimate.time += 40;
			}

			// @ts-ignore
			if (offline == "small part" || offline == "completely") {
				estimate.backend = "Firebase";
				estimate.monthlyCost += 50;
				estimate.time += 16;

				// @ts-ignore
				if (device == "mobile") {
					estimate.frontend = "Flutter";
				} else {
					estimate.frontend = "Tauri";
				}
			}

			if (estimate.monthlyCost == 0) {
				estimate.monthlyCost = 2.5;
			}
		} else {
			let staticSite = false;
			let pageCount: "< 10" | "10 - 20" | "> 20";
			let hasDomain = false;

			answers.map((a) => {
				switch (a.question) {
					case "Wie viele Unterseiten wird es geben?":
						if (a.answer == "weniger als 10") pageCount = "< 10";
						else if (a.answer == "10 bis 20") pageCount = "10 - 20";
						else pageCount = "> 20";
						break;
					case "Haben Sie bereits eine Domain?":
						hasDomain = a.answer == "Ja";
						break;
					case "Was möchten Sie?":
						staticSite = a.answer == "Statische Webseite";
						break;
				}
			});

			estimate.monthlyCost += 2.5;
			if (!hasDomain) {
				estimate.monthlyCost += 2.5;
			}

			if (staticSite) {
				estimate.time += 8;
			} else {
				estimate.time += 40;
			}

			// @ts-ignore
			if (pageCount == "< 10") {
				estimate.time += 16;
				// @ts-ignore
			} else if (pageCount == "10 - 20") {
				estimate.time += 24;
			} else {
				estimate.time += 32;
			}
		}

		estimate.fixedCost = estimate.time * 25;
	}
</script>

<div class="grid">
	<div class="card">
		<h1>Willkommen!</h1>
		<p>
			Wenn Sie möchten können Sie nun ihre E-Mail eingeben um mit uns in Kontakt zu treten und ihre
			Antworten zu übermitteln.
		</p>
		<form on:submit|preventDefault={saveAnswers}>
			<input type="email" placeholder="E-Mail" bind:value={mail} required />
			<button type="submit">
				{#if loading}
					<Spinner />
				{/if}
				Antworten speichern & Kontakt aufnehmen
			</button>
			{#if success === true}
				<p class="green">Erfolgreich gespeichert.</p>
			{:else if success === false}
				<p class="red">Fehler beim speichern.</p>
			{/if}
		</form>
	</div>
	{#await evaluation()}
		<Spinner /> Lädt...
	{:then}
		<div class="card">
			<table class="w">
				<thead>
					<tr>
						<th>Kategorie</th>
						<th>Wert</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Arbeitszeit</td>
						<td>{estimate.time.toLocaleString()} Stunden</td>
					</tr>
					<tr>
						<td>Tatsächliche Zeit</td>
						<!-- Same as / 8 (Stunden am Tag) / 2 (Arbeiter) -->
						<td>{(estimate.time * 0.125 * 0.5).toLocaleString()} Arbeitstage</td>
					</tr>
					<tr>
						<td>Festkosten</td>
						<td>{estimate.fixedCost} €</td>
					</tr>
					<tr>
						<td>
							Laufende Kosten <abbr use:tooltip={{ content: "pro Monat" }} title="pro Monat">
								(p. M.)
							</abbr>
						</td>
						<td
							use:tooltip={{
								content: "Enthält Domain-, Server- / Cloud-, sowie Verwaltungs-Kosten",
							}}>{estimate.monthlyCost} €</td>
					</tr>
					<tr>
						<td>Technologien</td>
						<td>
							{estimate.frontend}
							{#if estimate.desktop}
								mit {estimate.desktop}
							{/if}
							und {estimate.backend}
						</td>
					</tr>
				</tbody>
			</table>
			<p class="s">
				Vorläufige Schätzung der Kosten und Zeiten, tatsächliche Werte können abweichen.
			</p>
		</div>
	{/await}
</div>

<style lang="scss">
	div.card {
		text-align: center;

		p {
			&.red {
				color: red;
			}

			&.green {
				color: rgb(var(--green-rgb));
			}

			&.s {
				color: var(--light-gray);
			}
		}

		form {
			padding: 0.5em;
			border-color: rgba(var(--gray-rgb), 0.8);
			border-radius: var(--radius);
		}

		table {
			th {
				text-align: center;
			}

			td:first-child {
				text-align: start;
			}

			td:last-child {
				text-align: end;
			}
		}
	}
</style>
