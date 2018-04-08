<?php 
include 'config/dbconnect.php';
?>
<header role="navigation">
        <nav class="navbar fixed-top navbar-light navbar-expand-lg justify-content-between main-menu" role="navigation">
            <a class="navbar-brand" href="index.php"><img id="org-logo" src="assets/images/optimized/logo-white.png" width="200px"></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="index.php">Home</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="profile.php">Get Started</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="browse.php">Browse</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="#">Organisations</a>
                    </li>



                    <div class="block-align-right">
                        <form class="form-inline my-2 my-lg-0">
                            <input class="form-control mr-sm-2 nav-search-form" type="text" placeholder="Search" aria-label="Search">
                            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
                                <i class="fa fa-search" aria-hidden="true"></i>
                            </button>
                        </form>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <img id="my-avatar" src="#" class="rounded-circle" width="30px" alt="">
                                <span id="my-account">
                                        My Account
                                </span>
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <?php 
                                session_start();
                                if(!empty($_SESSION['email'])) {
                                    echo '<a class="dropdown-item" href="profile.php">My Profile</a>';
                                    echo '<a class="dropdown-item" id="louout-link" href="logout.php">Logout</a>';
                                } else {
                                    echo '<a class="dropdown-item" id="login-link" href="login.php">Login</a>';
                                    echo '<a class="dropdown-item" id="register-link" href="register.php">Register</a>';
                                }
                            
                            ?>  
                            </div>
                        </li>
                    </div>
                </ul>
            </div>
        </nav>
    </header>