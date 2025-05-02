<?php
include 'db.php';

$data = json_decode(file_get_contents("php://input"), true);
$email = $data['email'];
$site = $data['site'];
$username = $data['username'];
$password = $data['password'];

$user = $conn->query("SELECT * FROM users WHERE email='$email'")->fetch_assoc();
$user_id = $user['id'];

$conn->query("INSERT INTO passwords (user_id, site, username, password)
              VALUES ('$user_id', '$site', '$username', '$password')");

echo json_encode(["status" => "success"]);
?>
