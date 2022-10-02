<script lang="ts">
	import { browser } from "$app/environment";
	import { goto } from "$app/navigation";
	import { authStore, pb } from "$lib/core/stores";
	import { redirect } from "@sveltejs/kit";

	try {
		pb.authStore.clear();
		authStore.set({ model: null });
	} catch {}

	if ($authStore.model === null) {
		const aboutPath = "/about";
		if (browser) goto(aboutPath);
		else redirect(307, aboutPath);
	}
</script>
