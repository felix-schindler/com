<script lang="ts">
	let dialog: HTMLDialogElement;

	let version = "0.2.6-beta";

	function close() {
		dialog.close();
	}
</script>

<button class="inverse" type="button" on:click={() => dialog.showModal()}>
	<i class="bi bi-list-nested" /> Changelog öffnen
</button>
<dialog bind:this={dialog}>
	<header>
		<button class="close" type="button" on:click={close}>❌</button>
		<div class="v">
			<h1>Changelog</h1>
			<p>{version}</p>
		</div>
	</header>

	<main>
		<h2>Public Site</h2>
		<ol>
			<li>
				<code>/about</code> Changes to the Homepage to make everything a bit easier on the eyes and mind.
			</li>
		</ol>

		<h2>Customer Panel</h2>
		<ol>
			<li>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis quia nulla vitae
				ducimus voluptate at obcaecati doloribus facilis aliquid molestiae.
			</li>
		</ol>

		<h2>Admin Panel</h2>
		<ol>
			<li>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis quia nulla vitae
				ducimus voluptate at obcaecati doloribus facilis aliquid molestiae.
			</li>
		</ol>
	</main>

	<footer>
		<button class="continue" type="button" on:click={close}>&rarr; Continue</button>
	</footer>
</dialog>

<style lang="scss">
	dialog {
		width: 100%;
		border-radius: var(--radius);

		@media (min-width: 1024px) {
			min-width: 525px;
			max-width: 25%;
		}

		header {
			button.close {
				position: absolute;
				top: 0.5em;
				right: 0.5em;

				border: 0;
				padding: 0.4em;
				background-color: rgba(var(--gray-rgb), 0.2);

				&:hover {
					background-color: rgba(var(--gray-rgb), 0.3);
				}

				&:active {
					background-color: rgba(var(--gray-rgb), 0.4);
				}
			}

			div.v {
				h1 {
					margin: 0;
				}

				p {
					margin: 0;
					text-transform: uppercase;
					color: var(--light-gray);
				}
			}
		}

		main {
			code {
				color: var(--accent);
				padding: 0.15em 0.3em;
				background-color: rgba(var(--gray-rgb), 0.3);
				border-radius: calc(var(--radius) * 0.5);
			}
		}

		footer {
			display: flex;
			justify-content: center;

			button {
				font-size: 1.025em;
			}
		}
	}
</style>
