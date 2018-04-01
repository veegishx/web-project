<?php 
include '../../config/dbconnect.php';

if (isset($_REQUEST['username'])){
    // removes backslashes
    $firstName = stripslashes($_REQUEST['firstName']);
    $lastName = stripslashes($_REQUEST['lastName']);
    $username = stripslashes($_REQUEST['username']);
    //escapes special characters in a string
    $username = mysqli_real_escape_string($con,$username); 
    $email = stripslashes($_REQUEST['email']);
    $email = mysqli_real_escape_string($con,$email);
    $password = stripslashes($_REQUEST['password']);
    $password = mysqli_real_escape_string($con,$password);
    $created_at = date("Y-m-d H:i:s");
    $query = "INSERT into `users` (username, password, email, trn_date) 
    VALUES ('$username', '".md5($password)."', '$email', '$trn_date')";
    $result = mysqli_query($con,$query);
    if($result){
        echo "<div class='form'>
        <h3>You are registered successfully.</h3>
        <br/>Click here to <a href='login.php'>Login</a></div>";
    }
};

?>