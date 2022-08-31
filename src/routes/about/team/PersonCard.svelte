<script lang="ts">
	export let name: string;
	export let links: Link[] = [];

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
</div>

<style lang="scss">
	div.card {
		text-align: center;

		img {
			width: 10em;
			height: auto;
			border-radius: calc(var(--radius) * 10);
		}

		.links,
		.langs {
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
			gap: 0.5em;

			&:not(:last-child) {
				margin-bottom: 1em;
			}

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
