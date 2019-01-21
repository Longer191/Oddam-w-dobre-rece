//pickup form slider

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

  //getting value of inputs
  let counter = 0;
  function getVal()
  {
    //bags number
    // let bags = document.querySelectorAll('.numberBags');
    // let bagsArr = [];
    // for (var i = 0; i < bags.length; i++) {
    //   bagsArr.push(bags[i].id);
    //   console.log(bagsArr)
    // }
    // console.log(bags)
    // let bag1 = document.getElementById('numberBags1').value;
    // let bag2 = document.getElementById('numberBags2').value;
    // let bag3 = document.getElementById('numberBags3').value;
    let bag4 = document.getElementById('numberBags4').value;
    let numBags = document.getElementById('num-of-given-bags');
    //type of donation
    const type1 = document.getElementById('checkbox-1').value;
    // const type2 = document.getElementById('checkbox-2');
    // const type3 = document.getElementById('checkbox-3');
    // const type4 = document.getElementById('checkbox-4');
    // const type5 = document.getElementById('checkbox-5');
    let withoutHome = document.getElementById('checkbox-7').value;   
    let nameOrg = document.getElementById('name-of-organisation');

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
      console.log(counter)
      // numBags.innerHTML = bag1 + ' worek ubrań w dobrym stanie dla dzieci';
      // numBags.innerHTML = bag2 + ' worki ubrań w dobrym stanie dla dzieci';
      // numBags.innerHTML = bag3 + ' worki ubrań w dobrym stanie dla dzieci';
      numBags.innerHTML = bag4 + ' worki ' + type1 + ' dla dzieci';
      nameOrg.innerHTML = 'Dla ' + withoutHome;
      streetOut.value = street.value;
      cityOut.value = city.value;
      postalOut.value = postal.value;
      telephoneOut.value = telephone.value;
      dateOut.value = date.value;
      timeOut.value = time.value;
      commentOut.value = comment.value;
      console.log(nextBtn)
      if (counter == 5) {
        document.querySelector('.nextBtn').innerText = "Potwierdzam";
        document.querySelector('.nextBtn').style.width = "150px"
      } else if (counter == 6) {
        document.querySelector('.nextBtn').style.display = "none";
        document.querySelector('.prevBtn').style.display = "none";
      }
    })
  }

  getVal();




