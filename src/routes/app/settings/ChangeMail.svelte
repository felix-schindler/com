<script lang="ts">
	import { authStore } from "$lib/core/stores";

	let mail: string | undefined = $authStore?.email;
	let dialog: HTMLDialogElement;
</script>

<button type="button" on:click={() => dialog.showModal()}>
	<i class="bi bi-envelope" /> E-Mail ändern
</button>
<dialog bind:this={dialog}>
	<button class="close" type="button" on:click={() => dialog.close()}>❌</button>

	<form on:submit|preventDefault={() => {}}>
		<input type="email" bind:value={mail} placeholder="Neue e-Mail" disabled />
		<button type="submit" disabled>E-Mail ändern</button>
	</form>
</dialog>

<style lang="scss">
	dialog {
		width: 100%;
		border-radius: var(--radius);

		@media (min-width: 1024px) {
			min-width: 525px;
			max-width: 25%;
		}

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
	}
</style>
