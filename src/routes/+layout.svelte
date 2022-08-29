<script>
	import "../style/main.css";
	import { page } from "$app/stores";

	let path = $page.url.pathname;
	$: path = $page.url.pathname;
</script>

<div class="hmf">
	<header>
		<nav>
			<a href="/" class:active={path == "/"}>Start</a>
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
	<footer>
		<span>&copy; 2022 &middot; Felix Schindler</span>
		<div>
			<a href="/about/imprint">Impressum</a>
			<a href="/about/privacy">Datenschutzinformation</a>
		</div>
	</footer>
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

	footer {
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-wrap: wrap;
		gap: 0.5em;

		div {
			display: flex;
			gap: 1em;
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
</style>
