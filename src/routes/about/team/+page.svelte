<script>
	import PersonCard from "./PersonCard.svelte";
</script>

<svelte:head>
	<title>Unser Team &middot; YourCompany</title>
</svelte:head>

<h1>Unser Team</h1>
<div class="grid">
	<PersonCard
		name={"Felix Schindler"}
		links={[
			{ href: "https://schindlerfelix.de", name: "Persönliche Webseite", icon: "browser-safari" },
			{ href: "https://github.com/felix-schindler", name: "GitHub", icon: "github" },
			{ href: "https://gitlab.com/felix-schindler", name: "GitLab", icon: "gitlab" },
		]} />
	<PersonCard
		name={"Florian Schindler"}
		links={[
			{ href: "https://schindlerflorian.de", name: "Persönliche Webseite", icon: "browser-chrome" },
			{ href: "https://github.com/felix-schindler", name: "GitHub", icon: "github" },
		]} />
</div>

<style>
	.grid {
		grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
	}
</style>
