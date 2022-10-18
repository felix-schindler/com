<script lang="ts">
	import ChangeMail from "./ChangeMail.svelte";
	import ChangePassword from "./ChangePassword.svelte";
	import Changelog from "./Changelog.svelte";
</script>

<div class="ac">
	<div>
		<div>
			<ChangeMail />
			<ChangePassword />
		</div>
		<Changelog />
	</div>
</div>

<style>
	.ac > div {
		text-align: center;
	}
</style>
