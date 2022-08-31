<script>
	import "../../style/main.css";
	import { page } from "$app/stores";
	import Footer from "$lib/components/Footer.svelte";

	let path = $page.url.pathname;
	$: path = $page.url.pathname;
</script>

<div class="hmf">
	<header>
		<nav>
			<a href="/about" class:active={path == "/about"}>Start</a>
			<a href="/about/team" class:active={path == "/about/team"}>Team</a>
			<a href="/about/contact" class:active={path == "/about/contact"}>Kontakt</a>
			<a
				href="https://github.com/felix-schindler/com"
				title="Diese Seite auf GitHub"
				target="_blank"
				rel="nofollow noreferrer">
				<i class="bi bi-github" />
			</a>
		</nav>
		<div>
			<a href="/app/auth">Login</a>
			<a href="/app/auth/register" role="button">Sign Up</a>
		</div>
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
		justify-content: space-evenly;
		flex-wrap: wrap;
		gap: 0.5em;

		div {
			display: flex;
			align-items: center;
			gap: 1em;
		}

		nav {
			.bi {
				vertical-align: baseline;
			}
		}

		a[role="button"] {
			cursor: pointer;
			color: white;
			background-color: black;
			padding: 0.4em 0.6em;
			border: 1px solid black;
			border-radius: var(--radius);

			transition: 200ms color, 200ms background-color;
			text-decoration: none !important;

			&:hover {
				color: black;
				background-color: transparent;
			}
		}
	}

	@media screen and (prefers-color-scheme: dark) {
		header {
			a[role="button"] {
				color: black;
				background-color: white;
				border-color: white;

				&:hover {
					color: white;
				}
			}
		}
	}

	main {
		width: 95%;
		height: 100%;
		margin: 0 auto;
	}

	@media (min-width: 768px) {
		main {
			width: 60%;
		}
	}
</style>
