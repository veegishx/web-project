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
<?php include 'includes/header.php'; ?>

    <div id="registration-container">
        <div class="form-wrapper">
            <h2 class="register">
                Login<span class="red">.</span>
            </h2>

            <form class="register" method="POST">
                <div class="form-row">

                    <div class="form-group col-md-6">
                        <label for="inputUsername4">Username</label>
                        <input type="text" class="form-control" id="inputUsername" placeholder="Pick a username" required>
                    </div>
                    <div class="form-group col-md-6">
                        <label for="inputPassword4">Password</label>
                        <input type="password" class="form-control" id="inputPassword4" placeholder="Enter a Password" required>
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