// jQuery(document).ready(function(){
    
//     "use strict";

//     $('#slider-carousel').carouFredSel({
//         responsive: true,
//         width: '100%',
//         circular: true,
//         scroll:{
//             items: 1,
//             duration: 500,
//             pauseOnHover: true,
//         },
//         auto: true,
//         items:{
//             visible:{
//                 min:1,
//                 max:1
//             },
//         height:"variable"
//         }
//     }); 
// });
// ---------------------
// $('.carousel').carousel({
//     interval:500
// });
// --------------
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
};