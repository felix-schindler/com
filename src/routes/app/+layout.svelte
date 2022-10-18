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
			<a href="/app/settings" class:active={path == "/app/settings"}>Settings</a>
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
	header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-wrap: wrap;
		gap: 0.5em;
	}

	main {
		width: 95%;
		height: 100%;
		margin: 0 auto;

		@media (min-width: 1024px) {
			width: 97.5%;
		}
	}
</style>
