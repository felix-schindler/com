<script>
	import { page } from "$app/stores";
</script>

<div class="ac">
	<div>
		<h1>{$page.status} <small>- {$page.error.message}</small></h1>
		<p>Bitte feuer mich nicht! 🥺</p>
		<small>
			Wenn Du nichts für den Fehler kannst, melde ihn bitte
			<a href="https://github.com/felix-schindler/com/issues" rel="nofollow noreferrer">hier</a>.
		</small>
	</div>
</div>

<style lang="scss">
	.ac {
		text-align: center;

		p {
			margin-bottom: 0;
		}

		a {
			text-decoration: underline;

			&:hover {
				color: var(--accent);
			}
		}
	}
</style>
