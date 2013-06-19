$(document).ready(function(){

    var current = "welcome";

    var welcomeText = $("#welcome-content").html();
    $("#main-content").html(welcomeText);

    $("#projects-content").hide();
    $("#contact-content").hide();
    $("#welcome-content").hide();
    $("#resume-content").hide();
    $("#about-content").hide();

    // $("#enter-site-button").click(function(){
    //  $("#enter-site-content").fadeOut(function(){
    //      var welcomeText = $("#welcome-content").html();
    //      $("#main-content").html(welcomeText);
    //      $("#header-content").fadeIn();
    //      $("#main-content").fadeIn();
    //  });
    // });
    $("#home-button").click(function(){
        if (current != "welcome") {
            $("#main-content").fadeOut(function(){
                var welcomeText = $("#welcome-content").html();
                current = "welcome"
                $("#main-content").html(welcomeText);
                $("#main-content").fadeIn();
            });
        }
    });
    $("#about-button").click(function(){
        if (current != "about") {
            $("#main-content").fadeOut(function(){
                var aboutText = $("#about-content").html();
                current = "about"
                $("#main-content").html(aboutText);
                $("#main-content").fadeIn();
            });
        }
    });
    $("#projects-button").click(function(){
        if (current != "projects") {
            $("#main-content").fadeOut(function(){
                var projectsText = $("#projects-content").html();
                current = "projects"
                $("#main-content").html(projectsText);
                $("#main-content").fadeIn();
            });
        }
    });
    $("#contact-button").click(function(){
        if (current != "contact") {
            $("#main-content").fadeOut(function(){
                var contactText = $("#contact-content").html();
                current = "contact"
                $("#main-content").html(contactText);
                $("#main-content").fadeIn();
            });
        }
    });
    $("#resume-button").click(function(){
        if (current != "resume") {
            $("#main-content").fadeOut(function(){
                var resumeText = $("#resume-content").html();
                current = "resume"
                $("#main-content").html(resumeText);
                $("#main-content").fadeIn();
            });
        }
    });
});