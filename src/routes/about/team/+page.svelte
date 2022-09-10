<script>
	import { nerd } from "$lib/core/stores";
	import PersonCard from "./PersonCard.svelte";
</script>

<svelte:head>
	<title>Unser Team &middot; YourCompany</title>
</svelte:head>

<div class="title">
	<h1>Unser Team</h1>
	<label>
		<input type="checkbox" bind:checked={$nerd} />
		Nerd-Modus
	</label>
</div>
<div class="grid">
	<PersonCard
		name={"Felix Schindler"}
		links={[
			{ href: "https://schindlerfelix.de", name: "Persönliche Webseite", icon: "browser-safari" },
			{ href: "https://github.com/felix-schindler", name: "GitHub", icon: "github" },
			{ href: "https://gitlab.com/felix-schindler", name: "GitLab", icon: "gitlab" },
		]}
		langs={[
			{ name: "TypeScript" },
			{ name: "PHP" },
			{ name: "Java" },
			{ name: "C#" },
			{ name: "SQL" },
		]}
		frameworks={[{ name: "Svelte" }, { name: "React" }, { name: "Unity" }]}
		data={[
			{ name: "MySQL" },
			{ name: "SQLite" },
			{ name: "Oracle" },
			{ name: "MongoDB" },
			{ name: "Firebase" },
		]}
		runtimes={[{ name: "NodeJS" }, { name: "Deno" }]} />
	<PersonCard
		name={"Florian Schindler"}
		links={[
			{ href: "https://schindlerflorian.de", name: "Persönliche Webseite", icon: "browser-chrome" },
			{ href: "https://github.com/florianschndlr", name: "GitHub", icon: "github" },
		]}
		langs={[
			{ name: "JavaScript" },
			{ name: "Dart" },
			{ name: "Python" },
			{ name: "C" },
			{ name: "Java" },
			{ name: "SQL" },
		]}
		frameworks={[{ name: "React" }, { name: "Vue" }, { name: "Flutter" }]}
		data={[{ name: "Oracle" }, { name: "MongoDB" }, { name: "Firebase" }]}
		runtimes={[{ name: "NodeJS" }]} />
</div>

<style lang="scss">
	.title {
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-wrap: wrap;

		label {
			-webkit-user-select: none;
			user-select: none;

			display: flex;
			align-items: center;
			gap: 0.3em;

			padding: 0.2em 0.4em;
			border: 1px solid rgba(var(--gray-rgb), 0.8);
			border-radius: var(--radius);
		}
	}

	.grid {
		grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
	}
</style>
