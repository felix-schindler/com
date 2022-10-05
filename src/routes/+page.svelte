<script>
	import { browser } from "$app/environment";
	import { goto } from "$app/navigation";
	import { redirect } from "@sveltejs/kit";

	import { authStore } from "$lib/core/stores";

	if ($authStore != null) {
		const redir = "/app";
		if (browser) goto(redir);
		else redirect(307, redir);
	} else {
		const redir = "/about";
		if (browser) goto(redir);
		else redirect(307, redir);
	}
</script>
