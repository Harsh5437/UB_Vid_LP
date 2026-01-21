$(document).ready(function() {

  // 1️⃣ Hide preloader after page load
  $(window).on("load", function() {
    $(".preloader-bg").fadeOut();
    $("#preloader").delay(200).fadeOut("slow");
  });

  // 2️⃣ Initialize hero carousel
  $(".hero-carousel").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 4000,
    animateOut: 'fadeOut'
  });

  // 3️⃣ Navbar scroll effect
  $(window).on("scroll", function() {
    if ($(window).scrollTop() > 50) {
      $(".navbar").addClass("scrolled");
    } else {
      $(".navbar").removeClass("scrolled");
    }
  });

});
