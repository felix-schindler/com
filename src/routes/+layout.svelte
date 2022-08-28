<script>
	import "../style/main.css";
	import { page } from "$app/stores";

	let path = $page.url.pathname;
	$: path = $page.url.pathname;
</script>

<div class="hmf">
	<header>
		<nav>
			<a href="/" class:active={path == "/"}>Home</a>
		</nav>
	</header>
	<main>
		<slot />
	</main>
	<footer>&copy; 2022 &middot; Felix Schindler</footer>
</div>
