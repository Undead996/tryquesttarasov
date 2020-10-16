let slidenumber = 1;

function nextslide(n) {
  showslides(slidenumber += n);
}

function showslides(n) {
  let i;
  let slides = document.getElementsByClassName("promo");
  if (n > slides.length) {
      slidenumber = 1;
    }
  if (n < 1) {
      slidenumber = slides.length
    }
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }

  return slides[slidenumber-1].style.display = "block";
}