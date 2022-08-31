<script>
	import Copyable from "$lib/components/Copyable.svelte";

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
		<div>
			<h2>Beratung</h2>
			<p>Sie wissen noch nicht was sie wollen? Unsere IT-Experten können helfen!</p>
		</div>
		<div>
			<h2>Betreuung</h2>
			<p>
				Wir lassen Sie nie im Regeln stehen. Egal was ist und wann es passiert, wir stehen hinter
				Ihnen und unterstützen Sie.
			</p>
		</div>
		<div>
			<h2>Entwicklung</h2>
			<p>Wenn wir etwas entwickeln, dann mit dem Ziel des Kundens im Kopf.</p>
		</div>
		<div>
			<h2>Anbindung</h2>
			<p>An ihr bestehendes System wie SAP, Sage oder ähnliches</p>
		</div>
	</div>
	<div class="card">
		<h1>Vorteile des Webs</h1>
		<div>
			<h2>Immer und von überall erreichbar</h2>
			<p>
				Egal ob unterwegs, beim Kunden, auf dem Klo: Unsere Services sind immer erreichtbar. Selbst
				offline.
			</p>
		</div>
		<div>
			<h2>Kein Update-Albtraum</h2>
			<p>Updates passieren einfach, im Hintergrund. Ohne Sie oder Ihre Mitarbeiter zu stören.</p>
			<p>Keine Update-Buttons, keine veraltete Software mit Sicherheitslücken.</p>
		</div>
		<div>
			<h2>Schnelligkeit</h2>
			<p>
				Egal, ob auf einem alten Motorola, einem Rapberry Pi oder dem neuesten Mac, es funktioniert
				einfach.
			</p>
		</div>
	</div>
	<div class="card">
		<h1>Warum wir?</h1>
		<div>
			<details>
				<summary role="heading">Auge für's Detail</summary>
				<div class="card">
					<h3>Durckbar - Printable</h3>
					<p>
						Wir achten generell drauf, dass unsere Webseiten ausgedruckt werden können, ohne viel
						Tinte zu verschwenden.
					</p>
				</div>
				<div class="card">
					<h3>i18n</h3>
					<p>
						Man arbeitet am schnellsten, wenn es passt. Egal, ob Datumformat, Anführungszeichen.
					</p>
				</div>
				<div class="card">
					<h3>Keine Unnötige Arbeit</h3>
					<p>
						Wir nutzen das, was uns bereits gegeben ist. So erfinden wir zum Beispiel den Dunklen
						Modus nicht neu, sondern nutzen das was uns der Hersteller / Browser gibt und arbeiten
						damit.
					</p>
				</div>
			</details>
		</div>
		<div>
			<h2>Angenehm für die Augen</h2>
			<p>Alle unsere Projekte kommen standardmäßig im dunklen und hellen Modus.</p>
		</div>
		<div>
			<h2>Mobile First</h2>
			<p>
				Alle unsere Projekte kommen standardmäßig in allen Formen, damit sie immer alles im Blick
				haben können.
			</p>
		</div>
		<div>
			<h2>Best practices</h2>
			<p>Programmier-Paradigmen die bei uns Anwendung finden: KISS, Never repeat yourself</p>
		</div>
		<div>
			<h2>Best practices</h2>
			<p>Programmier-Paradigmen die bei uns Anwendung finden: KISS, Never repeat yourself</p>
		</div>
		<div>
			<h2>Das Auge liegt im Detail</h2>
			<em>(pictures of notch, cookie banner, install prompt android, light house)</em>
		</div>
		<div>
			<h2>Sie haben nichts zu befürchten</h2>
			<p>Wir kümmern uns um Gesetzeskonformität</p>
		</div>
	</div>
	<div class="card">
		<h1>Bisherige Projekte</h1>
	</div>
	<div class="card">
		<h1>Weil wir's können.</h1>
		<div class="half">
			<div>
				<h2>Serverless (Cloud)</h2>
			</div>
			<div>
				<h2>Server</h2>
			</div>
		</div>
		<div class="half">
			<div>
				<h2>Frontend</h2>
				<p>
					Use you're cursor, <Copyable value={"you can copy this."}>make a copy.</Copyable>
				</p>
			</div>
			<div>
				<h2>Backend</h2>
			</div>
		</div>
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
			font-size: 12.5vh;

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
	}

	.grid {
		grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));

		.card {
			details {
				summary[role="heading"] {
					cursor: pointer;

					display: block;
					font-size: 1.5em;
					margin-block-start: 0.83em;
					margin-block-end: 0.83em;
					margin-inline-start: 0px;
					margin-inline-end: 0px;
					font-weight: bold;
				}

				.card:not(:last-child) {
					margin-bottom: 0.5em;
				}
			}
		}
	}

	@media (min-width: 1024px) {
		div.intro {
			width: 80%;

			h1 {
				font-size: 22.5vh;
			}
		}

		.half {
			display: flex;
			gap: 1em;
		}
	}
</style>
