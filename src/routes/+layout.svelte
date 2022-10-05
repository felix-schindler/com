<script>
	import "../style/main.css";
	import { pb, authStore } from "$lib/core/stores";

	// Load authStore from PocketBase persistance
	if (pb.authStore.isValid) $authStore = pb.authStore.model;
	else $authStore = null;
</script>

<slot />
