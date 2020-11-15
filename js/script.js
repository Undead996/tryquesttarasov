
  function nextslide(n){
  showslides(slidenumber = slidenumber + n);
  }
  let slidenumber = 0;
  function showslides(n) {
  let slides = document.querySelectorAll(".promo");
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


function test(){
  let btn = document.querySelector(".mob")
  let mobileNav = document.querySelector(".warpul");
  btn.addEventListener('click', function(){
      if(mobileNav.style.display == "block"){
        mobileNav.style.display = "none"
      }else{mobileNav.style.display = "block"}
  }
  )
  let bd = document.querySelector("body")
  bd.addEventListener('click', function(ev){
    let target = ev.target || ev.srcElement;
    if(target.nodeName !== "IMG"){
      mobileNav.style.display = "none"}
  })


  let catNav = document.querySelector(".hide")
  let cat = document.querySelector("#n3");
  cat.addEventListener("mouseover", function(){
    catNav.style.display = "block"
  })
  bd.addEventListener("click", function(){
    catNav.style.display = "none"
  })
  
}



