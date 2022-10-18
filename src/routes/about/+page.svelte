<script>
	const msgs = [
		"Sie wollen Unternehmensprozesse optimieren?",
		"Sie wollen ihre eigene Webseite?",
		"Sie wollen mehr Digitalisierung?",
		"Sie wollen eine Beratung?",
	];

	let countMsg = 0;
	let msg = msgs[countMsg];

	setInterval(() => {
		if (countMsg >= msgs.length) countMsg = 0;
		else {
			msg = msgs[countMsg];
			countMsg++;
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
</div>
<div class="grid">
	<div class="card">
		<h1>So können wir Ihnen helfen</h1>
		<div>
			<h2>Beratung</h2>
			<p>Sie wissen noch nicht was sie wollen? Unsere IT-Experten können helfen!</p>
			<p>
				Sie können jederzeit Kontakt mit uns über unsere <a href="/about/contact">Kontakt Seite</a> aufnehmen.
			</p>
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
			<p>
				Sie wissen was sie wollen, wir setzen es um! Wenn wir etwas entwickeln, dann mit Ihrem Ziel
				im Kopf.
			</p>
			<p>
				Klicken Sie <a href="/about/auth/register" title="Registrierung">hier</a>, um ein paar
				Fragen zu beantworten um eine Idee über Preis und Dauer zu bekommen.
			</p>
		</div>
		<div>
			<h2>Anbindung</h2>
			<p>
				Sie haben bereits ein bestehendes System? Wir können helfen in dem wir es an eine neue
				Oberfläche anbinden.
			</p>
		</div>
	</div>
	<div class="card">
		<h1>Vorteile des Webs</h1>
		<div>
			<h2>Immer und von überall erreichbar</h2>
			<p>
				Egal ob unterwegs, beim Kunden oder auf dem Klo. Unsere Services sind immer erreichtbar,
				selbst offline!
			</p>
		</div>
		<div>
			<h2>Kein Update-Albtraum</h2>
			<p>Updates passieren einfach im Hintergrund.</p>
			<p>
				Keine Update-Buttons, keine veraltete Software mit Sicherheitslücken, keine Unterbrechungen
				beim arbeiten.
			</p>
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
			<div>
				<h2>Erfahrung</h2>
				<p>
					Wir nutzen das, was uns Betriebssystem und Browser hergeben. Wir steuern native APIs an,
					die dem User bereits vertraut vorkommen und sparen zusätzlich Zeit.
				</p>
				<p>
					Durch jahrelange Erfahrung wissen wir, was wir tun.
					<em>(pictures of notch, cookie banner, install prompt android, light house)</em>
					<img
						src="/img/why-us/lighthouse.gif"
						alt="Perfect Google Lighthouse (Website Speedtest) Result"
						loading="lazy" />
				</p>
			</div>
			<div>
				<h2>Weil wir's können.</h2>
				<h3>Frontend und Backend</h3>
				<p>Unsere Frontends sind Benutzer-Zentriert, einfach und schnell.</p>
				<p>
					Unser Backends sind skalierbar und halten sich an allgemeine Web-Standards, einfach
					anzupassen und zu erweitern.
				</p>
				<h3>Server oder Serverless</h3>
				<p>
					Sie wollen ihre Daten nicht in der Cloud, sondern lieber hier auf dem Boden? Wir kümmern
					uns um Server und, dass alles läuft.
				</p>
				<p>
					Sie erwarten eine Menge Benutzer und wollen schon jetzt in die Zukunft investieren? Wir
					sind vertraut mit Cloud-Lösungen und können diese Problemlos ansteuern.
				</p>
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

		div.card {
			a {
				text-decoration: underline;

				&:hover {
					color: var(--accent);
				}
			}

			img {
				max-width: 100%;
				height: auto;
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
	}
</style>
