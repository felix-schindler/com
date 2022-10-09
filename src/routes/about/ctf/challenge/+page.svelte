<script lang="ts">
	function login() {
		fetch("./challenge/api")
			.then((res) => res.json())
			.then((res) => console.log(res));
	}
</script>

<h1>Login</h1>

<form action="/about/ctf/challenge" method="POST" on:submit|preventDefault={login}>
	<input type="text" placeholder="Username" />
	<input type="email" placeholder="Password" />
	<input type="submit" class="inverse" />
</form>
