<?php
require_once '../../../includes/db.php';
require_once '../../../includes/function.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

  $username = mysqli_real_escape_string($conn, $_POST['username']);
  $email = mysqli_real_escape_string($conn, $_POST['email']);
  $password = mysqli_real_escape_string($conn, $_POST['password']);
  
  $password = hashPassword($password);

  $sql = "SELECT * FROM users WHERE email = '$email'";
  $result = mysqli_query($conn, $sql);

  if (mysqli_num_rows($result) > 0) {
    $response = [
      'success' => false,
      'message' => 'Email address already exists!'
    ];
  }

  $sql = "INSERT INTO users (username, email, password) VALUES ('$username', '$email', '$password')";
  
  if (mysqli_query($conn, $sql)) {
    $response = [
      'success' => true,
      'message' => 'User registered successfully'
    ];
  } else {
    $response = [
      'success' => false,
      'message' => 'Error: ' . mysqli_error($conn)
    ];
  }
  
  echo json_encode($response);
  mysqli_close($conn);
}