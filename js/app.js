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

$(document).ready(function (){
    $("#foundationList").click(function (){
        $('html, body').animate({
            scrollTop: $("#scroll-help").offset().top
        }, 1000);
    });
});

//zmiana rodzaju organizacji
let textToChange = document.querySelector('.long-text');
let nameToChange = document.querySelectorAll(".inside-text")
const changeFoundationOne = document.querySelector('#slide1')
const changeFoundationTwo = document.querySelector('#slide2')
const changeFoundationThree = document.querySelector('#slide3')

changeFoundationOne.addEventListener('click', () => {
    textToChange.innerHTML = 'W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.',
    nameToChange[0].innerHTML = 
    `<p class = "inside-text-font">Fundacja  “Dbam o Zdrowie”</p>
    <p>Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</p>
    <p class = 'display-none'>sadas</p>`,
    nameToChange[1].innerHTML = 
    `<p class = "inside-text-font">Fundacja  “Dla dzieci”</p>
    <p>Cel i misja: Pomoc zieciom z ubogich rodzin.</p>
    <p class = 'display-none'>sadas</p>`,
    nameToChange[2].innerHTML = 
    `<p class = "inside-text-font">Fundacja  “Bez domu” </p>
    <p>Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania</p>
    <p class = 'display-none'>sadas</p>`
});

changeFoundationTwo.addEventListener('click', () => {
    textToChange.innerHTML = 'Pomagamy również wszelkim organizacjom pozarządowym i charytatywnym, które nie są Fundacjami. Są to nasi Partnerzy, który zrobią dobry pożytek z rzeczy, które do nich trafią.',
    nameToChange[0].innerHTML = 
    `<p class = "inside-text-font">Organizacja  “Zdrowie jest istotne”</p>
    <p>Cel i misja: Pomoc osobom w kultywowaniu zdrowego trybu życia.</p>
    <p class = 'display-none'>sadas</p>`,
    nameToChange[1].innerHTML = 
    `<p class = "inside-text-font">Organizacja  “Lorem ipsum”</p>
    <p>Cel i misja: Lorem ipsum ipsum ipsum</p>
    <p class = 'display-none'>sadas</p>`,
    nameToChange[2].innerHTML = 
    `<p class = "inside-text-font">Organizacja  “Lorem ipsum”</p>
    <p>Cel i misja: Lorem ipsum ipsum ipsum</p>
    <p class = 'display-none'>sadas</p>`
})

changeFoundationThree.addEventListener('click', () => {
    textToChange.innerHTML = 'Wspieramy lokalne zbiórki organizowane przez indywidualne osoby, którym zależy na dobru społeczności, w której żyją. Sam też możesz zorganizować taką zbiórkę i pomóc tym, którzy są najbliżej.',
    nameToChange[0].innerHTML = 
    `<p class = "inside-text-font">Zbióra  “Zdrowie jest istotne”</p>
    <p>Cel i misja: Pomoc osobom w kultywowaniu zdrowego trybu życia.</p>
    <p class = 'display-none'>sadas</p>`,
    nameToChange[1].innerHTML = 
    `<p class = "inside-text-font">Zbiórka  “Lorem ipsum”</p>
    <p>Cel i misja: Lorem ipsum ipsum ipsum</p>
    <p class = 'display-none'>sadas</p>`,
    nameToChange[2].innerHTML = 
    `<p class = "inside-text-font">Zbiórka  “Lorem ipsum”</p>
    <p>Cel i misja: Lorem ipsum ipsum ipsum</p>
    <p class = 'display-none'>sadas</p>`
})







