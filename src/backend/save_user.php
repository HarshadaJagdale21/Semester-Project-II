<?php
include 'db.php';

$data = json_decode(file_get_contents("php://input"), true);
$email = $data['email'];

$result = $conn->query("SELECT * FROM users WHERE email='$email'");
if ($result->num_rows === 0) {
    $conn->query("INSERT INTO users (email) VALUES ('$email')");
    echo json_encode(["status" => "new"]);
} else {
    echo json_encode(["status" => "existing"]);
}
?>
