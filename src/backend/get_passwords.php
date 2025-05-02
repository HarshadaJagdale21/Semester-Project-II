<?php
include 'db.php';

$data = json_decode(file_get_contents("php://input"), true);
$email = $data['email'];

$user = $conn->query("SELECT * FROM users WHERE email='$email'")->fetch_assoc();
$user_id = $user['id'];

$result = $conn->query("SELECT site, username, password FROM passwords WHERE user_id='$user_id'");
$passwords = [];

while ($row = $result->fetch_assoc()) {
    $passwords[] = $row;
}

echo json_encode($passwords);
?>
