<script lang="ts">
	import type { Question, SimpleQuestion, GivenAnswer } from "$lib/core/types";

	import Quiz from "./Quiz.svelte";
	import Evaluation from "./Evaluation.svelte";
	import Spinner from "$lib/components/Spinner.svelte";
	import { page } from "$app/stores";

	let currentQuestion: SimpleQuestion;

	let lastQuestionAnswered = false;

	let answers: GivenAnswer[] = [];

	async function loadQuestions(): Promise<void> {
		const res = await fetch($page.url.href + "/quiz");

		currentQuestion = (await res.json())[0] as unknown as Question;
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
				max-width: 50%;
			}
		}
	}
</style>
