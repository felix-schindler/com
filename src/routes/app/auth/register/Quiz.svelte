<script lang="ts">
	import { tooltip } from "svooltip";
	import "svooltip/svooltip.css";

	import type { GivenAnswer, SimpleAnswer, SimpleQuestion } from "$lib/core/types";

	export let currentQuestion: SimpleQuestion; // Current question
	export let answers: GivenAnswer[]; // Given answers by the user

	function answer(a: SimpleAnswer) {
		answers = [...answers, { question: currentQuestion.question, answer: a.answer }];
	}
</script>

<div class="quiz">
	<p>
		Bevor es los geht müssen Sie <mark
			><abbr use:tooltip={{ content: "maximal" }} title="maximal">max.</abbr> 5 Fragen</mark> beantworten...
	</p>
	<p class="q">{currentQuestion.question}</p>
	{#each currentQuestion.answers as a}
		<button type="button" on:click={() => answer(a)}>
			{a.answer}
		</button>
	{/each}
</div>

<style lang="scss">
	div.quiz {
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
</style>
