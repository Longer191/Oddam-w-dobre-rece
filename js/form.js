//formularz zmiana podsekcji

// const formBtn = document.querySelector('.formBtn');
// let instructToChange = document.querySelector('.instruct-to-change');
// let formToChange = document.querySelector('.pick-form')
// let stepstoChange= document.querySelector('.steps')

// let bagsNumber = document.querySelector('.bagsNumber')

// let flexBtns = document.querySelector('.flex-btns')
// console.log(flexBtns)

// formBtn.addEventListener('click', () => {
//     stepstoChange.innerHTML = "Krok 2/4"
//     instructToChange.innerHTML = "Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:",
//     formToChange.innerHTML = 
//     `<label>Liczba 60 l worków: </label>
//     <select name="bags" class = "bagsNumber">
//     <option value="wybierz">-wybierz-</option>
//     <option value="1">1</option>
//     <option value="2">2</option>
//     <option value="3">3</option>
//     <option value="4">4</option>
//     </select>`
//     createBtn();
//     stepstoChange.innerHTML = "Krok 3/4"
//     instructToChange.innerHTML = "Lokalizacja:",
//     formToChange.innerHTML = 
//     `<select name="cities" class = "citiesNumber">
//     <option value="wybierz">-wybierz-</option>
//     <option value="Warszawa">Warszawa</option>
//     <option value="Kraków">Kraków</option>
//     <option value="Wrocław">Wrocław</option>
//     <option value="Gdańsk">Gdańsk</option>
//     </select>`
// })

// const createBtn = () => {
//     let prevBtn = document.createElement('button');
//     prevBtn.classList.add('prev')
//     let prevText = document.createTextNode('Wstecz');
//     prevBtn.appendChild(prevText);
//     flexBtns.appendChild(prevBtn);
//     if (prevBtn) {
//         return;
//     }
// }

// var btn = document.querySelector('.list_arrow');
// var choices = document.querySelectorAll('.list_panel li')

//  btn.addEventListener('click', function (event) {
//     for (var i = 0; i < choices.length; i++) {
//         choices[i].style.display = 'block'
//     }  
// }) 

const next = document.querySelector('.nextBtn')
const step1 = document.querySelectorAll('.step1')
const step2 = document.querySelector('.step2')
const step3 = document.querySelector('.step3')
console.log(step1)

// next.addEventListener('click', () => {
//     for
//     step1.classList.toggle('display-none')
//     step2.classList.toggle('display-block')
// })
// next.addEventListener('click', () => {
//     step2.classList.toggle('display-none')
//     step3.classList.toggle('display-block')
// })

// var slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//     var i;
//     var slides = document.getElementsByClassName("step1");
//     const next = document.querySelector('.nextBtn')
//     if (n > slides.length) {slideIndex = 1}
//     if (n < 1) {slideIndex = slides.length}
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     next.className = next.className.replace('active', '')
//     slides[slideIndex-1].style.display = "block"; 
//     next[slideIndex-1].className += " active";
//     console.log(next.className)
// }

let sliderImages = document.querySelectorAll('.slide'),
    prevBtn = document.querySelector('.prevBtn'),
    nextBtn = document.querySelector('.nextBtn'),
    current = 0;

function reset() {
    for (let i = 0; i < sliderImages.length; i++) {
        sliderImages[i].style.display = "none";
    }
}

function startSlide() {
    reset();
    sliderImages[0].style.display = "block";
    console.log(sliderImages[2])
  }

  function slideLeft() {
    reset();
    sliderImages[current - 1].style.display = "block";
    current--;
  }

  function slideRight() {
    reset();
    sliderImages[current + 1].style.display = "block";
    current++;
  }

  prevBtn.addEventListener("click", function() {
    if (current === 0) {
      current = sliderImages.length;
    }
    slideLeft();
  });

  nextBtn.addEventListener("click", function() {
    if (current === sliderImages.length - 1) {
      current = -1;
    }
    slideRight();
  });
  startSlide();




