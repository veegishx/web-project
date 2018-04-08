<?php 

include 'config/dbconnect.php';

function getUserName() {
    global $conn;
    $email = $_SESSION['email'];
    $query = "SELECT `userName` FROM `users` WHERE `email` = '$email'";
    $result = $conn->query($query);

    if($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $username = $row['userName'];
    }

    return $username;
}

function getEmail() {
    $email = $_SESSION['email'];
    return $email;
}

function getDateJoined() {
    global $conn;
    $email = $_SESSION['email'];
    $query = "SELECT `created_at` FROM `users` WHERE `email` = '$email'";
    $result = $conn->query($query);

    if($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $dateJoined = $row['created_at'];
    }

    return $dateJoined;
}

function getOrgDescription() {
    global $conn;
    $email = $_SESSION['email'];
    $query = "SELECT `orgDesc` FROM `organisations` WHERE `email` = '$email'";
    $result =  $conn->query($query);

    if($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $orgDesc = $row['orgDesc'];
    }

    return $orgDesc;
}

function getMyActiveCampaignsData() {
    global $conn;
    $email = $_SESSION['email'];
    $query = "SELECT `*` FROM `campaigns` WHERE `email` = '$email' AND  `campaignStatus` = '1'";
    $result = $conn->query($query);

    if($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
            $rows[] = $row;
        }
    } else {
        $rows = "";
    }

    return $rows;
}

function getAllCampaignsData() {
    global $conn;
    $query = "SELECT `*` FROM `campaigns` WHERE `campaignStatus` = '1'";
    $result = $conn->query($query);

    if($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
            $rows[] = $row;
        }
    } else {
        $rows = "";
    }

    return $rows;
}

function getAllOrganisationsData() {
    global $conn;
    $query = "SELECT `*` FROM `organisations`";
    $result = $conn->query($query);

    if($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
            $rows[] = $row;
        }
    } else {
        $rows = "";
    }

    return $rows;
}

?>