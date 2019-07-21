window.onscroll = function () {
    myFunction()
  };

  var header = document.getElementById("myHeader");
  var sticky = header.offsetTop;
  var shrink = document.offsetTop;

  function myFunction() {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }

    if (document.body.scrollTop > 580 || document.documentElement.scrollTop > 580) {
      header.classList.add("headertoggle");
    } else {
      header.classList.remove("headertoggle");
    }
  }
//   <!-- countdown js -->
  var countDownDate = new Date("jul 27 , 2019 ").getTime();
  var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    days = (days < 10) ? "0" + days : days;
    hours = (hours < 10) ? "0" + hours : hours;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

  }, 1000);

$(document).ready(function(){
	
	// Lift card and show stats on Mouseover

  $('#product-card2').hover(function(){
    $(this).addClass('animate');
    $('div.carouselNext, div.carouselPrev').addClass('visible');			
   }, function(){
    $(this).removeClass('animate');			
    $('div.carouselNext, div.carouselPrev').removeClass('visible');
});	
$('#product-card3').hover(function(){
    $(this).addClass('animate');
    $('div.carouselNext, div.carouselPrev').addClass('visible');			
   }, function(){
    $(this).removeClass('animate');			
    $('div.carouselNext, div.carouselPrev').removeClass('visible');
});	
$('#product-card1').hover(function(){
  $(this).addClass('animate');
  $('div.carouselNext, div.carouselPrev').addClass('visible');			
 }, function(){
  $(this).removeClass('animate');			
  $('div.carouselNext, div.carouselPrev').removeClass('visible');
});	
});
var galleryThumbs = new Swiper('.gallery-thumbs', {
  spaceBetween: 10,
  slidesPerView: 4,
  loop: true,
  freeMode: true,
  loopedSlides: 5, //looped slides should be the same
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
});
var galleryTop = new Swiper('.gallery-top', {
  spaceBetween: 10,
  loop:true,
  loopedSlides: 5, //looped slides should be the same
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  thumbs: {
    swiper: galleryThumbs,
  },
});
function myFunction1() {
  var x = document.getElementById("navbarSupportedContent");
  if (x.className === "navbar-collapse") {
    x.className += " responsive";
  } else {
    x.className = "navbar-collapse";
  }
}