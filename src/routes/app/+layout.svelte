<script>
	import { page } from "$app/stores";
	import { browser } from "$app/environment";
	import { goto } from "$app/navigation";
	import { redirect } from "@sveltejs/kit";

	// import { authStore } from "$lib/core/stores";

	import Footer from "$lib/components/Footer.svelte";

	const isAdmin = true;

	let path = $page.url.pathname;
	$: path = $page.url.pathname;

	if (path == "/app") {
		const dashPath = "/app/dash";
		if (browser) goto(dashPath);
		else redirect(307, dashPath);
	}

	// $: if ($authStore.model == null) {
	// 	const authPath = "/about/auth?next=" + encodeURIComponent(path);
	// 	if (browser) goto(authPath);
	// 	else redirect(307, authPath);
	// }
</script>

<div class="hmf">
	<header>
		<nav>
			<a href="/app/dash" class:active={path == "/app/dash"}>Dashboard</a>
			{#if isAdmin}
				<a href="/app/docs" class:active={path.startsWith("/app/docs")}>Docs</a>
			{/if}
		</nav>
		<a class="inverse" href="/about/auth/logout" role="button">
			<i class="bi bi-door-open" />
			Logout
		</a>
	</header>
	<main>
		<slot />
	</main>
	<Footer />
</div>

<style lang="scss">
	div.hmf {
		header {
			display: flex;
			justify-content: space-between;
			flex-wrap: wrap;
			gap: 1em;
		}

		main {
			padding: 0 1em;
		}
	}
</style>
