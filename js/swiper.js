new Swiper('.banner__slider', {
  mode: 'horizontal',
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
});