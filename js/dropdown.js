const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.menu');
const arrows = document.querySelectorAll('.menu__arrow');
const account = document.querySelector('.account__menu');
const accountBtn = document.querySelector('.account');

// Слушаем нажатие на бургер
burger.addEventListener('click', () => {
  showDropdownMenu(menu);
});

// Слушаем нажатие на аккаунт
accountBtn.addEventListener('click', () => {
  showDropdownMenu(account);
});

// слушаем нажатие на любую стрелочку меню
for (let arrow of arrows) {
  arrow.addEventListener('click', (e) => {
    // При нажатии на стрелку находим соседнее с ней выпадающее меню:
    let dropMenu = e.target.closest('li').querySelector('.menu__dropdown');
    e.target.classList.toggle('_active');
    showDropdownMenu(dropMenu);
  });
}

// Функция показывает выпадающее меню в зависимости от переданного элемента:
function showDropdownMenu(elem) {
  if (elem.classList.contains('_active')) {
    // Скрываем выпадающее меню
    elem.classList.remove('_active');
    elem.style.maxHeight = 0;
  } else {
    // Показываем выпадающее меню
    elem.classList.add('_active');
    // Пересчитываем высоту выпадающего меню:
    elem.style.maxHeight = elem.scrollHeight + 'px';
    if (elem !== menu && elem !== account) {
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