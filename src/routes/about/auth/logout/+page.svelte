<script lang="ts">
	import { browser } from "$app/environment";
	import { goto } from "$app/navigation";
	import { redirect } from "@sveltejs/kit";
	import { pb, authStore } from "$lib/core/stores";

	try {
		pb.authStore.clear();
		authStore.set(null);
	} catch {}

	if ($authStore == null) {
		const aboutPath = "/about";
		if (browser) goto(aboutPath);
		else redirect(307, aboutPath);
	}
</script>
