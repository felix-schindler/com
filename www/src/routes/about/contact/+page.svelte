<script lang="ts">
	import { pb } from "$lib/core/stores";
	import Spinner from "$lib/components/Spinner.svelte";

	let email = "",
		message = "",
		sending = false,
		success: undefined | boolean;

	async function submit(): Promise<void> {
		sending = true;

		if (email == "" || message == "") {
			sending = false;
			success = false;
		} else {
			try {
				await pb.records.create("contact", { email, message });
				success = true;
				email = "";
				message = "";
			} catch {
				success = false;
			} finally {
				sending = false;
			}
		}
	}
</script>

<svelte:head>
	<title>Kontakt &middot; YourCompany</title>
</svelte:head>

<div class="ac">
	<form class="card" on:submit|preventDefault={submit}>
		<h1>Kontakt</h1>
		<input type="email" bind:value={email} placeholder="Deine E-Mail" />
		<textarea bind:value={message} rows="7" placeholder="Beschreibung" />
		<div class="msg-btns">
			<span class:green={success} class:red={!success}>
				{#if success !== undefined && !sending}
					{success ? "Nachricht gesendet" : "Nachricht konnte nicht gesendet werden"}
				{/if}
			</span>
			<span>
				<button type="reset">Clear</button>
				<button type="submit" disabled={sending || email == "" || message == ""}>
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
		h1 {
			margin-bottom: 0.4em;
		}

		span.red {
			color: red;
		}

		span.green {
			color: rgb(var(--green-rgb));
		}
	}

	@media (min-width: 1024px) {
		form.card {
			min-width: 525px;
			max-width: 50%;
		}
	}
</style>
