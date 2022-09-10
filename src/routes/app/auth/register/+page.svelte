<script lang="ts">
	import type { Quiz, Answer } from "$lib/core/types";
	import { tooltip } from "svooltip";
	import "svooltip/svooltip.css";

	import Spinner from "$lib/components/Spinner.svelte";

	let page = 0;
	let answers: Answer[] = [];

	async function loadQuiz(page: number): Promise<Quiz | undefined> {
		try {
			let temp = await fetch("/app/auth/register/quiz/" + page).then((res) => res.json());
			if (temp) return temp as unknown as Quiz;
		} catch {}

		return undefined;
	}

	function answer(answer: Answer) {
		answers.push(answer);
		page++;
	}

	function evaluation(): string[] {
		let frontend = "SvelteKit";
		let backend = "PocketBase";

		if (answers[1].index == 2) {
			if (answers[2].index != 1) backend = "Firebase";
			else backend = "SupaBase";
		}
		if (answers[0].index == 1 && answers[2].index == 3 && answers[3].index == 2) {
			frontend = "Flutter";
		}

		return [frontend, backend];
	}
</script>

<div class="ac">
	<div class="card">
		<h1>Willkommen!</h1>
		<p class="b">Um Kunde zu werden, müssen Sie zuerst ein paar Fragen beantworten...</p>
		{#await loadQuiz(page)}
			<div class="ac">
				<p><Spinner /> Loading...</p>
			</div>
		{:then quiz}
			{#if quiz && quiz.answers.length > 0}
				<div class="quiz">
					<div class="q">
						<p>{quiz.question}</p>
						<p>{quiz.index} von {quiz.max}</p>
					</div>
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
				</div>
			{:else}
				<p class="success">
					Danke für das Beantworten der Fragen, wir werden uns bei Ihnen melden!
				</p>
				<p>
					Basierend auf Ihren Antworten wird es vermutlich eine Lösung mit
					{evaluation().join(" und ")}
				</p>
			{/if}
		{:catch}
			<p>Fehler beim Laden der Fragen, bitte versuchen Sie es später noch einmal.</p>
		{/await}
	</div>
</div>

<style lang="scss">
	.ac {
		padding: 0 0.5em;

		& > .card {
			.b {
				font-weight: 500;
			}

			.success {
				background-color: rgba(var(--green-rgb), 0.6);
				padding: 0.4em 0.6em;
				border-radius: var(--radius);
			}

			div.quiz {
				div.q {
					& > p:first-child {
						margin-block-end: 0.1em;

						text-align: center;
						font-size: 1.1em;
						font-weight: 600;
					}

					& > p:last-child {
						margin-block-start: 0.1em;

						color: var(--light-gray);
						text-align: center;
						font-size: 0.95em;
					}
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
