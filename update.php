<?php
require_once ("includes/header.php");
require_once ("includes/config/dbconnect.php");
$orgId = $_POST['id'];
$newDesc = $_POST['postDesc']; 


$sql = "UPDATE organisations SET orgDesc = '$newDesc' WHERE orgId = $orgId";

$result = mysqli_query($conn, $sql);

if (! $result) {
    $result = mysqli_error($conn);
}
header("location:profile.php?update=success");
?>