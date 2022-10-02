<script lang="ts">
	type Tech = {
		name: string;
	};

	export let tech: Tech[];
</script>

{#if tech.length > 0}
	<div class="tech">
		{#each tech as t}
			<span>
				<img
					src="/img/tech/{encodeURIComponent(t.name.toLowerCase())}.svg"
					alt="{t.name} icon"
					loading="lazy" />
				{t.name}</span>
		{/each}
	</div>
{/if}

<style lang="scss">
	.tech {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 0.5em;

		margin-block-end: 0.5em;

		span {
			padding: 0.2em 0.4em;
			border: 1px solid rgba(var(--gray-rgb), 0.8);
			border-radius: var(--radius);

			img {
				height: 18px;
				width: 18px;
				vertical-align: text-bottom;
			}
		}
	}
</style>
