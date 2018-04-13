<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Campaign Project</title>

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
<?php
    include 'includes/header.php';
    $id = $_GET['id'];
    $query = "SELECT `*` FROM `campaigns` WHERE `campaignId` = '$id'";
    $result =  $conn->query($query);

    if($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $campaignTitle = $row['campaignTitle'];
        $campaignBody = $row['campaignBody'];
        $campaignImage = $row['campaignFeaturedImage'];
    }
?>
    <div class="container-fluid">
        <div class="campaign-wrapper">
            <div class="col-lg-7">
                <section class="campaign-body">
                    <div class="campaign-scrollable-bar"></div>
                    <div class="campaign-image">
                        <img src="<?php echo $campaignImage; ?>" class="img-fluid img-campaign" alt="campaign image">
                    </div>

                    <div class="campaign-main-body">
                        <h4 class="campaign-overview">Campaign Overview</h4>
                        <hr>
                        <?php echo $campaignBody; ?>
                    </div>
                </section>
            </div>

            <aside class="col-lg-5 campaign-actions" id="action-sidebar">
                <div class="campaign-goal">
                    <h3 class="campaign-title"><?php echo $campaignTitle; ?></h3>
                    <p class="quick-message">Help make change happen<span class="red">.</span></p>
                    <p class="campaign-donation-message">You think water moves fast? You should see ice. It moves like it has a mind. Like it knows it killed the world once and got a taste for murder. After the avalanche, it took us a week to climb out. </p>

                    <div class="campaign-organiser-wrapper">
                        <div class="campaign-organiser-container">
                            <img src="assets/images/raw/lbleu.png" class="organisation-avatar-sm">
                            <h5 class="organisation-card-name">Lagon Bleu</h5>
                            <p class="verified"><span class="fa fa-check-circle-o" aria-hidden="true"></span> Verified Organisation</p>
                            <button type="button" class="btn btn-primary view-profile">View Profile</button>
                        </div>
                    </div>

                    <div class="campaign-progress-wrapper">
                        <span style="font-family: 'Open-sans',sans-serif;"><strong>Rs18,750 MUR raised</strong> by 120 backers</span>
                        <div class="progress">
                            <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                        </div>
                        <p style="font-family: 'Nunito',sans-serif;">25% of Rs75,000 goal achieved</p>
                    </div>

                    <button type="button" class="donate-button">Donate</button>
                </div>

            </aside>
        </div>
    </div>

</body>

</html>