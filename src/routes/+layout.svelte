<script>
	import "../style/main.css";
	import { pb, authStore } from "$lib/core/stores";

	// Load authStore from PocketBase persistance
	$authStore = pb.authStore.model;
</script>

<slot />
