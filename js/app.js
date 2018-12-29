//scrolowanie do posczegolnych sekcjki strony

$(document).ready(function (){
    $("#aboutUs").click(function (){
        $('html, body').animate({
            scrollTop: $("#scroll-people").offset().top
        }, 2000);
    });
});

$(document).ready(function (){
    $("#contactUs").click(function (){
        $('html, body').animate({
            scrollTop: $("#scroll-footer").offset().top
        }, 2000);
    });
});

$(document).ready(function (){
    $("#whatIs").click(function (){
        $('html, body').animate({
            scrollTop: $("#scroll-about").offset().top
        }, 1000);
    });
});

//walidacja formularza

