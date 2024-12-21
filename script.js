document.addEventListener("DOMContentLoaded", function () {
  // Initialize the first Swiper slider
  const swiper1 = new Swiper(".swiper1", {
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next", // Matches slider 1 navigation buttons
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
      nextEl: ".swiper2-button-next", // Matches slider 2 navigation buttons
      prevEl: ".swiper2-button-prev",
    },
    breakpoints: {
      640: { slidesPerView: 1, spaceBetween: 10 },
      768: { slidesPerView: 2, spaceBetween: 20 },
      1024: { slidesPerView: 3, spaceBetween: 30 },
    },
  });
  const swiper3 = new Swiper(".swiper3", {
    loop: true,
    navigation: {
      nextEl: ".swiper3-button-next", // Matches slider 2 navigation buttons
      prevEl: ".swiper3-button-prev",
    },
    breakpoints: {
      640: { slidesPerView: 1, spaceBetween: 10 },
      768: { slidesPerView: 1, spaceBetween: 20 },
      1024: { slidesPerView: 1, spaceBetween: 30 },
    },
  });
  const swiper = new Swiper(".swiper1", {
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next", // Matches slider 1 navigation buttons
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      640: { slidesPerView: 1, spaceBetween: 10 },
      768: { slidesPerView: 2, spaceBetween: 20 },
      1024: { slidesPerView: 4, spaceBetween: 30 },
    },
  });
});
