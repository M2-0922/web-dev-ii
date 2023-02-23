<?php
require_once '../../../includes/db.php';
// require_once is used to include the specified file only once
require_once '../../../includes/function.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  // $_SERVER['REQUEST_METHOD'] is a superglobal variable that returns the request method used to access the page
  // $_SERVER['REQUEST_METHOD'] === 'POST' is a conditional statement that checks if the request method is POST
  $email = mysqli_real_escape_string($conn, $_POST['email']);
  // mysqli_real_escape_string() is a function that escapes special characters in a string for use in an SQL statement
  // as a parameter, it takes the connection to the database and the string to be escaped
  // $_POST['email'] is a superglobal variable that returns the value of the email field in the form
  $password = mysqli_real_escape_string($conn, $_POST['password']);
  
  $sql = "SELECT * FROM users WHERE email = '$email'";
  $result = mysqli_query($conn, $sql);
  // mysqli_query() is a function that performs a query against the database
  
  if (mysqli_num_rows($result) > 0) {
    // mysqli_num_rows() is a function that returns the number of rows in a result set
    $user = mysqli_fetch_assoc($result);
    // mysqli_fetch_assoc() is a function that fetches a result row as an associative array
    
    if (password_verify($password, $user['password'])) {
      
      $response = [
        'success' => true,
        'message' => 'Login successful',
        'user' => $user
      ];
      
      session_start();
      $_SESSION['username'] = $username;

      // Redirect the user to the dashboard page
      // header('Location: ../../../pages/dashboard.php');
      // exit();

    } else {
      $response = [
        'success' => false,
        'message' => 'Incorrect password'
      ];
    }
  } else {
    $response = [
      'success' => false,
      'message' => 'User not found'
    ];
  }
  
  // redirect user to dashboard and display dashboard on screen
  // header('Location: ../../../pages/dashboard.php');

  echo json_encode($response);
  mysqli_close($conn);
}