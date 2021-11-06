new Swiper('.banner__slider', {
  navigation: {
    nextEl: '.banner__next',
    prevEl: '.banner__prev'
  },
  pagination: {
    el: '.banner__pagination',
    clickable: true,
  },
  // Количество слайдов для показа
  slidesPerView: 1,
  slidesPerGroup: 1,
  // если слайдов меньше чем нужно
  watchOverflow: true,
  // Бесконечный слайдер
  loop: true,
  // Отсутупы между слайдами
  spaceBetween: 0,
  // Автопрокрутка
  autoplay: {
    delay: 2500,
    disableOnInteraction: true,
  },
  // Обновление при изменении элелментов
  observer: true,
  observeParents: true,
  observeSlideChildren: true,
});

new Swiper('.product__slider', {
  navigation: {
    nextEl: '.product__next',
    prevEl: '.product__prev'
  },
  // Количество слайдов для показа
  slidesPerView: 1,
  slidesPerGroup: 1,
  // если слайдов меньше чем нужно
  watchOverflow: true,
  // Бесконечный слайдер
  loop: true,
  // Отсутупы между слайдами
  spaceBetween: 30,
  // Обновление при изменении элелментов (для табов)
  observer: true,
  observeParents: true,
  observeSlideChildren: true,
  breakpoints: {
    397: {
      slidesPerView: 2,
    },
    651: {
      slidesPerView: 3,
    },
    980: {
      slidesPerView: 4,
    },
    1450: {
      slidesPerView: 5,
    },
  },
});

new Swiper('.special__slider', {
  navigation: {
    nextEl: '.special__next',
    prevEl: '.special__prev'
  },
  // Количество слайдов для показа
  slidesPerView: 1,
  slidesPerGroup: 1,
  // если слайдов меньше чем нужно
  watchOverflow: true,
  // Бесконечный слайдер
  loop: true,
  // Отсутупы между слайдами
  spaceBetween: 30,
  breakpoints: {
    397: {
      slidesPerView: 2,
    },
    651: {
      slidesPerView: 3,
    },
    980: {
      slidesPerView: 4,
    },
    1450: {
      slidesPerView: 5,
    },
  },
});

new Swiper('.shop__slider', {
  navigation: {
    nextEl: '.shop__next',
    prevEl: '.shop__prev'
  },
  // Количество слайдов для показа
  slidesPerView: 1,
  slidesPerGroup: 1,
  // если слайдов меньше чем нужно
  watchOverflow: true,
  // Бесконечный слайдер
  loop: true,
  // Отсутупы между слайдами
  spaceBetween: 30,
  breakpoints: {
    397: {
      slidesPerView: 2,
    },
    597: {
      slidesPerView: 3,
    },
    980: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 5,
    },
    1200: {
      slidesPerView: 5,
    },
    1450: {
      slidesPerView: 6,
    },
  },
});

const blogSlider = new Swiper('.blog__slider', {
  // Количество слайдов для показа
  slidesPerView: 1,
  slidesPerGroup: 1,
  speed: 600,
  // если слайдов меньше чем нужно
  watchOverflow: true,
  // Бесконечный слайдер
  loop: false,
  // Отсутупы между слайдами
  spaceBetween: 20,
  // Автопрокрутка
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  // Обновление при изменении элементов
  observer: true,
  observeParents: true,
  observeSlideChildren: true,
  breakpoints: {
    497: {
      slidesPerView: 2,
    },
    997: {
      slidesPerView: 3,
    },
    1217: {
      slidesPerView: 4,
    },
  },
});