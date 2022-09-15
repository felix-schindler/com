<script lang="ts">
	import Spinner from "$lib/components/Spinner.svelte";
	import { pb } from "$lib/core/stores";
</script>

<div id="main">
	<h1>CTF</h1>
	<p>
		Wenn Du diesen Test bestanden hast, kannst du dich mit deinem individuellen Code bei uns
		bewerben. Natürlich kannst du die Challenge auch nur zum Spaß machen! :)
	</p>

	{#await pb.records.getFullList("ctf_challenges")}
		<p><Spinner /> Loading...</p>
	{:then ctfs}
		<div class="grid">
			{#each ctfs as ctf}
				<div class="card">
					<header>
						<h2>Current challenge: {ctf.name}</h2>
						<button
							type="button"
							on:click={() => {
								if (confirm("Start this challenge?")) {
									try {
										const uid = crypto.randomUUID();
										localStorage.setItem("ctf_uuid", uid);
										pb.records.create("ctf_stats", {
											uuid: uid,
											challenge: ctf.id,
											start: new Date().toISOString(),
										});
										window.open(ctf.link + "?u=uid", "_blank");
									} catch {
										alert(
											"Failed to start challenge, make sure your browser is up-to-date and your localStorage is enabled."
										);
									}
								}
							}}>
							Start Challenge ↗️
						</button>
					</header>
					<main>
						{#if ctf.pic}
							<img
								src="https://pb.schindlerfelix.de/api/files/ctf_challenges/{ctf.id}/{ctf.pic}"
								alt={ctf.name} />
						{/if}
						{#if ctf.desc}
							<p>{ctf.desc}</p>
						{/if}
					</main>
				</div>
			{/each}
		</div>
	{/await}
</div>

<style lang="scss">
	div#main {
		--radius: 0px;

		font-family: var(--mono);

		div.card {
			padding-top: 0;

			header {
				display: flex;
				align-items: center;
				justify-content: space-between;
				flex-wrap: wrap;

				@media (max-width: 1024px) {
					flex-direction: column;
					margin-bottom: 1em;

					h2 {
						margin-bottom: 0.25em;
					}
				}

				button {
					font-family: var(--mono); // Overwrite "default" style
					transition: 200ms color, 200ms background-color, 200ms box-shadow;

					&:hover {
						box-shadow: 5px 5px;
					}
				}
			}

			main {
				img {
					float: left;
					max-width: 100%;
					height: auto;
				}

				p {
					float: left;
				}

				@media (min-width: 1024px) {
					img {
						margin-right: 1em;
					}
				}
			}
		}
	}
</style>
