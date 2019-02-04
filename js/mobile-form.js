  //mobile choice menu

 $("#checkbox-1").click(function(){
    $(".for-who").fadeToggle('fast');
  });
  $("#checkbox-4").click(function(){
    $(".for-who-books").fadeToggle('fast');
  });
  $("#checkbox-5").click(function(){
    $(".for-who-books-inne").fadeToggle('fast');
  });

  //slider

  let sliderImages = document.querySelectorAll('.slide'),
    sliderText = document.querySelectorAll('.change')
    prevBtn = document.querySelector('.prevBtn'),
    nextBtn = document.querySelector('.nextBtn'),
    stepsBtn = document.querySelectorAll('.rec'),
    current = 0;
    console.log(stepsBtn)
    function reset() {
      for (let i = 0; i < sliderImages.length; i++) {
          sliderImages[i].style.display = "none";
      }
      for (let i = 0; i < sliderText.length; i++){
        sliderText[i].style.display = 'none'
      }
      for (let i = 0; i < stepsBtn.length; i++){
      }
  }
  
  function startSlide() {
      reset();
      sliderImages[0].style.display = "block";
      sliderText[0].style.display = "block";
      stepsBtn[0].style.backgroundColor = "#008080";
      stepsBtn[0].style.color = "white";

    }
  
    function slideLeft() {
      reset();
      sliderImages[current - 1].style.display = "block";
      sliderText[current - 1].style.display = "block";
      // stepsBtn[current - 1].style.backgroundColor = "#F7CB11";
      // stepsBtn[current - 1].style.color = "black";
      stepsBtn[current].style.color = "black";
      stepsBtn[current].style.backgroundColor = "#F7CB11";
      

      current--;
      if (current === 0) {
        console.log(current)
        
  
        stepsBtn[0].style.backgroundColor = "#008080";
        stepsBtn[0].style.color = "white";
      }

    }
  
    function slideRight() {
      reset();
      sliderImages[current + 1].style.display = "block";
      sliderText[current + 1].style.display = "block";
      stepsBtn[current + 1].style.backgroundColor = "#008080";
      stepsBtn[current + 1].style.color = "white";
      current++;
      // if (current === 0) {
      //   console.log(current)
  
      //   stepsBtn[0].style.backgroundColor = "#008080";
      //   stepsBtn[0].style.color = "white";
      // }

    }
  
    prevBtn.addEventListener("click", function() {
      if (current === 0) {
        current = sliderImages.length;
        current = sliderText.length;
        current = stepsBtn.length;
      }
      slideLeft();
    });
  
    nextBtn.addEventListener("click", function() {
      if (current === sliderImages.length - 1) {
        current = -1;
      }
      if (current === sliderText.length - 1) {
        current = -1;
      }
      if (current === stepsBtn.length - 1) {
        current = -1;
      }
      slideRight();
    });
    startSlide();

    

    //getting value of inputs
let counter = 0;

let nameOrg = document.getElementById('name-of-organisation');
let numBags = document.getElementById('num-of-given-bags');

function getVal() {
  //street
  let streetOut = document.getElementById('streetOut');
  let street = document.getElementById('street');
  //city
  let city = document.getElementById('city');
  let cityOut = document.getElementById('cityOut');
  //postal
  let postal = document.getElementById('postal');
  let postalOut = document.getElementById('postalOut');
  //telephone
  let telephone = document.getElementById('telephone');
  let telephoneOut = document.getElementById('telephoneOut');
  //date
  let date = document.getElementById('date');
  let dateOut = document.getElementById('dateOut');
  //time
  let time = document.getElementById('time');
  let timeOut = document.getElementById('timeOut');
  //comment
  let comment = document.getElementById('comment');
  let commentOut = document.getElementById('commentOut');

  nextBtn.addEventListener('click', () => {
    counter ++;
    streetOut.value = street.value;
    cityOut.value = city.value;
    postalOut.value = postal.value;
    telephoneOut.value = telephone.value;
    dateOut.value = date.value;
    timeOut.value = time.value;
    commentOut.value = comment.value;
    console.log(counter)
    console.log(nextBtn)
    if (counter == 5) {
      document.querySelector('.nextBtn').innerText = "Potwierdzam";
      document.querySelector('.nextBtn').style.width = "150px"
    } else if (counter == 6) {
      document.querySelector('.nextBtn').style.display = "none";
      document.querySelector('.prevBtn').style.display = "none";
    }
  })
  prevBtn.addEventListener('click', () => {
    counter--
    if (counter < 5) {
      document.querySelector('.nextBtn').innerText = "Dalej";

    }
  })
}

getVal();

//getting checkbox values from the slides

const multiCheck = () => {
  //values of selected checkboxes from the first slide
  let result = '';
  let checkLength = document.querySelectorAll('input[name="coder"]');
  for (let i = 0; i < checkLength.length; i++) {
    let checkedVal = checkLength[i].checked;
    if (checkedVal) {
      result += checkLength[i].value;
    }
  }
  let showData = result;
  //values of selected options from the second slide
  let bagNumClass = document.querySelector('.numbers-bags');
  let selectedNumberOfBags = bagNumClass.options[bagNumClass.selectedIndex].value;
  //values of selected options from the third slide
  let cityChoice = document.querySelector('.citiesNumber');
  let selectedCity = cityChoice.options[cityChoice.selectedIndex].value;
  //for whom the items will be given
  let targetChoice = document.querySelectorAll('.options-btn');
  for (let i = 0; i < targetChoice.length; i++) {
    targetChoice[i].addEventListener('click', (e) => {
      let targetChoiceValue = targetChoice[i].value;
      numBags.innerHTML = selectedNumberOfBags + ' worki ' + showData + ' dla ' + targetChoiceValue;
    })
  }
  //name of the organisation
  let resultOrg = '';
  let orgLenght = document.querySelectorAll('input[name="org-name"]');
  for (let i = 0; i < orgLenght.length; i++) {
    let checkedOrg = orgLenght[i].checked;
    if (checkedOrg) {
      resultOrg += orgLenght[i].value;
    }
  }
  let showOrg = resultOrg;
  nameOrg.innerHTML = showOrg + selectedCity;
}

multiCheck()
  



