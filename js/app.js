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
const validateButton = document.querySelector('.send-button')
console.log(validateButton);

validateButton.addEventListener('click', function(e) {
    var nameForm = document.querySelector('#form_username');
    if (nameForm.value === "") {
        e.preventDefault();
        alert('Proszę podaj swoje imię');
    } else {
        nameForm.setCustomValidity('');
    }
})

// var button = document.getElementById('button');

// button.addEventListener('click', function(e) {
//     var textBox = document.getElementById('textBox');

//     if (textBox.value !== 'TEST') {
//         e.preventDefault();
//         textBox.setCustomValidity('Powinieneś napisać TEST!');
//     } else {
//         textBox.setCustomValidity('');
//     }
// });