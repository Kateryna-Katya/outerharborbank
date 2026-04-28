import Swiper from 'swiper';
import { Autoplay, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

let gallerySwiper = null;

function initSwiper() {
  if (!gallerySwiper) {
    gallerySwiper = new Swiper('.gallery-swiper', {
      modules: [Navigation, Autoplay],
      slidesPerView: 1.2,
      spaceBetween: 16,
      loop: false,

      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },

      navigation: {
        nextEl: '.gallery-next',
        prevEl: '.gallery-prev',
      },

      breakpoints: {
        1440: {
          slidesPerView: 'auto',
          spaceBetween: 24,
        },
      },
    });
  }
}

initSwiper();