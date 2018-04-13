<?php
include '../includes/config/dbconnect.php';
if(isset($_POST['inputCampaignTitle']) && isset($_POST['inputCampaignBody'])) {
    session_start();
    $email = $_SESSION['email'];

    $query = "SELECT `*` FROM `organisations` WHERE `email` = '$email'";
    $result = $conn->query($query);
    if($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $orgId = $row['orgId'];
        $orgName = $row['orgName'];
        $email = $row['email'];
    }

    $campaignTitle = stripslashes($_REQUEST['inputCampaignTitle']);
    $campaignTitle = mysqli_real_escape_string($conn, $campaignTitle);

    $campaignBody = stripslashes($_REQUEST['inputCampaignBody']);
    $campaignBody = mysqli_real_escape_string($conn, $campaignBody);

    $campaignGoal = stripslashes($_REQUEST['inputCampaignGoal']);;
    $campaignImage = stripslashes($_REQUEST['inputCampaignImage']);;

    $created_at = date("Y-m-d H:i:s");

    $campaignSql = "INSERT into `campaigns` (campaignTitle, campaignBody, campaignGoal, campaignFeaturedImage, orgId, orgName, email, campaignStatus, created_at) VALUES ('".$campaignTitle."', '".$campaignBody."', '".$campaignGoal."', '".$campaignImage."', '".$orgId."', '".$orgName."', '".$email."', '1', '".$created_at."')";
    $result = $conn->query($campaignSql) or trigger_error("Query Failed! SQL: $campaignSql - Error: ".mysqli_error($result), E_USER_ERROR);
    if($result) {
        session_start();
        $_SESSION['message'] = 'swal("Campaign created successfully!");';
        header("Location: ../index.php");
    }
}
?>