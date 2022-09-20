<script lang="ts">
	import Spinner from "$lib/components/Spinner.svelte";

	let mail: string, pass: string;
	let success: boolean, action: boolean, loading: boolean;

	/**
	 * Doesn't return anything but set's `success` and `action`
	 */
	function login(): void {
		loading = true;

		setTimeout(() => {
			action = true;
			loading = false;
			success = false;

			if (success) {
				mail = "";
				pass = "";
			}
		}, 2500);
	}
</script>

<svelte:head>
	<title>Login &middot; YourCompany</title>
</svelte:head>

<div class="ac">
	<form on:submit|preventDefault={login} class="card">
		<h1>Login</h1>
		<input type="email" bind:value={mail} placeholder="E-Mail" />
		<input type="password" bind:value={pass} placeholder="Passwort" />
		<div class="msg-btns">
			<a href="/about/auth/forget">Passwort vegessen</a>
			<div>
				<button type="reset">Clear</button>
				<button type="submit" disabled={loading || (action && success) || !mail || !pass}>
					{#if loading}
						<Spinner />
					{/if}
					Login
				</button>
			</div>
		</div>
		{#if action && !success}
			<p>Failed to log in.</p>
		{/if}
	</form>
</div>

<style lang="scss">
	form.card {
		display: flex;
		flex-direction: column;
		width: 80%;

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
