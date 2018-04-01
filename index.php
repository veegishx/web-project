<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Crowdfunding Platform Home</title>

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

    <!-- Mapbox -->
    <link rel="stylesheet" href="assets/plugins/mapbox/mapbox.css">
    <script src="assets/plugins/mapbox/mapbox.js"></script>

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

    <div id="home">
    <section class="homepage-actions">
        <div id="welcome-message">
            <h1 id="message"></h1>
        </div>
        <div class="action-card-individual">
            <div class="action-card-container">
                <h2 class="action-card-title">Get in touch with an NGO.</h2>
                <p>
                    Do you need some assistance? We can help you get in touch with a non-governmental organisation to assist you with your problems.
                </p>
            </div>
        </div>

        <div class="action-card-donator">
            <div class="action-card-container">
                <h2 class="action-card-title">Help bring change to life<span class="red">.</span></h2>
                <p>
                    Donate to a NGO of your liking and be part of the change you want to see. Every penny counts<span class="red">.</span>
                </p>
            </div>
        </div>
    </section>

    <section class="current-campaigns">
        <h4 style="text-align:center;font-size:2.2em">
            Stories of <span class="red">change</span> happening right now<span class="red">.</span>
        </h4>

        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="fa fa-arrow-left" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="fa fa-arrow-right" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <div class="card">
                        <img class="card-img-top" src="assets/images/raw/animal-cruelty-resized.jpg" alt="Card image cap">
                        <div class="card-body">
                            <h4 class="card-title">End the Cruel Dog Killing Methods In Mauritius</h4>
                            <p class="card-text">Help PETA and the International Animal Rescue end cruel dog killing techniques in Mauritius.</p>
                            <a href="#" class="btn btn-primary">View campaign <span class="fa fa-chevron-right"></span></a>
                        </div>
                    </div>

                    <div class="card">
                        <img class="card-img-top" src="assets/images/raw/education-resized.jpg" alt="Card image cap">
                        <div class="card-body">
                            <h4 class="card-title">Improve the living conditions in the suburb of Port-Louis</h4>
                            <p class="card-text">AISEC is about to transform the lives of hundreds of people needs your support.</p>
                            <a href="#" class="btn btn-primary">View campaign <span class="fa fa-chevron-right"></span></a>
                        </div>
                    </div>

                    <div class="card">
                        <img class="card-img-top" src="assets/images/raw/monkey-resized.jpg" alt="Card image cap">
                        <div class="card-body">
                            <h4 class="card-title">Protect the monkeys of Mauritius</h4>
                            <p class="card-text">Every year dozens of monkeys captured for scientific research abroad are treated in inhumane ways. Help put an end to this</p>
                            <a href="#" class="btn btn-primary">View campaign <span class="fa fa-chevron-right"></span></a>
                        </div>
                    </div>

                    <div class="card">
                        <img class="card-img-top" src="assets/images/raw/charity-resized.jpg" alt="Card image cap">
                        <div class="card-body">
                            <h4 class="card-title">Raise awareness about domestic violence</h4>
                            <p class="card-text">More than 2000 people experience some form of domestic abuse yearly. Join the campaign to raise awareness about this issue.</p>
                            <a href="#" class="btn btn-primary">View campaign <span class="fa fa-chevron-right"></span></a>
                        </div>
                    </div>
                </div>

                <div class="carousel-item">
                    <div class="card">
                        <img class="card-img-top" src="assets/images/raw/animal-cruelty-resized.jpg" alt="Card image cap">
                        <div class="card-body">
                            <h4 class="card-title">End the Cruel Dog Killing Methods In Mauritius</h4>
                            <p class="card-text">Help PETA and the International Animal Rescue end cruel dog killing techniques in Mauritius.</p>
                            <a href="#" class="btn btn-primary">View campaign <span class="fa fa-chevron-right"></span></a>
                        </div>
                    </div>

                    <div class="card">
                        <img class="card-img-top" src="assets/images/raw/education-resized.jpg" alt="Card image cap">
                        <div class="card-body">
                            <h4 class="card-title">Improve the living conditions in the suburb of Port-Louis</h4>
                            <p class="card-text">AISEC is about to transform the lives of hundreds of people needs your support.</p>
                            <a href="#" class="btn btn-primary">View campaign <span class="fa fa-chevron-right"></span></a>
                        </div>
                    </div>

                    <div class="card">
                        <img class="card-img-top" src="assets/images/raw/monkey-resized.jpg" alt="Card image cap">
                        <div class="card-body">
                            <h4 class="card-title">Protect the monkeys of Mauritius</h4>
                            <p class="card-text">Every year dozens of monkeys captured for scientific research abroad are treated in inhumane ways. Help put an end to this</p>
                            <a href="#" class="btn btn-primary">View campaign <span class="fa fa-chevron-right"></span></a>
                        </div>
                    </div>

                    <div class="card">
                        <img class="card-img-top" src="assets/images/raw/charity-resized.jpg" alt="Card image cap">
                        <div class="card-body">
                            <h4 class="card-title">Raise awareness about domestic violence</h4>
                            <p class="card-text">More than 2000 people experience some form of domestic abuse yearly. Join the campaign to raise awareness about this issue.</p>
                            <a href="#" class="btn btn-primary">View campaign <span class="fa fa-chevron-right"></span></a>
                        </div>
                    </div>
                </div>

                <div class="carousel-item">
                    <div class="card">
                        <img class="card-img-top" src="assets/images/raw/animal-cruelty-resized.jpg" alt="Card image cap">
                        <div class="card-body">
                            <h4 class="card-title">End the Cruel Dog Killing Methods In Mauritius</h4>
                            <p class="card-text">Help PETA and the International Animal Rescue end cruel dog killing techniques in Mauritius.</p>
                            <a href="#" class="btn btn-primary">View campaign <span class="fa fa-chevron-right"></span></a>
                        </div>
                    </div>

                    <div class="card">
                        <img class="card-img-top" src="assets/images/raw/education-resized.jpg" alt="Card image cap">
                        <div class="card-body">
                            <h4 class="card-title">Improve the living conditions in the suburb of Port-Louis</h4>
                            <p class="card-text">AISEC is about to transform the lives of hundreds of people needs your support.</p>
                            <a href="#" class="btn btn-primary">View campaign <span class="fa fa-chevron-right"></span></a>
                        </div>
                    </div>

                    <div class="card">
                        <img class="card-img-top" src="assets/images/raw/monkey-resized.jpg" alt="Card image cap">
                        <div class="card-body">
                            <h4 class="card-title">Protect the monkeys of Mauritius</h4>
                            <p class="card-text">Every year dozens of monkeys captured for scientific research abroad are treated in inhumane ways. Help put an end to this</p>
                            <a href="#" class="btn btn-primary">View campaign <span class="fa fa-chevron-right"></span></a>
                        </div>
                    </div>

                    <div class="card">
                        <img class="card-img-top" src="assets/images/raw/charity-resized.jpg" alt="Card image cap">
                        <div class="card-body">
                            <h4 class="card-title">Raise awareness about domestic violence</h4>
                            <p class="card-text">More than 2000 people experience some form of domestic abuse yearly. Join the campaign to raise awareness about this issue.</p>
                            <a href="#" class="btn btn-primary">View campaign <span class="fa fa-chevron-right"></span></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="about-us">
        <h2 id="about-us-header">Who are we<span class="red">?</span></h2>
        <p id="about-us-paragraph"><strong>Chanze<span class="red">.</span>org</strong> is a leading crowdfunding platform for needy individuals, Nonprofits and Non-Governmental Organisations. Our main aim is to provide a way for people to support noble causes across the world
            no matter where they are based.</p>

        <a href="technology.html"><button class="find-more">Find out more <span class="fa fa-angle-right"></span></button></a>

        <div class="team-fadeIn"></div>
    </section>

    <section class="our-process">
        <h2 id="our-proces-header">How does it work<span class="red">?</span></h2>
        <img id="our-proces-image" src="assets/images/optimized/IdeaProcess.png" alt="how-does-it-work-?">
        <p id="our-proces-paragraph">At <strong>Chanze<span class="red">.</span>org</strong> we take care of everything, from organization background checks and validations to payment processing so that you can focus on helping others in a hassle-free setting. We partner up with
            several non-profit and non-governmental organizations and provide them with a platform to reach out to you for help.</p>
    </section>

    <section class="security">
        <img src="assets/images/optimized/money.png">
        <h2 id="security-header">Security</span>
        </h2>
        <p id="security-paragraph">Being a level 1 PCI DSS(Payment Card Industry Data Security Standard) Compliant Merchant, you can be sure that your transactions are securely processed. We use strong AES-256 Encryption across all our services to keep your data secure.</p>
    </section>

    <section class="payment">
        <img src="assets/images/optimized/payment.svg">
        <h2 id="payment-header">Easy Payment Integration</span>
        </h2>
        <p id="payment-paragraph">We offer multiple options to carry out transactions. You don't need to worry about not having an account with a particular banking service since we have partnered with some of the most popular financial organizations in the world.</p>
    </section>

    <section class="location">
        <h1>Find Us</h1>
        <iframe width="100%" height="450" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBsukpvgjfBOVzTAhswIJ4fpodAOvhzzjg
          &q=Faculty+of+Engineering,Moka+Mauritius" allowfullscreen>
      </iframe>
    </section>
    </div>
    <script>
        window.sr = ScrollReveal({
            reset: true,
            duration: 1500
        });
        sr.reveal('#about-us-header');
        sr.reveal('#about-us-paragraph');
        sr.reveal('.find-more');
        sr.reveal('.team-fadeIn');
        sr.reveal('#our-proces-header');
        sr.reveal('#our-proces-image');
        sr.reveal('#our-proces-paragraph');
    </script>

    <script>
        //typedJS homepage animation
        var typed = new Typed("#message", {
            typeSpeed: 50,
            strings: [
                "Change is just around the corner.",
                "With Chanze<span class='red'>.</span>org you can make a difference</span>",
                "Chanze<span class='red'>.</span>org is <span style='color:#22E500'>secure</span>",
                "Make <span class='red'>change</span> happen <span class='red'>now</span>.",
            ],
            smartBackspace: true // Default value
        });
    </script>



</body>

</html>