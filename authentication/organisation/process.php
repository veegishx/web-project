<?php 

include '../../includes/config/dbconnect.php';

//Removing backslashes and escaping special characters
$orgName = stripslashes($_REQUEST['inputOrgName']);
$orgName = mysqli_real_escape_string($conn,$orgName); 

$email = stripslashes($_REQUEST['inputOrgEmail']);
$email = mysqli_real_escape_string($conn,$email);

$userPassword = $_REQUEST['inputOrgPassword'];
$option = ['cost' => 12];
$hashedPassword = password_hash($userPassword, PASSWORD_DEFAULT, $option);

$location = stripslashes($_REQUEST['inputOrgLocation']);
$location = mysqli_real_escape_string($conn, $location);

$orgDescription = stripslashes($_REQUEST['inputOrgDescription']);
$orgDescription = mysqli_escape_string($conn, $orgDescription);

$created_at = date("Y-m-d H:i:s");

$sql = "INSERT into `organisations` (orgName, email, orgPassword, orgLocation, orgDesc, created_at) 
VALUES ('".$orgName."', '".$email."', '".$hashedPassword."', '".$location."', '".$orgDescription."', '".$created_at."')";

$result = $conn->query($sql) or trigger_error("Query Failed! SQL: $sql - Error: ".mysqli_error($result), E_USER_ERROR);

if($result) {
    session_start();
    $_SESSION['email'] = $email;
    $_SESSION['message'] = 'swal("Your Account has been successfully created. You can now login!");';
    header("Location: ../../index.php");
}
?>