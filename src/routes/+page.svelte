<script>
	let msgs = [
		"Sie wollen Unternehmensprozesse optimieren?",
		"Sie wollen ihre eigene Webseite?",
		"Sie wollen mehr digitalisierung?",
		"Sie wollen eine Beratung?",
	];

	let count = 0;
	let msg = msgs[count];

	setInterval(() => {
		if (count >= msgs.length) count = 0;
		else {
			msg = msgs[count];
			count++;
		}
	}, 3000);
</script>

<svelte:head>
	<title>YourCompany</title>
</svelte:head>

<div class="intro">
	<h1>{"Faster.\nEasier.\nBetter."}</h1>
	<h2>{msg}</h2>
	<h3>Wir helfen!</h3>
	<!-- <p>
		Available languages:
		<button type="button">🇩🇪</button>
		<button type="button">🇬🇧</button>
		<button type="button">🇨🇳</button>
	</p> -->
</div>
<div class="grid">
	<div class="card">
		<h1>So können wir Ihnen helfen</h1>
	</div>
	<div class="card">
		<h1>Vorteile des Webs</h1>
		<ol>
			<li>Immer und von überall erreichbar</li>
			<li>Kein Update-Albtraum</li>
			<li>Schnelligkeit</li>
		</ol>
	</div>
	<div class="card">
		<h1>Warum wir?</h1>
	</div>
	<div class="card">
		<h1>Bisherige Projekte</h1>
	</div>
</div>

<style lang="scss">
	div.intro {
		width: 95%;
		margin: 0 auto;

		text-align: center;

		h1 {
			display: inline-block;
			margin: 0;

			white-space: pre-wrap;
			font-size: 25vw;

			color: transparent;
			background-image: linear-gradient((120deg, var(--accent), blue));
			background-clip: text;
			-webkit-background-clip: text;
			background-size: cover;
			background-repeat: no-repeat;
		}

		h2 {
			margin-bottom: 0.25em;
		}

		h3 {
			font-weight: 500;
			margin-top: 0;
		}

		// button {
		// 	cursor: pointer;

		// 	color: inherit;
		// 	background-color: rgba(var(--gray-rgb), 0.2);

		// 	padding: 0.4em 0.6em;
		// 	border: 0;
		// 	border-radius: var(--radius);

		// 	&:hover {
		// 		background-color: rgba(var(--gray-rgb), 0.4);
		// 	}
		// }
	}

	@media (min-width: 768px) {
		div.intro {
			width: 80%;

			h1 {
				font-size: 10vw;
			}
		}
	}
</style>
