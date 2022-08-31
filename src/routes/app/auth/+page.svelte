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
			loading = true;
			success = false;
		}, 2500);
	}
</script>

<div class="ac">
	<form on:submit|preventDefault={login} class="card">
		<h1>Login</h1>
		<input type="email" bind:value={mail} placeholder="E-Mail" />
		<input type="password" bind:value={pass} placeholder="Passwort" />
		<div class="btns">
			<button type="reset">Clear</button>
			<button type="submit" disabled={loading || (action && success)}>
				{#if loading}
					<Spinner />
				{/if}
				Login
			</button>
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

		.btns {
			display: grid;
			grid-template-columns: 1fr 1fr;
		}
	}
</style>
