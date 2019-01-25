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
    current = 0;

    function reset() {
      for (let i = 0; i < sliderImages.length; i++) {
          sliderImages[i].style.display = "none";
      }
      for (let i = 0; i < sliderText.length; i++){
        sliderText[i].style.display = 'none'
      }
  }
  
  function startSlide() {
      reset();
      sliderImages[0].style.display = "block";
      sliderText[0].style.display = "block";
    }
  
    function slideLeft() {
      reset();
      sliderImages[current - 1].style.display = "block";
      sliderText[current - 1].style.display = "block";
      current--;
    }
  
    function slideRight() {
      reset();
      sliderImages[current + 1].style.display = "block";
      sliderText[current + 1].style.display = "block";
      current++;
    }
  
    prevBtn.addEventListener("click", function() {
      if (current === 0) {
        current = sliderImages.length;
        current = sliderText.length;
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
      slideRight();
    });
    startSlide();
  



