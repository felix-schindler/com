<script>
	import { fly } from "svelte/transition";
	import { page } from "$app/stores";
	import Footer from "$lib/components/Footer.svelte";

	let path = $page.url.pathname;
	$: path = $page.url.pathname;

	let showMore = false;
	$: showMore = path.startsWith("/about/docs") || path == "/about/ctf";
</script>

<div class="hmf">
	<header>
		<nav>
			<a href="/about" class:active={path == "/about"}>Start</a>
			<a href="/about/team" class:active={path == "/about/team"}>Team</a>
			<a href="/about/contact" class:active={path == "/about/contact"}>Kontakt</a>
			<div
				on:mouseenter={() => (showMore = true)}
				on:mouseleave={() => {
					showMore = path.startsWith("/about/docs") || path == "/about/ctf";
				}}>
				{#if showMore}
					<span in:fly={{ y: -20 }}>
						<a href="/about/ctf" class:active={path == "/about/ctf"}>CTF</a>
						<a href="/about/docs" class:active={path.startsWith("/about/docs")}>Docs</a>
						<a
							href="https://github.com/felix-schindler/com"
							title="Diese Seite auf GitHub"
							target="_blank"
							rel="nofollow noreferrer">
							<i class="bi bi-github" />
						</a>
					</span>
				{:else}
					<a href="#!" in:fly={{ y: -20 }}>More</a>
				{/if}
			</div>
		</nav>
		<div class="auth">
			<a href="/about/auth" class:active={path == "/about/auth"}>Login</a>
			<a href="/about/auth/register" role="button" class:active={path == "/about/auth/register"}>
				Registrieren
			</a>
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

		nav {
			div,
			div > span {
				display: flex;
				align-items: top;
			}
		}

		div.auth {
			display: flex;
			align-items: center;
			gap: 1em;

			a.active {
				&:first-child {
					color: var(--accent);
				}

				&[role="button"] {
					color: inherit;
					background-color: transparent;
					border-color: var(--accent);

					transition: 200ms color, 200ms background-color, 200ms border-color;
				}
			}
		}
	}

	main {
		width: 95%;
		height: 100%;
		margin: 0 auto;

		@media (min-width: 1024px) {
			width: 60%;
		}
	}
</style>
