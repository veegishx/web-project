<?php
$conn = mysqli_connect("localhost",'root','','chanze');
$errors = [];
// Check connection
if (mysqli_connect_errno())  {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
} else {
    //CREATE USERS TABLE
    $userSql = "CREATE TABLE IF NOT EXISTS users (
        userId int NOT NULL AUTO_INCREMENT,
        userName VARCHAR(20) NOT NULL,
        firstName VARCHAR(20) NOT NULL,
        lastName VARCHAR(20) NOT NULL,
        email VARCHAR(30) NOT NULL,
        userPassword varchar(255) NOT NULL,
        avatar VARCHAR(50),
        created_at timestamp,
        updated_at timestamp,
        userlocation varchar(30),
        PRIMARY KEY(userId)
    )";
        
    $orgSql = "CREATE TABLE IF NOT EXISTS organisations (
        orgId int NOT NULL AUTO_INCREMENT,
        userId int,
        orgName VARCHAR(20) NOT NULL,
        email VARCHAR(30) NOT NULL,
        orgDesc VARCHAR(500) NOT NULL,
        orgPassword varchar(255) NOT NULL,
        orgLogo VARCHAR(50),
        created_at timestamp,
        updated_at timestamp,
        orglocation varchar(30),
        PRIMARY KEY(orgId),
        FOREIGN KEY(userId)
         REFERENCES users
         ON DELETE CASCADE
    )";

    $campaignSql = "CREATE TABLE IF NOT EXISTS campaigns (
        campaignId int NOT NULL AUTO_INCREMENT,
        userId VARCHAR(14) NOT NULL,
        orgId VARCHAR(14) NOT NULL,
        orgName VARCHAR(20) NOT NULL,
        email VARCHAR(30) NOT NULL,
        orgPassword varchar(255) NOT NULL,
        orgLogo VARCHAR(50),
        created_at timestamp,
        updated_at timestamp,
        orglocation varchar(30),
        PRIMARY KEY(campaignId),
        FOREIGN KEY(userId) 
         REFERENCES users
         ON DELETE CASCADE,

        FOREIGN KEY(orgId)
         REFERENCES organisations
         ON DELETE CASCADE
)";

    $tables = [$userSql, $orgSql, $campaignSql];
    foreach($tables as $k => $sql){
        $query = @$conn->query($sql);
    
        if(!$query)
           $errors[] = "Table $k : Creation failed ($conn->error)";
        else
           $errors[] = "Table $k : Creation done";
    }
    
    
    foreach($errors as $msg) {
       //echo "$msg <br>";
    }
}
//close connection on page where dbconnect.php is included
?> 