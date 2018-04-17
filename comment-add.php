<?php
require_once ("includes/config/dbconnect.php");
require_once ("includes/functions.php");
$comment = mysqli_real_escape_string($conn, isset($_POST['comment'])) ? mysqli_real_escape_string($conn, $_POST['comment']) : "";
$id = $_POST['userId'];
$campaignId = $_POST['campaignId'];
$username = $_POST['name'];
$email = $_POST['email'];
$date = date('Y-m-d H:i:s');

$sql = "INSERT INTO comments(body, campaignId, userId, userName, email, created_at) VALUES ('" . $comment . "' , '" . $campaignId . "' ,  '". $id ."' ,'" . $username . "', '" . $email ."' ,'" . $date . "')";

$result = mysqli_query($conn, $sql);

if (! $result) {
    $result = mysqli_error($conn);
}
echo $result;
?>