$(document).ready(function(){
    $('.menu i').click(function(){
        $('header .navbar').slideToggle();
        $(this).toggleClass('far fa-times');
    });
});