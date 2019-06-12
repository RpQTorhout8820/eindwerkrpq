$(document).ready(function(){
    $('.navbar-light .dmenu').hover(function () {
            $(this).find('.sm-menu').first().stop(true, true).slideDown(150);
        }, function () {
            $(this).find('.sm-menu').first().stop(true, true).slideUp(105)
        });
 
     //bounce-in effect   

     $('.animate').scrolla({
         mobile: false,
         once: true
          });

    //toon inhoud bij mouse-over
     $('.web').hide();
     $('#webdesign').on( "mouseover", function(){
           $('.web').css({"background-color": "rgba(0, 123, 255, .8)", "color": "white"}).toggle(show);
     })

    

});


//openingstekst in jumbotron

$('#rpq1').hide().fadeIn(3000);
$('#rpq2').hide().fadeIn(7000);


//verbergen van hamburger menu-items on click
$('.navbar-nav>li>a').on('click', function(){
    // alert('hello!');
    $('.navbar-collapse').collapse('hide');
 });

 


 // $('.nav-link').css("color", "white").css("text-indent", "5px");



