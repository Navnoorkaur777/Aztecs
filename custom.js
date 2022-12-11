$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  dots:true,
  nav:true,
  mouseDrag:true,
  autoplay:true,
  animateOut: 'slideOutUp',
  responsive:{
    0:{
      items:3
    },
    600:{
      items:3
    },
    1000:{
      items:3
    }
  }
});
/*risk navbar starts*/
/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("hummara").style.top = "0";
  } else {
    document.getElementById("hummara").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}