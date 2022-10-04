<script>
	import Clickable from "$lib/components/Clickable.svelte";

	const msgs = [
		"Sie wollen Unternehmensprozesse optimieren?",
		"Sie wollen ihre eigene Webseite?",
		"Sie wollen mehr digitalisierung?",
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
				Oberfläche anbinden oder generalüberholen.
			</p>
		</div>
	</div>
	<div class="card">
		<h1>Vorteile des Webs</h1>
		<div>
			<h2>Immer und von überall erreichbar</h2>
			<p>
				Egal ob unterwegs, beim Kunden oder auf dem Klo, unsere Services sind immer erreichtbar.
				Selbst offline.
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
			<details>
				<summary><h2>Auge für's Detail</h2></summary>
				<div class="card">
					<h3>Angenehm für die Augen</h3>
					<p>
						Alle unsere Projekte kommen standardmäßig im hellen und dunklen Modus. Dies ist angenehm
						für die Augen, kann aber zum Beispiel auch Akku sparen.
					</p>
				</div>
				<div class="card">
					<h3>Erfahrung</h3>
					<p>
						Durch jahrelange Erfahrung wissen wir, was wir tun.
						<em>(pictures of notch, cookie banner, install prompt android, light house)</em>
						<img
							src="/img/why-us/lighthouse.gif"
							alt="Perfect Google Lighthouse (Website Speedtest) Result"
							loading="lazy" />
					</p>
				</div>
				<div class="card">
					<h3>Durckbar - Printable</h3>
					<p>
						Wir achten generell drauf, dass unsere Webseiten ausgedruckt werden können, ohne viel
						Tinte zu verschwenden.
					</p>
				</div>
				<div class="card">
					<h3>i18n</h3>
					<div>
						Das Datum ist immer im richtigen Format. Die Entfernung und Temparatur ist in einer
						Einheit, die man sich vorstellen kann. Große Zahlen sind richtig getrennt und beim
						ersten Blick gelesen.
					</div>
					<div class="row">
						<div class="card" lang="de">
							<h4>Deutsch</h4>
							<p>{Number(12345.67).toLocaleString("de-DE")} €</p>
							<p>{Number(37).toLocaleString("de-DE")} °C</p>
							<p>{Number(10).toLocaleString("de-DE")} KM</p>
							<p>{new Date().toLocaleString("de-DE", { hourCycle: "h23" })}</p>
							<p>
								{new Date().toLocaleString("de-DE", {
									hourCycle: "h23",
									dateStyle: "medium",
									timeStyle: "short",
								})}
							</p>
							<ol>
								<li>Erstens</li>
								<li>Zweitens</li>
							</ol>
						</div>
						<div class="card" lang="en">
							<h4>English</h4>
							<p>{Number(12345.67).toLocaleString("en-US")} $</p>
							<p>{Number(98.6).toLocaleString("en-US")} °F</p>
							<p>{Number(6.21).toLocaleString("en-US")} miles</p>
							<p>{new Date().toLocaleString("en-US", { hourCycle: "h11" })}</p>
							<p>
								{new Date().toLocaleString("en-US", {
									hourCycle: "h11",
									dateStyle: "medium",
									timeStyle: "short",
								})}
							</p>
							<ol>
								<li>First</li>
								<li>Second</li>
							</ol>
						</div>
						<div class="card" lang="zh-Hans">
							<h4>中文</h4>
							<p>{Number(12345.67).toLocaleString("zh-Hans")} ¥</p>
							<p>{Number(37).toLocaleString("zh-Hans")} 摄氏度</p>
							<p>{Number(10).toLocaleString("zh-Hans")} 公里</p>
							<p>
								{new Date().toLocaleString("zh-Hans", {
									calendar: "chinese",
									hourCycle: "h11",
								})}
							</p>
							<p>
								{new Date().toLocaleString("zh-Hans", {
									calendar: "chinese",
									hourCycle: "h11",
									dateStyle: "medium",
									timeStyle: "short",
								})}
							</p>
							<ol>
								<li>第一</li>
								<li>第二</li>
							</ol>
						</div>
					</div>
					<p>
						Sie haben Mitarbeiter aus anderen Ländern? Kein Problem! Unsere Seiten können in allen
						möglichen Sprachen kommen. Außerdem stimmen bei uns Dinge wie Datumsformat immer.
					</p>
				</div>
			</details>
			<details>
				<summary><h2>Weil wir's können</h2></summary>
				<div class="card">
					<h3>Frontend und Backend</h3>
					<p>Unsere Frontends sind Benutzer-Zentriert, einfach und schnell.</p>
					<p>
						Unser Backends sind skalierbar und halten sich an allgemeine Web-Standards, einfach
						anzupassen und zu erweitern.
					</p>
				</div>
				<div class="card">
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
			</details>
			<details>
				<summary><h2>Keine unnötige Arbeit</h2></summary>
				<div class="card">
					<h3>Wir erfinden das Rad nicht neu</h3>
					<p>
						Wir nutzen das, was uns Betriebssystem und Browser hergeben. Dadurch steuern wir native
						APIs an, die dem User bereits vertraut vorkommen.
					</p>
					<p>
						Beispiele: Dunkler Modus, <Clickable
							onclick={() =>
								navigator.share({
									title: 'Beispiel Dialog "Teilen"',
									text: "Hier steht ein Text",
								})}>Share Dialog</Clickable>
					</p>
				</div>
				<div class="card">
					<h3>Barrierefreiheit</h3>
					<p>
						Unsere Webseiten lassen sich auch benutzen, wenn man nur eine Tastatur zur Verfügung
						hat. Oder einen Screenreader.
					</p>
				</div>
			</details>
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
			<h2>Gesetzeskonformität</h2>
			<p>Wir haben aktuelle Gesetze im Blick, und setzen sie direkt um.</p>
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

			details {
				summary {
					cursor: pointer;

					h2 {
						display: inline-block;
						margin-block: 0.2em;
					}
				}

				div.card:not(:last-child) {
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

		div.row {
			margin-block: 1em;

			p {
				margin: 0;
				margin-block-end: 0.25em;
			}
		}
	}
</style>
