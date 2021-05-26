$(".btnHeader").click(function () {
  $(this).toggleClass("openHamburger");
  $(".navigation").toggleClass("openHeader");
});

const swiper = new Swiper(".swiper-container", {
  direction: "horizontal",
  loop: true,
  effect: "fade",
  parallax: true,
  speed: 800,
  pagination: {
    el: ".swiper-pagination",
    clickable: "true",
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var rellax = new Rellax(".rellax");
