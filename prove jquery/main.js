//Per mostrare menu

$('.fas').click(function() {
    $('.hamburger-menu').show();
})

//Per nascondere menu

// $('.close').click(function() {
//     $('.hamburger-menu').hide();
// })

// $('#home').click(function() {
//     $(this).hide();
// })

//prova fadein/out

$('.cta').mouseover(function() {
    $('.header-left').fadeOut();
})

$('.cta').mouseover(function() {
    $('.header-left').fadeIn(500);
})

//prove add class
$('.close').click(function() {
    $('.fas').removeClass('red');
})

$('.close').click(function() {
    $('.fas').addClass('white');
})
