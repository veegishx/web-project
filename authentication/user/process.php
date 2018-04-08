<?php 

include '../../includes/config/dbconnect.php';

//Not Using prepared statements
//Removing backslashes and escaping special characters
$firstName = stripslashes($_REQUEST['inputFirstName']);
$firstName = mysqli_real_escape_string($conn,$firstName); 

$lastName = stripslashes($_REQUEST['inputLastName']);
$lastName = mysqli_real_escape_string($conn,$lastName); 

$email = stripslashes($_REQUEST['inputEmail']);
$email = mysqli_real_escape_string($conn,$email);

$username = stripslashes($_REQUEST['inputUsername']);
$username = mysqli_real_escape_string($conn,$username);

$userPassword = $_REQUEST['inputUserPassword'];


$option = ['cost' => 12];
$hashedPassword = password_hash($userPassword, PASSWORD_DEFAULT, $option);


$created_at = date("Y-m-d H:i:s");

$sql = "INSERT into `users` (firstName, lastName, email, username, userPassword, created_at) 
VALUES ('".$firstName."', '".$lastName."', '".$email."', '".$username."', '".$hashedPassword."', '".$created_at."')";

$result = $conn->query($sql) or trigger_error("Query Failed! SQL: $sql - Error: ".mysqli_error($result), E_USER_ERROR);

if($result) {
    session_start();
    $_SESSION['message'] = 'swal("Your Account has been successfully created. You can now login!");';
    header("Location: ../../index.php");
}
?>