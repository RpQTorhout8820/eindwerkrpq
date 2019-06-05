$(document).ready(function(){
    $('.navbar-light .dmenu').hover(function () {
            $(this).find('.sm-menu').first().stop(true, true).slideDown(150);
        }, function () {
            $(this).find('.sm-menu').first().stop(true, true).slideUp(105)
        });
     
 

});

$('#rpq1').hide().fadeIn(3000);
$('#rpq2').hide().fadeIn(7000);

// $('.nav-link').css("color", "white").css("text-indent", "5px");



