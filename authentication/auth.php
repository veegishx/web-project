<?php

include '../includes/config/dbconnect.php';
session_start();
// If form submitted, insert values into the database.
if (isset($_POST['inputEmail'])){
  $email = stripslashes($_REQUEST['inputEmail']);
  $email = mysqli_real_escape_string($conn,$email);
  
	$password = stripslashes($_REQUEST['inputPassword']);
  $password = mysqli_real_escape_string($conn,$password);
  
  $query = "SELECT `userPassword` FROM `users` WHERE `email` = '$email'";
  $result = $conn->query($query);

  if($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    // $password being $_POST['password-sign-in']
    // $row['password'] being the hashed password saved in the database
    if (password_verify($password, $row['userPassword'])) {
      session_start();
      $_SESSION['email'] = $email;
      $_SESSION['message'] = 'swal("You are now logged in as ' . $email . '");';
      header("location: ../index.php");
    } else {
      session_start();
      $_SESSION['message'] = "<strong>Invalid login details!</strong> Try again or <a href='register.php'>create a new account</a>";
      header("location: ../login.php");
    }
  } else {
    $_SESSION['message'] = "<strong>Invalid login details!</strong> Try again or <a href='register.php'>create a new account</a>";
    header("location: ../login.php");
  }
} 