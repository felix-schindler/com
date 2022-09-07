<script lang="ts">
	import { nerd } from "$lib/core/stores";

	import Tech from "./Tech.svelte";

	export let name: string;
	export let links: Link[] = [];
	export let langs: Tech[] = [];
	export let frameworks: Tech[] = [];
	export let data: Tech[] = [];
	export let runtimes: Tech[] = [];

	type Tech = {
		name: string;
	};

	type Link = {
		href: string;
		name: string;
		icon: string;
	};

	let imgFile = name.split(" ")[0].toLowerCase();
</script>

<div class="card">
	<img src="/img/person/{imgFile}.png" alt={imgFile} />
	<h1>{name}</h1>
	<p>Software Engineer</p>
	{#if links.length > 0}
		<div class="links">
			{#each links as l}
				<a href={l.href} target="_blank" rel="nofollow noreferrer">
					<i class="bi bi-{l.icon}" />
					{l.name}
				</a>
			{/each}
		</div>
	{/if}
	{#if $nerd}
		<div>
			<Tech bind:tech={langs} />
			<Tech bind:tech={frameworks} />
			<Tech bind:tech={data} />
			<Tech bind:tech={runtimes} />
		</div>
	{/if}
</div>

<style lang="scss">
	div.card {
		text-align: center;

		& > h1 {
			margin-block-end: 0.2em;
		}

		& > p {
			color: var(--light-gray);
			margin-block-start: 0.2em;
			margin-block-end: 1.5em;
		}

		img {
			width: 10em;
			height: auto;
			border-radius: calc(var(--radius) * 10);
		}

		.links {
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
			gap: 0.5em;

			margin-block-end: 1em;

			a {
				user-select: none;
				-webkit-user-select: none;

				padding: 0.2em 0.4em;
				border: 1px solid rgba(var(--gray-rgb), 0.8);
				border-radius: var(--radius);

				transition: 150ms background-color;

				&:hover {
					text-decoration: none;
					background-color: rgba(var(--gray-rgb), 0.3);
				}

				&:active {
					background-color: rgba(var(--gray-rgb), 0.5);
				}
			}
		}
	}
</style>
