<script lang="ts">
	import type { Quiz } from "$lib/core/types";
	import { tooltip } from "svooltip";
	import "svooltip/svooltip.css";

	import Spinner from "$lib/components/Spinner.svelte";

	let page = 0;

	async function loadQuiz(page: number): Promise<Quiz | undefined> {
		try {
			let temp = await fetch("/app/auth/register/quiz/" + page).then((res) => res.json());
			if (temp) return temp as unknown as Quiz;
		} catch {}

		return undefined;
	}

	function vote(answer: string) {
		console.log(page, answer);
		page++;
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
					<p class="q">{quiz.question}</p>
					{#each quiz.answers as a}
						<button type="button" on:click={() => vote(a.answer)}>
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
			{/if}
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
				p.q {
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
					border-color: var(--light-gray);
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
