<svelte:head>
	<title>Impressum &middot; YourCompany</title>
</svelte:head>

<div>
	<h1>Impressum</h1>
	<address>
		<p><b><i class="bi bi-mailbox" /> Felix Schindler</b></p>
		<p>Theodor-Veiel-Straße 63</p>
		<p>70374 Stuttgart</p>
	</address>
	<section>
		<p>
			Telefon:
			<a href="https://t.me/felix_schindler" rel="nofollow noreferrer">
				<i class="bi bi-telegram" /> felix_schindler
			</a>
		</p>
		<p>
			E-Mail:
			<a href="mailto:webmaster@schindlerfelix.de">
				<i class="bi bi-envelope" /> webmaster@schindlerfelix.de
			</a>
		</p>
	</section>
</div>

<style lang="scss">
	div {
		word-break: break-word;
		-webkit-hyphens: auto;
		hyphens: auto;
	}

	address,
	section {
		&:not(:last-child) {
			margin-bottom: 1em;
		}
	}

	p {
		margin: 0;
	}

	a {
		&:hover {
			color: var(--accent);
			text-decoration: none;
		}
	}
</style>
