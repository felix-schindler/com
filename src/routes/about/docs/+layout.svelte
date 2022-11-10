<script>
	// Import GitHub markdown style
	import "./markdown.css";
	import "./prism-nord.css";
</script>

<article class="markdown-body">
	<slot />
</article>

<style lang="scss">
	.markdown-body {
		border-radius: var(--radius);

		box-sizing: border-box;
		min-width: 200px;
		max-width: 980px;
		margin: 0 auto;
		padding: 45px;

		@media (max-width: 767px) {
			padding: 15px;
		}
	}
</style>
