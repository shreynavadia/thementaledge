$(document).ready(function () {
    if ($(window).width() > 3000){
    $('.navbar-light .d-menu').hover(function () {
            $(this).find('.sm-menu').first().stop(true, true).slideDown(150);
        }, function () {
            $(this).find('.sm-menu').first().stop(true, true).delay(120).slideUp(100);
        });
        }
    });

    

    $(function(){ 
        var navMain = $(".navbar-collapse");
   
        navMain.on("click", "a", null, function () {
            navMain.collapse('hide');
        });
    });

    