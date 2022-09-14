<script lang="ts">
	import type { Question, SimpleQuestion, GivenAnswer } from "$lib/core/types";

	let allQuestions: Question[];
	let currentQuestion: SimpleQuestion;

	let lastQuestionAnswered = false;

	let mail: string; // mail address of registering user
	let answers: GivenAnswer[];

	async function loadQuestions(): Promise<void> {
		const res = await fetch("/app/auth/register/quiz");
		allQuestions = await res.json();
		currentQuestion = allQuestions[0];
	}

	async function answer() {}

	async function saveAnswers() {
		const { pb } = await import("$lib/core/stores");

		if (lastQuestionAnswered) {
			// save to db
			pb.records.create("register_answers", {
				mail,
				answers,
			});
		}
	}
</script>

<div class="ac">
	<div class="card">
		{#if lastQuestionAnswered}{/if}
		<h1>Willkommen!</h1>
	</div>
</div>
