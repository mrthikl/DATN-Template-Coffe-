const mediaMax1000 = window.matchMedia("(max-width: 1000px)");

$(".btnHeader").click(function () {
  $(this).toggleClass("openHamburger");
  $(".navigation").toggleClass("openHeader");
  $(".headerSecond").toggleClass("holdHeader");
});

// Swiper
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

// Rellax
var rellax = new Rellax(".rellax");

// observer API
const headerSecond = document.querySelector(".headerSecond");
const hero = document.querySelector(".hero");
const sectionOneOptions = {
  rootMargin: "-100px 0px 0px 0px",
  threshhold: 1,
};
const sectionOneObserver = new IntersectionObserver(function (
  entries,
  sectionOneObserver
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      $(".headerSecond").css({ top: "0" });
    } else {
      $(".headerSecond").css({ top: "-70px" });
    }
  });
},
sectionOneOptions);
sectionOneObserver.observe(hero);

// Scroll Header
var lastScroll = 0;
let openHeader = true;

if (mediaMax1000.matches) {
  jQuery(document).ready(function ($) {
    $(window).scroll(function () {
      setTimeout(function () {
        var scroll = $(window).scrollTop();
        if (scroll > lastScroll + 10) {
          $(".headerSecond").css({ top: "-70px" });
        } else if (scroll < lastScroll - 10) {
          $(".headerSecond").css({ top: "0" });
        }
        lastScroll = scroll;
      });
    });
  });
}
