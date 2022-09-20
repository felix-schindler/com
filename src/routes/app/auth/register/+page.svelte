<script lang="ts">
	import { tooltip } from "svooltip";
	import "svooltip/svooltip.css";

	import type { Question, Answer, GivenAnswer } from "$lib/core/types";

	import Evaluation from "./Evaluation.svelte";
	import { pb } from "$lib/core/stores";

	let qCount = 0; // Index of answer currently being answered
	let allQuestions: any[] | Question[] = [
		{
			question: "Was möchten Sie?",
			answers: [
				{
					answer: "(Web) Anwendung",
					hint: "Es handelt sich um ein großes Programm, z. B. Ticketsystem, Versandsystem",
				},
				{
					answer: "Dynamische Webseite",
					hint: "Inhalt ändert sich oft, z. B. Blog, Online Shop",
				},
				{
					answer: "Statische Webseite",
					hint: "Inhalt ändert sich quasi nie, z. B. Firmen Webseite",
				},
			],
		},
	];
	let currentQuestion = allQuestions[0];

	let answers: GivenAnswer[] = [];
	let lastQuestionAnswered = false;

	$: lastQuestionAnswered = qCount == allQuestions.length;

	async function loadQuestions(answerIndex: string): Promise<void> {
		const res = await pb.records.getFullList("register_questions", undefined, {
			filter: `parent = ${answerIndex}`,
		});

		allQuestions = res;
	}

	async function answer(a: Answer): Promise<void> {
		if (allQuestions.length == 1) {
			let index = "1";
			switch (a.answer) {
				case "(Web) Anwendung":
					index = "1";
					break;
				case "Dynamische Webseite":
					index = "2";
					break;
				case "Statische Webseite":
					index = "3";
					break;
			}

			answers = [{ question: currentQuestion.question, answer: a.answer }];
			await loadQuestions(index);
			currentQuestion = allQuestions[qCount];
		} else {
			answers = [...answers, { question: currentQuestion.question, answer: a.answer }];
			currentQuestion = allQuestions[++qCount];
		}
	}
</script>

<div class="ac">
	{#if lastQuestionAnswered}
		<Evaluation bind:answers />
	{:else}
		<div class="card">
			<div class="quiz">
				{#if allQuestions.length == 1}
					<h1>Willkommen!</h1>
					<p>
						Bevor es los geht müssen Sie <mark
							><abbr use:tooltip={{ content: "maximal" }} title="maximal">max.</abbr> 5 Fragen</mark>
						beantworten
					</p>
					<p>
						Falls sie eine Antwort auf eine Frage nicht wissen, können Sie auch gerne unser <a
							href="/about/contact">Kontakt Formular</a> benutzen.
					</p>
				{:else}
					{@const qsLeft = allQuestions.length - qCount}
					<p>
						Bevor es los geht müssen Sie <mark>{qsLeft} Frage{qsLeft != 1 ? "n" : ""}</mark> beantworten
					</p>
				{/if}
				<p class="q">{currentQuestion.question}</p>
				{#each currentQuestion.answers as a}
					<button type="button" on:click={() => answer(a)}>
						{a.answer}
						{#if a.hint}
							<i class="bi bi-info-circle" use:tooltip={{ content: a.hint }} />
						{/if}
					</button>
				{/each}
			</div>
		</div>
	{/if}
</div>

<style lang="scss">
	.ac {
		padding: 0 0.5em;

		& > .card {
			width: 100%;
			text-align: center;

			@media (min-width: 1024px) {
				min-width: 525px;
				max-width: 25%;
			}

			div.quiz {
				a {
					color: var(--accent);
				}

				p.q {
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
		}
	}
</style>
