<?php
ini_set('display_errors',1);
error_reporting(E_ALL | E_STRICT);
mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$conn = mysqli_connect("localhost",'root','','chanze');
$errors = [];
// Check connection
if (mysqli_connect_errno())  {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
} else {
    //CREATE USERS TABLE
    $userSql = "CREATE TABLE IF NOT EXISTS `users` (
        userId int NOT NULL AUTO_INCREMENT,
        userName VARCHAR(200) NOT NULL,
        firstName VARCHAR(20),
        lastName VARCHAR(20),
        email VARCHAR(200) NOT NULL,
        userPassword varchar(255) NOT NULL,
        avatar VARCHAR(50),
        created_at timestamp,
        updated_at timestamp,
        userlocation varchar(30),
        PRIMARY KEY(userId)
    )";
        
    $orgSql = "CREATE TABLE IF NOT EXISTS `organisations` (
        orgId int NOT NULL AUTO_INCREMENT,
        userName VARCHAR(200) NOT NULL,
        orgName VARCHAR(200) NOT NULL,
        email VARCHAR(200) NOT NULL,
        orgDesc VARCHAR(1500) NOT NULL,
        orgPassword varchar(255) NOT NULL,
        orgLogo VARCHAR(100),
        created_at timestamp,
        updated_at timestamp,
        orgLocation varchar(30),
        PRIMARY KEY(orgId),
        FOREIGN KEY(orgId)
         REFERENCES users(userId)
         ON DELETE CASCADE,

        FOREIGN KEY(userName)
         REFERENCES users(userName)
         ON DELETE CASCADE,

        FOREIGN KEY(email)
         REFERENCES users(email)
         ON DELETE CASCADE,

        FOREIGN KEY(orgPassword)
         REFERENCES users(userPassword)
         ON DELETE CASCADE
    )";

    $campaignSql = "CREATE TABLE IF NOT EXISTS `campaigns` (
        campaignId int NOT NULL AUTO_INCREMENT,
        campaignTitle VARCHAR(150) NOT NULL,
        campaignBody VARCHAR(20000) NOT NULL,
        campaignGoal MEDIUMINT NOT NULL,
        campaignCategory VARCHAR(30),
        campaignFeaturedImage VARCHAR(1000),
        motivationalMessage VARCHAR(500),
        orgId int NOT NULL,
        orgName VARCHAR(200) NOT NULL,
        email VARCHAR(200) NOT NULL,
        campaignStatus TINYINT(1),
        created_at timestamp,
        updated_at timestamp,
        PRIMARY KEY(campaignId),

        FOREIGN KEY(orgId)
         REFERENCES organisations(orgId)
         ON DELETE CASCADE,

        FOREIGN KEY(orgName)
         REFERENCES organisations(orgName)
         ON DELETE CASCADE,

        FOREIGN KEY(email)
         REFERENCES organisations(email)
         ON DELETE CASCADE
    )";

    $commentSql = "CREATE TABLE IF NOT EXISTS `comments` (
        id INT NOT NULL AUTO_INCREMENT,
        campaignId int,
        userId int,
        userName VARCHAR(200) NOT NULL,
        email VARCHAR(200) NOT NULL,
        body VARCHAR(1000) NOT NULL,
        created_at timestamp,
        parentId int,
        PRIMARY KEY(id),

        FOREIGN KEY(userId) 
         REFERENCES users(userId)
         ON DELETE CASCADE,

        FOREIGN KEY(userName) 
         REFERENCES users(userName)
         ON DELETE CASCADE,

        FOREIGN KEY(email)
         REFERENCES users(email)
         ON DELETE CASCADE,

        FOREIGN KEY(campaignId)
         REFERENCES campaigns(campaignId)
         ON DELETE CASCADE
    )";

    $tables = [$userSql, $orgSql, $campaignSql, $commentSql];
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