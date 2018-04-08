<?php 

include '../../includes/config/dbconnect.php';

//Removing backslashes and escaping special characters
$orgName = stripslashes($_REQUEST['inputOrgName']);
$orgName = mysqli_real_escape_string($conn,$orgName); 

$userName = str_replace(" ", "", $orgName);

$email = stripslashes($_REQUEST['inputOrgEmail']);
$email = mysqli_real_escape_string($conn,$email);

$orgPassword = $_REQUEST['inputOrgPassword'];


$option = ['cost' => 12];
$hashedPassword = password_hash($orgPassword, PASSWORD_DEFAULT, $option);


$location = stripslashes($_REQUEST['inputOrgLocation']);
$location = mysqli_real_escape_string($conn, $location);

$orgDescription = stripslashes($_REQUEST['inputOrgDescription']);
$orgDescription = mysqli_escape_string($conn, $orgDescription);

$created_at = date("Y-m-d H:i:s");

$orgSql = "INSERT into `organisations` (userName, orgName, email, orgPassword, orgLocation, orgDesc, created_at) 
VALUES ('".$userName."', '".$orgName."', '".$email."', '".$hashedPassword."', '".$location."', '".$orgDescription."', '".$created_at."')";

$userSql = "INSERT into `users` (userName, email, userPassword, created_at) 
VALUES ('".$userName."', '".$email."', '".$hashedPassword."', '".$created_at."')";

$queries = [$userSql, $orgSql];
foreach($queries as $k => $sql){
    $result = @$conn->query($sql);

    if(!$result)
        $errors[] = "Table $k : Insertion failed ($conn->error)";
    else
        $errors[] = "Table $k : Insertion complete";
}
    
    
    foreach($errors as $msg) {
       //echo "$msg <br>";
    }

//$result = $conn->query($sql) or trigger_error("Query Failed! SQL: $sql - Error: ".mysqli_error($result), E_USER_ERROR);

if($result) {
    session_start();
    $_SESSION['message'] = 'swal("Your Account has been successfully created. You can now login!");';
    header("Location: ../../index.php");
}
?>