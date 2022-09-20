<!DOCTYPE html>
<html lang="en">

<head>
	<!--
         _.-^~~^^^`~-,_,,~''''''```~,''``~'``~,
 ______,'  -o  :.  _    .          ;     ,'`,  `.
(      -\.._,.;;'._ ,(   }        _`_-_,,    `, `,
 ``~~~~~~'   ((/'((((____/~~~~~~'(,(,___>      `~'
joe schmuck - I'm just a normal platypus, not perry.
	-->
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Login</title>
	<script defer>
		const form = document.querySelector("form");

		form.onsubmit = async (e) => {
			e.preventDefault();

			const res = await fetch("/api/user/", {
				method: "POST",
				headers: {
					"Accept": "application/json",
					"Content-Type": "application/x-www-form-urlencoded"
				},
				body: new FormData(form)
			})

			console.log(await res.text())
		}
	</script>
</head>

<body>
	<form action="/" method="POST">
		<input type="email" name="mail" placeholder="E-Mail">
		<input type="password" name="pass" placeholder="Password">
		<input type="submit">
	</form>
</body>

</html>
