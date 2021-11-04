const slidersProduct = document.querySelectorAll('.product__slider');
const tabsProduct = document.querySelectorAll('.product__tab');

for (let i = 0; i < tabsProduct.length; i++) {
  tabsProduct[i].addEventListener('click', (e) => {
    e.target.classList.add('_active');
    slidersProduct[i].classList.add('_active');
    for (let i = 0; i < tabsProduct.length; i++) {
      if (tabsProduct[i] !== e.target) {
        tabsProduct[i].classList.remove('_active');
        slidersProduct[i].classList.remove('_active');
      }
    }
  });
}