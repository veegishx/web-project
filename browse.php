<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Browse Campaigns</title>

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

    <script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>
    <script src="https://threejs.org/examples/js/libs/stats.min.js"></script>

</head>
<body>

    <div class="container-fluid">
        <div class="row">
            <nav class="col-sm-3 col-md-2 hidden-xs-down bg-faded sidebar">
                <ul class="nav nav-pills flex-column">
                    <li class="nav-item">
                        <a class="nav-link active" href="#">
                            <span class="fa fa-list-alt" aria-hidden="true"></span> Browse
                            <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">
                            <span class="fa fa-book" aria-hidden="true"></span> Education
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">
                            <span class="fa fa-leaf" aria-hidden="true"></span> Environment
                        </a>
                    </li>

                    <div class="form-group">
                        <label for="sortBy">Sort By</label>
                        <select class="form-control" id="sortBy">
                              <option>Popularity</option>
                              <option>Highest Goal</option>
                              <option>Lowest Goal</option>
                              <option>Ascending Order</option>
                              <option>Descending Order</option>
                            </select>
                    </div>
                </ul>
            </nav>

            <div class="col-sm-3 col-lg-10 hidden-xs-down bg-faded browse-campaign-container">
                <h1 class="featured">Featured</h1>
                <div class="browse-banner">
                    <div class="funding-goal">Funding Goal: $ 500,000</div>
                    <h3>Fund Research on Coral Reefs</h3>
                    <p>
                        Amid fears for the world's coral reefs, the UN World Heritage Committee has issued its most wide-ranging statement so far on protecting heritage sites from climate. But the problem doesn't end there.
                    </p>
                    <a href="donation.html"><button class="fund-this-sm">Fund this project</button></a>
                </div>

                <div class="browse-campaign-cards">
                    <?php 
                        include 'includes/header.php';
                        include 'includes/functions.php';
                        $campaigns = getAllCampaignsData();
                        foreach($campaigns as $campaign) {
                            echo '<div class="col-sm-3 col-lg-3 campaign">';
                            echo '<div class="overlay">';
                            echo '<div class="funding-goal">Funding Goal: ' . $campaign['campaignGoal'] . '</div>';
                            echo '<h2>' . $campaign['campaignTitle'] . '</h2>';
                            echo '<p>' . substr(strip_tags($campaign['campaignBody']), 0, 110) . '...</p>';
                            echo "<a href='campaign.php?id=" . $campaign['campaignId'] ."'><button class='fund-this-sm'>Fund this project</button></a></br>";
                            echo '</div>';
                            echo '<img src="' . $campaign['campaignFeaturedImage'] . '" alt="' . $campaign['campaignTitle'] . '">';
                            echo '</div>';
                        }
                    ?>                
                </div>
            </div>
        </div>
    </div>