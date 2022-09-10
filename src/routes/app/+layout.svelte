<script>
	import { page } from "$app/stores";
	import { browser } from "$app/environment";
	import { goto } from "$app/navigation";
	import { redirect } from "@sveltejs/kit";

	import { authStore } from "$lib/core/stores";

	import Footer from "$lib/components/Footer.svelte";

	let path = $page.url.pathname;
	$: path = $page.url.pathname;

	const authPath = "/app/auth";

	$: if (!path.startsWith(authPath) && $authStore.model == null) {
		if (browser) goto(authPath);
		else redirect(307, authPath);
	}
</script>

<div class="hmf">
	<header>
		<nav>
			{#if $authStore.model == null}
				<a href="/app/auth" class:active={path == "/app/auth"}>Login</a>
				<a href="/app/auth/register" class:active={path == "/app/auth/register"}>Register</a>
			{:else}
				<a href="/app" class:active={path == "/app"}>Start</a>
			{/if}
		</nav>
	</header>
	<main>
		<slot />
	</main>
	<Footer />
</div>
