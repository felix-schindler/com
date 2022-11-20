<script lang="ts">
	import Spinner from "$lib/components/Spinner.svelte";

	let email = "",
		message = "",
		sending = false,
		success: undefined | boolean;

	async function submit(): Promise<void> {
		sending = true;

		if (email == "" || message == "") {
			sending = false;
			success = false;
		} else {
			try {
				const { pb } = await import("$lib/core/stores");
				await pb.collection("contact").create({ email, message });
				success = true;
				email = "";
				message = "";
			} catch {
				success = false;
			} finally {
				sending = false;
			}
		}
	}
</script>

<svelte:head>
	<title>Kontakt &middot; YourCompany</title>
</svelte:head>

<div class="ac">
	<form class="card" on:submit|preventDefault={submit}>
		<h1>Kontakt</h1>
		<input type="email" bind:value={email} placeholder="Deine E-Mail" />
		<textarea bind:value={message} rows="7" placeholder="Beschreibung" />
		<div class="msg-btns">
			<span class:green={success} class:red={!success}>
				{#if success !== undefined && !sending}
					{success ? "Nachricht gesendet" : "Nachricht konnte nicht gesendet werden"}
				{/if}
			</span>
			<span>
				<button type="reset">Clear</button>
				<button type="submit" disabled={sending || email == "" || message == ""}>
					{#if sending}
						<Spinner />
					{/if}
					Senden
				</button>
			</span>
		</div>
		<hr />
		<div class="links">
			<a
				href="https://api.whatsapp.com/send?phone=+4915739061903&text=Hi!"
				target="_blank"
				rel="nofollow noreferrer"
				class="clickable whatsapp">
				<i class="bi bi-whatsapp" />
			</a>
			<a
				href="https://instagram.com/YourCompany"
				target="_blank"
				rel="nofollow noreferrer"
				class="clickable instagram">
				<i class="bi bi-instagram" />
			</a>
			<a
				href="https://t.me/YourCompany"
				target="_blank"
				rel="nofollow noreferrer"
				class="clickable telegram">
				<i class="bi bi-telegram" />
			</a>
			<a
				href="https://twitter.com/YourCompany"
				target="_blank"
				rel="nofollow noreferrer"
				class="clickable twitter">
				<i class="bi bi-twitter" />
			</a>
		</div>
	</form>
</div>

<style lang="scss">
	form.card {
		padding-bottom: 0.5em;

		h1 {
			margin-bottom: 0.4em;
		}

		span.red {
			color: red;
		}

		span.green {
			color: rgb(var(--green-rgb));
		}

		.links {
			display: flex;
			justify-content: center;
			gap: 0.25em;
			flex-wrap: wrap;

			margin-block-start: 0.5em;

			.clickable {
				padding: 0.4em;

				transition: all 200ms;

				&:hover {
					&.whatsapp {
						color: #25d366;
					}

					&.instagram {
						color: white;
						background-image: radial-gradient(
								circle farthest-corner at 32% 106%,
								rgb(255, 225, 125) 0%,
								rgb(255, 205, 105) 10%,
								rgb(250, 145, 55) 28%,
								rgb(235, 65, 65) 42%,
								transparent 82%
							),
							linear-gradient(135deg, rgb(35, 75, 215) 12%, rgb(195, 60, 190) 58%);
						transition: none;
					}

					&.telegram {
						color: #0088cc;
					}

					&.twitter {
						color: #1da1f2;
					}
				}
			}
		}
	}

	@media (min-width: 1024px) {
		form.card {
			min-width: 525px;
			max-width: 50%;
		}
	}
</style>
