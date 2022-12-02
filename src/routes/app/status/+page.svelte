<script lang="ts">
	import Spinner from "$lib/components/Spinner.svelte";
	import { pb } from "$lib/core/stores";
	import ping from "$lib/core/ping";

	const ipv46_regex =
		/(?:^(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}$)|(?:^(?:(?:[a-fA-F\d]{1,4}:){7}(?:[a-fA-F\d]{1,4}|:)|(?:[a-fA-F\d]{1,4}:){6}(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|:[a-fA-F\d]{1,4}|:)|(?:[a-fA-F\d]{1,4}:){5}(?::(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-fA-F\d]{1,4}){1,2}|:)|(?:[a-fA-F\d]{1,4}:){4}(?:(?::[a-fA-F\d]{1,4}){0,1}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-fA-F\d]{1,4}){1,3}|:)|(?:[a-fA-F\d]{1,4}:){3}(?:(?::[a-fA-F\d]{1,4}){0,2}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-fA-F\d]{1,4}){1,4}|:)|(?:[a-fA-F\d]{1,4}:){2}(?:(?::[a-fA-F\d]{1,4}){0,3}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-fA-F\d]{1,4}){1,5}|:)|(?:[a-fA-F\d]{1,4}:){1}(?:(?::[a-fA-F\d]{1,4}){0,4}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-fA-F\d]{1,4}){1,6}|:)|(?::(?:(?::[a-fA-F\d]{1,4}){0,5}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-fA-F\d]{1,4}){1,7}|:)))(?:%[0-9a-zA-Z]{1,})?$)/gm;
</script>

<h1>System Status</h1>

{#await pb.collection("services").getFullList(undefined, { filter: "" })}
	<p><Spinner /> Lädt...</p>
{:then services}
	{#if services && services.length > 0}
		<div class="grid">
			{#each services as service}
				<div class="card">
					<h2>{service.name}</h2>
					<div class="url">
						<p>
							{#if service.url.startsWith("https")}
								<i class="bi bi-link-45deg" />
							{:else if ipv46_regex.test(service.url.split("://")[1])}
								<i class="bi bi-hdd-network" />
							{/if}
							{service.url.split("://")[1]}
						</p>
						<p>
							{#await ping(service.url)}
								<Spinner />
							{:then ms}
								{#if ms == 5000}
									<i class="bi bi-circle-fill red" />
								{:else}
									<i class="bi bi-circle-fill green" />
								{/if}
								{ms} ms
							{/await}
						</p>
					</div>
				</div>
			{/each}
		</div>
	{:else}
		<p>Sie haben im Moment keine Services gebucht</p>
	{/if}
{/await}

<style lang="scss">
	.bi.bi-circle-fill {
		animation: blink 2s infinite;
	}

	@keyframes blink {
		80% {
			opacity: 0;
		}
	}

	.bi.bi-circle-fill.green {
		color: green;
	}

	.bi.bi-circle-fill.red {
		color: red;
	}

	div.url {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;

		p {
			margin-block: 0;
		}
	}
</style>
