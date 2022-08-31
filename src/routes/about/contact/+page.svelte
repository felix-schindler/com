<script lang="ts">
	import Spinner from "$lib/components/Spinner.svelte";

	let mail = "";
	let desc = "";

	let sending = false;
	let success: undefined | boolean;

	async function submit(): Promise<void> {
		sending = true;

		if (mail == "" || desc == "") {
			sending = false;
			success = false;
		} else {
			setTimeout(() => {
				sending = false;
				mail = "";
				desc = "";
				success = true;
			}, 2500);
		}
	}
</script>

<svelte:head>
	<title>Kontakt &middot; YourCompany</title>
</svelte:head>

<div class="ac">
	<form class="card" on:submit|preventDefault={submit}>
		<h1>Kontakt</h1>
		<input type="email" bind:value={mail} placeholder="Deine E-Mail" />
		<textarea bind:value={desc} rows="7" placeholder="Beschreibung" />
		<div class="btns">
			<span>
				{#if success !== undefined && !sending}
					{success ? "Nachricht gesendet" : "Nachricht konnte nicht gesendet werden"}
				{/if}
			</span>
			<span>
				<button type="reset">Clear</button>
				<button type="submit" disabled={sending || mail == "" || desc == ""}>
					{#if sending}
						<Spinner />
					{/if}
					Senden
				</button>
			</span>
		</div>
	</form>
</div>

<style lang="scss">
	form.card {
		min-width: 50%;

		h1 {
			margin-bottom: 0.4em;
		}

		input,
		textarea {
			font-size: 0.9em;
			padding: 0.4em 0.6em;
			border: 1px solid rgb(var(--gray-rgb));
			border-radius: var(--radius);
		}

		textarea {
			width: 100%;
			font-family: var(--sans);
		}

		div.btns {
			display: flex;
			align-items: center;
			justify-content: space-between;
			flex-wrap: wrap;
			gap: 0.5em;

			width: 100%;
			padding-top: 0.25em;
		}
	}
</style>
