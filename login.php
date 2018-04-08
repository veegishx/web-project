<?php include 'includes/config/dbconnect.php'; ?>
<?php
session_start();
if(!empty($_SESSION['email'])) {
    header("location: index.php");
} else {
    unset($_SESSION['email']);
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>User Login</title>

    <!-- 3rd party libraries -->
    <!-- Loading Bootstrap 4 dependencies -->
    <script src="assets/js/popper/popper.min.js"></script>
    <script src="assets/js/jquery/jquery.min.js"></script>

    <!-- Loading Bootstrap 4 -->
    <link rel="stylesheet" href="assets/css/bootstrap/bootstrap.min.css">
    <script src="assets/js/bootstrap/bootstrap.min.js"></script>

    <!-- ScrollRevealJS & Normalize CSS -->
    <script src="assets/js/scrollreveal/scrollreveal.min.js"></script>

    <!-- SweetAlert2 -->
    <script src="assets/js/sweetalert/sweetalert.min.js"></script>
    <link rel="stylesheet" href="assets/js/sweetalert/sweetalert.min.css">

    <!-- TinyMCE Editor -->
    <script src="assets/plugins/tinymce/tinymce.min.js"></script>

    <!-- TypeIt -->
    <script src="assets/js/typeit/typeit.min.js"></script>

    <!-- Core CSS and scripts -->
    <link rel="stylesheet" href="assets/css/style.css">
    <script src="assets/js/main.js"></script>

    <!-- Google Fonts -->
    <link href="assets/fonts/fonts.css" rel="stylesheet">

    <!-- Font Awesome icons-->
    <link rel="stylesheet" href="assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css">

</head>

<body>

    <div id="login-container">
        <div class="form-wrapper">
            <h2 class="login">
                Login<span class="red">.</span>
            </h2>
            <?php
            if(!empty($_SESSION['message'])) {
                echo "<div class='alert alert-danger' role='alert'>";
                echo $_SESSION['message'];
                echo "</div>";
                unset($_SESSION['message']);
            }
            ?>
            <form class="login" method="POST" action="authentication/auth.php">
                <div class="form-row">

                    <div class="form-group col-md-6">
                        <label for="inputEmail">Email</label>
                        <input type="text" class="form-control" name="inputEmail" placeholder="Enter Your Email" required>
                    </div>
                    <div class="form-group col-md-6">
                        <label for="inputPassword">Password</label>
                        <input type="password" class="form-control" name="inputPassword" placeholder="Enter Your Password" required>
                    </div>
                </div>
                <button type="submit" class="btn btn-primary" id="btn-submit">Login</button>
            </form>
        </div>

        <button id="back-button" class="btn-back"><span class="fa fa-long-arrow-left" aria-hidden="true"></span>
            Go Back </button>
    </div>

</body>

</html>