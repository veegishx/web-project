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

function getUserId() {
    global $conn;
    $email = $_SESSION['email'];
    $query = "SELECT `userId` FROM `users` WHERE `email` = '$email'";
    $result = $conn->query($query);

    if($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $userId = $row['userId'];
    }

    return $userId;
}

function getEmail() {
    global $conn;
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

function getFirstName() {
    global $conn;
    $email = $_SESSION['email'];
    $query = "SELECT `firstName` FROM `users` WHERE `email` = '$email'";
    $result = $conn->query($query);

    if($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $firstName = $row['firstName'];
    }

    if ($firstName == null) {
        $data = '';
    } else {
        $data = $firstName;
    }

    return $data;
}

function getLastName() {
    global $conn;
    $email = $_SESSION['email'];
    $query = "SELECT `lastName` FROM `users` WHERE `email` = '$email'";
    $result = $conn->query($query);

    if($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $lastName = $row['lastName'];
    }

    if ($lastName == null) {
        $data = '';
    } else {
        $data = $lastName;
    }

    return $data;
}

function getOrgName() {
    global $conn;
    $email = $_SESSION['email'];
    $query = "SELECT `orgName` FROM `organisations` WHERE `email` = '$email'";
    $result = $conn->query($query);

    if($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $orgName = $row['orgName'];
    } else {
        $orgName = '';
    }

    if ($orgName == null) {
        $data = '';
    } else {
        $data = $orgName;
    }

    return $data;
}

function getOrgDescription() {
    global $conn;
    $email = $_SESSION['email'];
    $query = "SELECT `*` FROM `organisations` WHERE `email` = '$email'";
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

function getMyOrgData() {
    global $conn;
    $email = $_SESSION['email'];
    $query = "SELECT `*` FROM `campaigns` WHERE `email` = '$email'";
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


function checkAccount() {
    global $conn;
    $email = $_SESSION['email'];
    $query = "SELECT `*` FROM `users` WHERE `email` = '$email'";
    $result = $conn->query($query);

    $row = $result->fetch_assoc();
    $firstName = $row['firstName'];

    if ($firstName == null) {
        $status = 1;
    } else {
        $status = 0;
    }

    return $status;
}


?>