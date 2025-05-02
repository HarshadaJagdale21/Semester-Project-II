<?php
include 'db.php';

$data = json_decode(file_get_contents("php://input"), true);
$email = $data['email'];
$password = $data['password'];

// Update user's password
$conn->query("UPDATE users SET password='$password' WHERE email='$email'");

echo json_encode(["status" => "success"]);
?>
