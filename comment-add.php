<?php
require_once ("includes/config/dbconnect.php");
require_once ("includes/functions.php");
$comment = isset($_POST['comment']) ? $_POST['comment'] : "";
$id = $_POST['id'];
$username = $_POST['name'];
$email = $_POST['email'];
$date = date('Y-m-d H:i:s');

$sql = "INSERT INTO comments(body, userId, userName, email, created_at) VALUES ('" . $comment . "' , '". $id ."' ,'" . $username . "', '" . $email ."' ,'" . $date . "')";

$result = mysqli_query($conn, $sql);

if (! $result) {
    $result = mysqli_error($conn);
}
echo $result;
?>