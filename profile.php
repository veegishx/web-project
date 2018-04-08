<?php
 include 'includes/functions.php';
 include 'includes/header.php';
 if(empty($_SESSION['email'])) {
    header("location: login.php");
 } 
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My Profile</title>

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


    <div class="top-container">
        <img src="assets/images/optimized/default-avatar.jpg" width="200px" class="rounded float-left">
        <div class="profile-info-wrapper">
            <span>Date Joined: <?php echo getDateJoined(); ?></span>
            <span>First Name: Veegish</span>
            <span>Last Name: Ramdani</span>
            <span>Email: <?php echo getEmail(); ?></span>
        </div>
    </div>

    <div class="profile-container">
        <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li class="nav-item">
                <a class="nav-link active" id="pills-account-tab" data-toggle="pill" href="#pills-account" role="tab" aria-controls="pills-account" aria-selected="true"><span class="fa fa-bullhorn" aria-hidden="true"></span> Start a Campaign
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Profile</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Contact</a>
            </li>
        </ul>
        <div class="tab-content" id="pills-tabContent">

            <div class="tab-pane fade show active" id="pills-account" role="tabpanel" aria-labelledby="pills-account-tab">
                <div class="jumbotron">
                    <h1><span class="fa fa-bullhorn" aria-hidden="true"></span> Ready to start a new campaign?</h1>
                    <p>Keep you campaign message simple but make sure to highlight important points to gain the trust of your potential audience and secure a donation. </p>

                    <hr class="my-4">

                    <p class="lead">Your fundraising campaign should attract the attention of your potential donators. We recommend using pictures, videos and online references. For more details, check out our fundraising etiquette by clicking on Learn More below.</p>

                    <p class="lead">
                        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#showEtiquette">Learn more
                        </button>
                    </p>
                </div>

                <div class="modal fade" id="showEtiquette" tabindex="-1" role="dialog" aria-labelledby="FundRaisingEtiquette" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="etiquette-title" style="font-family: 'Roboto', sans-serif; font-weight: 900;"><span class="fa fa-info-circle" aria-hidden="true"></span> Fund Raising Etiquette</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                              </button>
                            </div>
                            <div class="modal-body" style="font-family: 'Open', sans-serif">
                                <p>When using chanze.org for a fundraising campaign, ask yourself these questions:</p>
                                <p><strong>Can I get contributors excited about my cause?</strong></p>
                                <p><strong> Can I give them a sense of making a difference by giving to my campaign?</strong></p>
                                <p>If you can answer yes to both, you're on the right track. Follow these tips to ensure your fund is a success:</p>
                                <p>
                                    <ol type="1">
                                        <li>Start by including a <strong>lively photo or video</strong> of your project or fundraiser.</li>
                                        <li>Write a <strong>thoughtful description</strong> of your cause and who benefits from donations to it.</li>
                                        <li><strong>Promote your campaign!</strong> Use our tools to share your campaign with those who will care most about your work: Are they friends? family? community members? Add them all to your contact list. </li>
                                        <li><strong>Send donors regular updates</strong> about your campaign and how you are using the funds Include photos of your work, project or progress Express genuine gratitude in your updates Send a heartfelt thank-you
                                            note along with a small gift, even if it's just a nice photo of your finished product, goal or accomplishment, made possible by their generosity Remember any contribution you receive becomes the basis for a
                                            new relationship with the donor. Show your appreciation and treat them like a most special and cherished friend.</li>
                                    </ol>
                                </p>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-8" style="display:inline-block">
                    <form method="POST" action="campaigns/process.php">
                        <div class="form-group col-md-6">
                            <label for="inputCampaignTitle">Campaign Title</label>
                            <input type="text" class="campaign-heading form-control-lg" name="inputCampaignTitle" placeholder="Enter Your Campaign Title" required>
                        </div>

                        <div class="form-group col-md-6">
                            <label for="inputEmail">Campaign Goal</label>
                            <input type="text" class="campaign-heading form-control-lg" name="inputCampaignGoal" placeholder="Enter Your Campaign Goal" required>
                        </div>

                        <div class="form-group col-md-6">
                            <label for="inputEmail">Campaign Image</label>
                            <input type="text" class="campaign-heading form-control-lg" name="inputCampaignImage" placeholder="Enter Your Campaign Image URL" required>
                        </div>

                        <textarea id="campaign-body-editor" name="inputCampaignBody" required>
                            <p style="text-align: center; font-size: 15px;">
                                    <img title="chanze.org logo" src="assets/images/optimized/logo.png" alt="TinyMCE Logo" width="200px">
                            </p>
                            <h1 style="text-align: center;font-family: 'Roboto', sans-serif;font-weight: 500;">Welcome to the campaign editor!</h1>
                            <h2>This is a basic campaign title</h2>
                            <p>This is a <b>paragraph</b> placeholder describing you campaign.</p>
                            <p>You might want to add a few pictures or videos</p>
                            <p><img src="assets/images/raw/charity-resized.jpg" alt="" data-mce-selected="1" height="210" width="316"><br data-mce-bogus="1"></p>
                            <h3>Or even a few links</h3>
                            <p><a href="https://facebook.com">Join us on facebook</a> & <a href="https://twitter.com">Follow us on Twitter</a> for updates!</p>
                        </textarea>
                        <button type="submit">POST</button>
                    </form>
                </div>

                <div class="col-md-4" style="display:inline-block;float:right">
                    <div class="campaign-sidebar">
                        <div class="campaign-sidebar-title">
                            <h3><span class="fa fa-pencil" aria-hidden="true"></span> Organization Info</h3>
                        </div>
                        <div class="campaign-sidebar-body">
                            <button class="campaign-sidebar-item">
                                <span class="fa fa-plus" aria-hidden="true"></span> Add a Facebook link
                            </button>

                            <button class="campaign-sidebar-item">
                                <span class="fa fa-plus" aria-hidden="true"></span> Add a Twitter handle
                            </button>
                        </div>
                    </div>
                    <button type="submit" class="publish-button">PUBLISH</button>
                </div>
            </div>

            <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                <p><?php echo getOrgDescription(); ?></p>
                <p>
                    <?php
                        $campaigns = getMyActiveCampaignsData();
                        foreach($campaigns as $campaign) {
                            echo "<a href='campaign.php?id=" . $campaign['campaignId'] ."'>" . $campaign['campaignTitle'] . "</a></br>";
                        }
                    ?>
                </p>
            </div>

            <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                ...
            </div>
        </div>
    </div>
    <script>
        tinymce.init({
            selector: "textarea",
            height: 500,
            plugins: [
                "advlist autolink autosave link image lists charmap print preview hr anchor pagebreak",
                "searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking",
                "table contextmenu directionality emoticons template textcolor paste fullpage textcolor colorpicker textpattern"
            ],

            toolbar1: "link unlink anchor image media code | insertdatetime preview | forecolor backcolor table | hr",
            toolbar2: "undo redo  | bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | styleselect formatselect | blockquote",

            menubar: false,
            toolbar_items_size: 'small',

            style_formats: [{
                title: 'Bold text',
                inline: 'b'
            }, {
                title: 'Red text',
                inline: 'span',
                styles: {
                    color: '#ff0000'
                }
            }, {
                title: 'Red header',
                block: 'h1',
                styles: {
                    color: '#ff0000'
                }
            }, {
                title: 'Example 1',
                inline: 'span',
                classes: 'example1'
            }, {
                title: 'Example 2',
                inline: 'span',
                classes: 'example2'
            }, {
                title: 'Table styles'
            }, {
                title: 'Table row 1',
                selector: 'tr',
                classes: 'tablerow1'
            }],

            templates: [{
                title: 'Test template 1',
                content: 'Test 1'
            }, {
                title: 'Test template 2',
                content: 'Test 2'
            }],

            init_instance_callback: function() {
                window.setTimeout(function() {
                    $("#div").show();
                }, 1000);
            }
        });
    </script>
</body>