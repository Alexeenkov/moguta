const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.menu');
const arrowsHeader = document.querySelectorAll('.menu__arrow_toggle');
const account = document.querySelector('.account__menu');
const accountBtn = document.querySelector('.account');
const footerSpoilerBtn = document.querySelectorAll('.spoiler-toggle');

// Слушаем нажатие на бургер
burger.addEventListener('click', () => {
  showDropdownMenu(menu);
});

// Слушаем нажатие на аккаунт
accountBtn.addEventListener('click', () => {
  showDropdownMenu(account);
});

// слушаем нажатие на любую стрелочку меню
for (let arrow of arrowsHeader) {
  arrow.addEventListener('click', (e) => {
    // При нажатии на стрелку находим соседнее с ней выпадающее меню:
    let dropMenu = e.target.closest('li').querySelector('.menu__dropdown');
    e.target.classList.toggle('_active');
    showDropdownMenu(dropMenu);
  });
}

// Слушаем изменение размеров экрана, при ширине меньше 979px активируем спойлеры в футере:
const matchMediaMaxWidth = window.matchMedia("(max-width: 979px)");

matchMediaMaxWidth.addEventListener('change', () => {
  if (matchMediaMaxWidth.matches) {
    for (let btn of footerSpoilerBtn) {
      btn.addEventListener('click', toggleMenuFooter);
    }
  }
});

function toggleMenuFooter(e) {
  // При нажатии на стрелку или заголовок находим соседнее выпадающее меню:
  let dropMenu = e.target.closest('.footer__spoiler').querySelector('.footer__list');
  e.target.classList.toggle('_active');
  showDropdownMenu(dropMenu, e.target);
}

// Слушаем изменение размеров экрана, при ширине больше 980px снимаем обработчик события с кнопок футера:
const matchMediaMinWidth = window.matchMedia("(min-width: 980px)");

matchMediaMinWidth.addEventListener('change', () => {
  if (matchMediaMinWidth.matches) {
    for (let btn of footerSpoilerBtn) {
      btn.removeEventListener('click', toggleMenuFooter);
    }
  }
});

for (let btn of footerSpoilerBtn) {
  if (matchMediaMaxWidth.matches) {
    btn.addEventListener('click', toggleMenuFooter);
  } else {
    btn.removeEventListener('click', toggleMenuFooter);
  }
}

// Функция показывает выпадающее меню в зависимости от переданного элемента:
function showDropdownMenu(elem, target) {
  if (elem.classList.contains('_active')) {
    // Скрываем выпадающее меню
    elem.classList.remove('_active');
    elem.style.maxHeight = 0;
  } else {
    // Показываем выпадающее меню
    elem.classList.add('_active');
    // Пересчитываем высоту выпадающего меню:
    elem.style.maxHeight = elem.scrollHeight + 'px';
    if (elem !== menu && elem !== account && target === undefined) {
      // Выпадающее меню-родитель:
      let parentMenu = elem.closest('.menu__item').querySelector('.menu__dropdown');
      // При нажатии на стрелки пересчитываем высоту главного меню:
      menu.style.maxHeight = menu.scrollHeight + elem.scrollHeight + 'px';
      if (parentMenu) {
        // Пересчитываем высоту меню-родителя, если такие есть:
        parentMenu.style.maxHeight = parentMenu.scrollHeight + elem.scrollHeight + 'px';
      }
    }
  }
}