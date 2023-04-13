const sliderHomes = document.querySelector('.swiper-homes');
const sliderReviews = document.querySelector('.swiper-reviews');
const sliderAvailable = document.querySelector('.swiper-available');

const swiperAvailable = new Swiper(sliderAvailable, {
  slidesPerView: 4,
  spaceBetween: 16,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
  },
  breakpoints: {
    0: { slidesPerView: 2 },
    480: { slidesPerView: 2 },
    768: { slidesPerView: 3 },
    1024: { slidesPerView: 4 },
  },
});

const swiperHomes = new Swiper(sliderHomes, {
  slidesPerView: 4,
  spaceBetween: 16,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
  },
  breakpoints: {
    0: { slidesPerView: 2 },
    480: { slidesPerView: 2 },
    768: { slidesPerView: 3 },
    1024: { slidesPerView: 4 },
  },
});

const swiperReviews = new Swiper(sliderReviews, {
  slidesPerView: 3,
  loop: true,
  spaceBetween: 16,
  navigation: {
    nextEl: '.swiper-button-next',
  },
  pagination: {
    el: '.swiper-pagination',
  },
  breakpoints: {
    0: { slidesPerView: 1 },
    480: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  },
});
