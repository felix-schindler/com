<?php

require_once "../../Query.php";

$method = $_SERVER["REQUEST_METHOD"];

header('Content-Type: application/json');

if ($method == "GET") {
	$q = new Query('SELECT * FROM User;');
	echo json_encode($q->fetchAll());
} else if ($method == "POST") {
	print_r($_POST);

	if (isset($_POST["mail"]) && isset($_POST["pass"])) {
		$mail = $_POST["mail"];
		$pass = $_POST["pass"];

		$q = new Query('SELECT pass FROM User WHERE mail=:mail', [":mail" => $mail]);
		echo "Query Count: " . $q->count();
		echo "Pass Verify: " . password_verify($pass, $q->fetch()["pass"]);
	}
}
