<script lang="ts">
	import { goto } from "$app/navigation";
	import { page } from "$app/stores";

	import { authStore } from "$lib/core/stores";
	import type { User } from "$lib/core/types";

	import Spinner from "$lib/components/Spinner.svelte";

	let mail: string, pass: string;
	let success: boolean, loading: boolean;

	/**
	 * Doesn't return anything but set's `success` and `action`
	 */
	async function login(): Promise<void> {
		loading = true;
		success = false;

		const { pb } = await import("$lib/core/stores");

		try {
			$authStore = (await pb.collection("users").authWithPassword(mail, pass)).record as User;
			success = true;
		} catch {
			try {
				$authStore = (await pb.admins.authWithPassword(mail, pass)).admin;
				success = true;
			} catch {}
		} finally {
			loading = false;
		}

		if (success) {
			mail = "";
			pass = "";
			await goto($page.url.searchParams.get("next") ?? "/app");
		}
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
				<button type="submit" disabled={loading || success || !mail || !pass}>
					{#if loading}
						<Spinner />
					{/if}
					Login
				</button>
			</div>
		</div>
		{#if loading == false && !success}
			<p class="red">E-Mail oder Passwort ist falsch</p>
		{/if}
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

		p.red {
			color: red;
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
