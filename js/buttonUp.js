const arrowUp = document.querySelector('.arrow-up');
const bodyValue = body.getBoundingClientRect().top;

arrowUp.addEventListener('click', () => {
  window.scrollTo({
    top: bodyValue,
    behavior: "smooth"
  })
});

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 0) {
    arrowUp.classList.add('_active');
  } else {
    arrowUp.classList.remove('_active');
  }
});