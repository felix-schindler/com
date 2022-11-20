<script lang="ts">
	import Spinner from "$lib/components/Spinner.svelte";
	import { pb } from "$lib/core/stores";

	let mail: string;
	let success: boolean, action: boolean, loading: boolean;

	/**
	 * Doesn't return anything but set's `success` and `action`
	 */
	async function forgotPassword(): Promise<void> {
		loading = true;
		action = true;

		try {
			await pb.collection("users").requestPasswordReset(mail);
			success = true;
		} catch {
			success = false;
		} finally {
			loading = false;
		}
	}
</script>

<svelte:head>
	<title>Passwort vergessen &middot; YourCompany</title>
</svelte:head>

<div class="ac">
	<form on:submit|preventDefault={forgotPassword} class="card">
		<h1>Passwort vergessen</h1>

		<input type="email" bind:value={mail} placeholder="E-Mail" />
		<div class="msg-btns">
			<div>
				{#if action && !loading}
					Bitte schauen sie in ihrem Posteingang<br />
					<small>Falls es einen Account mit dieser E-Mail gibt, wurde sie soeben versendet.</small>
				{/if}
			</div>
			<button type="submit" disabled={loading || (action && success) || !mail}>
				{#if loading}
					<Spinner />
				{/if}
				E-Mail senden
			</button>
		</div>
	</form>
</div>

<style lang="scss">
	form.card {
		display: flex;
		flex-direction: column;
		width: 100%;

		text-align: center;

		.msg-btns {
			flex-direction: column-reverse;
		}
	}

	@media (min-width: 1024px) {
		form.card {
			min-width: 525px;
			max-width: 50%;
			width: auto;

			input {
				font-size: 1.1em;
			}

			button {
				font-size: 1.05em;
			}

			.msg-btns {
				flex-direction: row;
			}
		}
	}
</style>
