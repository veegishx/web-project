<?php
 include 'includes/config/dbconnect.php';

$inputOrgEmail = $_POST['inputOrgEmail'];
$query = "SELECT `*` FROM `users` WHERE `email` = '$inputOrgEmail'";
$result = $conn->query($query);

if($result->num_rows > 0) {
    echo '1';
}
?>