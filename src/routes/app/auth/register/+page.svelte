<script lang="ts">
	import type { Question, SimpleQuestion, GivenAnswer } from "$lib/core/types";

	import Quiz from "./Quiz.svelte";
	import Evaluation from "./Evaluation.svelte";
	import Spinner from "$lib/components/Spinner.svelte";
	import { page } from "$app/stores";

	let allQuestions: any[] = [
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
	let currentQuestion: any;
	let lastQuestionAnswered = false;
	let answers: any[] = [];

	async function loadQuestions(): Promise<void> {
		currentQuestion = allQuestions[0];
	}

	loadQuestions();
</script>

<div class="ac">
	<div class="card">
		<h1>Willkommen!</h1>
		{#if lastQuestionAnswered}
			<Evaluation bind:answers />
		{:else if currentQuestion}
			<Quiz bind:currentQuestion bind:answers />
		{:else}
			<Spinner /> Lädt...
		{/if}
	</div>
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
		}
	}
</style>
