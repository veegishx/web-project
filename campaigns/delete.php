<?php
require_once ("../includes/header.php");
require_once ("../includes/config/dbconnect.php");
$campaignId = $_GET['id'];


$sql = "DELETE FROM campaigns WHERE campaignId = $campaignId";

$result = mysqli_query($conn, $sql);

if (! $result) {
    $result = mysqli_error($conn);
}
header("location:../profile.php?message=success");
?>