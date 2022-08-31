<script>
	import { page } from "$app/stores";

	import Footer from "$lib/components/Footer.svelte";

	let path = $page.url.pathname;
	$: path = $page.url.pathname;
</script>

<div class="hmf">
	<header>
		<nav>
			<a href="/app" class:active={path == "/app"}>Start</a>
		</nav>
	</header>
	<main>
		<slot />
	</main>
	<Footer />
</div>
