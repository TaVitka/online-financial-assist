import Swiper, { Navigation, Pagination, EffectFade, Scrollbar } from 'swiper';

const swiperClients = new Swiper('.clients__slider', {
  slidesPerView: 1,
  spaceBetween: 20,
  autoHeight: true,
  loop: true,
  speed: 700,
  autoplay: {
    delay: 200,
  },
  modules: [Navigation, Scrollbar, Pagination, EffectFade],
  draggable: true,
  grabCursor: true,
  navigation: {
    nextEl: '.swiper-button-next'
  },
  pagination: {
    clickable: true,
    el: '.clients__wrapper .swiper-pagination',
  },
});