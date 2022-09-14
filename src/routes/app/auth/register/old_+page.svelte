<script lang="ts">
	import type { Question, Answer } from "$lib/core/types";
	import { tooltip } from "svooltip";
	import "svooltip/svooltip.css";

	import Spinner from "$lib/components/Spinner.svelte";

	let page = 0;
	let allQuestions: Question[];
	let currentQuestion: Question;

	let answers: Answer[] = [];

	function answer(answer: Answer) {
		answers.push(answer);
		page++;

		currentQuestion = allQuestions[page];
	}

	let frontend = "SvelteKit";
	let backend = "PocketBase";
	let estimateCost = 0;
	let estimateMonthlyRunningCost = 0;
	let estimateTime = 0;

	function evaluation(): void {
		// Fontend
		// if (answers[0].index == 1 && answers[2].index == 3 && answers[3].index == 2) {
		// 	frontend = "Flutter";
		// }
		// Backend
		// if (answers[1].index == 2) {
		// 	if (answers[2].index != 1) backend = "Firebase";
		// 	else backend = "SupaBase";
		// }
	}
</script>

<div class="ac">
	<div class="card">
		<h1>Willkommen!</h1>
		{#if currentQuestion !== undefined}
			<div class="quiz">
				<p class="status">
					Sie haben {quiz.index} von {quiz.max} Fragen beantwortet. Danke für das Beantworten der Fragen,
					wir werden uns bei Ihnen melden!
				</p>
				{#if quiz.answers.length > 0}
					<p class="q">{quiz.question}</p>
					{#each quiz.answers as a}
						<button type="button" on:click={() => answer(a)}>
							{a.answer}
							{#if a.hint}
								<span
									use:tooltip={{
										content: a.hint,
										// @ts-ignore
										placement: "top-middle",
									}}>
									<i class="bi bi-info-circle" />
								</span>
							{/if}
						</button>
					{/each}
				{:else}
					<h3>Aufwandsschätzung</h3>
					<table class="w">
						<tbody>
							<tr>
								<th>Geschätze feste Kosten</th>
								<td class="t-end">€ {estimateCost}</td>
							</tr>
							<tr>
								<th>Geschätze laufende Kosten (monatlich)</th>
								<td class="t-end">€ {estimateMonthlyRunningCost}</td>
							</tr>
							<tr>
								<th>Geschätzer Zeitaufwand</th>
								<td class="t-end">{estimateTime}</td>
							</tr>
							<tr>
								<th>Technologie</th>
								<td>{frontend}, {backend}</td>
							</tr>
						</tbody>
					</table>
				{/if}
			</div>
		{:else}
			<p><Spinner /> Lädt...</p>
		{/if}
	</div>
</div>

<style lang="scss">
	.ac {
		padding: 0 0.5em;

		& > .card {
			@media (min-width: 1024px) {
				min-width: 525px;
				max-width: 50%;
			}

			div.quiz {
				p.status {
					margin-block-start: 0.1em;

					color: var(--light-gray);
					text-align: center;
					font-size: 0.95em;

					&.success {
						background-color: rgba(var(--green-rgb), 0.6);
						padding: 0.4em 0.6em;
						border-radius: var(--radius);
					}
				}

				p.q {
					margin-block-end: 0.1em;

					text-align: center;
					font-size: 1.1em;
					font-weight: 600;
				}

				button {
					display: flex;
					justify-content: space-between;
					width: 100%;

					text-align: start;
					color: inherit;
					background-color: transparent;

					margin-block: 0.5em;
					border-color: rgba(var(--gray-rgb), 0.8);
					border-radius: var(--radius);

					&:hover:not(:disabled) {
						background-color: rgba(var(--gray-rgb), 0.2);
					}

					&:active:not(:disabled) {
						background-color: rgba(var(--gray-rgb), 0.4);
					}
				}
			}

			div.card > table tr > td {
				text-align: end;
			}
		}
	}
</style>
