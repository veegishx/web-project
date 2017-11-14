$(document).ready(function() {
    /*
     * This is the function that controls all scrolling effects
     * It's currrently controlling the css styling to be applied to the titles by calculating by how much the page has been
     * scrolled vertically using the window object and the .scrollTop property
     */

    var originalTitle = $('.campaign-title');
    var title = $('.campaign-title').text();
    var titleBar = $('.campaign-scrollable-bar');
    var message = $('.quick-message');
    $(window).scroll(function() {
        var windowPosition = $(window).scrollTop();
        if (windowPosition >= 500) {
            titleBar.css('opacity', '1');
            titleBar.css('transition', '500ms');
            originalTitle.css('transition', '500ms');
            originalTitle.css('opacity', '0');
            originalTitle.css('margin-top', '-100px');
            message.css('transition', '500ms');
            message.css('opacity', '1');
            message.css('margin-top', '0px');
            if (titleBar.text().length < 1) {
                titleBar.append('<span class="fa fa-info-circle" aria-hidden="true"></span> Campaign: ' + title);
            }
        } else {
            titleBar.css('transition', '500ms');
            titleBar.css('opacity', '0');
            originalTitle.css('transition', '500ms');
            originalTitle.css('opacity', '1');
            originalTitle.css('margin-top', '0px');
            message.css('transition', '500ms');
            message.css('opacity', '0');
            message.css('margin-top', '-45px');
        }
    });

    //Authentication simulation using localStorage
    var btnSubmit = $("#btn-submit");

    btnSubmit.click(function() {
        saveUserDetails();
    });

    if ((localStorage.getItem("myUsername").length > 0) && (document.title) == "User Registration") {
        setTimeout(function() {
            swal({
                title: 'Success',
                text: 'You are now a registered user!',
                type: 'success',
            }, 1000);
        });

        setTimeout(function() {
            window.location.replace("index.html");
        }, 5000);

        $("#my-account").text(localStorage.getItem("myUsername"));
    }

    if ((localStorage.getItem("myUsername").length > 0)) {
        $("#my-account").text(localStorage.getItem("myUsername"));
    }

    function saveUserDetails() {
        var localEmail = $("#inputEmail4").val();
        var localUsername = $("#inputUsername").val();
        localStorage.setItem("myEmail", localEmail);
        localStorage.setItem("myUsername", localUsername);
        console.log(localStorage.getItem("myEmail"));
    }

});