  nextslide = function(n){
  showslides(slidenumber = slidenumber + n);
  }
  let slidenumber = 0;
  function showslides(n) {
  let slides = document.getElementsByClassName("promo");
  if (n >= slides.length) {
      slidenumber = 0;
    }
  if (n < 0) {
      slidenumber = slides.length-1;
    }
  for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  return  slides[slidenumber].style.display = "block", slidenumber;
}

