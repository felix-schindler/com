<script>
	import { page } from "$app/stores";
	import { browser } from "$app/environment";
	import { goto } from "$app/navigation";
	import { redirect } from "@sveltejs/kit";

	import { authStore } from "$lib/core/stores";

	import Footer from "$lib/components/Footer.svelte";

	// #region redirects

	let path = $page.url.pathname;
	$: path = $page.url.pathname;

	if (path == "/app") {
		const dashPath = "/app";
		if (browser) goto(dashPath);
		else redirect(307, dashPath);
	}

	$: if ($authStore == null) {
		const authPath = "/about/auth?next=" + encodeURIComponent(path);
		if (browser) goto(authPath);
		else redirect(307, authPath);
	}

	//#endregion redirects
</script>

<div class="hmf">
	<header>
		<nav>
			<a href="/app" class:active={path == "/app"}>Dashboard</a>
			<a href="/app/status" class:active={path == "/app/status"}>System Status</a>
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
