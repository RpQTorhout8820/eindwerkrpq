$(document).ready(function(){
    $('.navbar-light .dmenu').hover(function () {
            $(this).find('.sm-menu').first().stop(true, true).slideDown(150);
        }, function () {
            $(this).find('.sm-menu').first().stop(true, true).slideUp(105)
        });
     
 

});

$('#rpq1').hide().fadeIn(6000);
$('#rpq2').hide().fadeIn(9000);

$('h1').css("color", "red");


