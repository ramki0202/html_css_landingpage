document.addEventListener("DOMContentLoaded", function () {
  // Initialize the first Swiper slider
  const swiper1 = new Swiper(".swiper1", {
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      640: { slidesPerView: 1, spaceBetween: 10 },
      768: { slidesPerView: 2, spaceBetween: 20 },
      1024: { slidesPerView: 4, spaceBetween: 30 },
    },
  });

  // Initialize the second Swiper slider
  const swiper2 = new Swiper(".swiper2", {
    loop: true,
    navigation: {
      nextEl: ".swiper2-button-next",
      prevEl: ".swiper2-button-prev",
    },
    breakpoints: {
      640: { slidesPerView: 1, spaceBetween: 10 },
      768: { slidesPerView: 2, spaceBetween: 20 },
      1024: { slidesPerView: 3, spaceBetween: 30 },
    },
  });
});
