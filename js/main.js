$(document).ready(function(){
    $('.navbar-light .dmenu').hover(function () {
            $(this).find('.sm-menu').first().stop(true, true).slideDown(150);
        }, function () {
            $(this).find('.sm-menu').first().stop(true, true).slideUp(105)
        });
     

// $('.kleur3b').hide();
// $('#drukken').on( "mouseover", function(){
//     $('.druk').fadeIn(4000).css({"background-color": "#dc3545", "color": "white"});
// })


//infaden van items op foto in tussenstukken
$('.druk').hide();
$('#drukken').on( "mouseover", function(){
    $('.druk').css({"background-color": "rgba(220, 53, 69, .8)", "color": "white"}).toggle(slideDown);
})

$('.web').hide();
$('#webdesign').on( "mouseover", function(){
    $('.web').css({"background-color": "rgba(0, 123, 255, .8)", "color": "white"}).toggle(slideDown);
})

$('.convert').hide();
$('#conversie').on( "mouseover", function(){
    $('.convert').css({"background-color": "rgba(40, 167, 69, .8)", "color": "white"}).toggle(slideDown);
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

 
// $('#drukken').on('hover', function(){
//     $('.btn-warning').addClass('kleur3');
//     console.log('test');
// })



