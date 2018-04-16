<?php
require_once ("includes/config/dbconnect.php");
require_once ("includes/functions.php");
$id = $_POST['campaignId']; 
$sql = "SELECT * FROM comments WHERE campaignId = '$id' ORDER BY id desc";

$result = mysqli_query($conn, $sql);
$record_set = array();
while ($row = mysqli_fetch_assoc($result)) {
    array_push($record_set, $row);
}
mysqli_free_result($result);

mysqli_close($conn);
echo json_encode($record_set);
?>