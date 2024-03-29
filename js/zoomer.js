const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll('.lock-padding');
const html = document.querySelector('html');
const imageZoomer = document.querySelector('.popup__img img');
const images = document.querySelectorAll('.blog__image');
const buttonNext = document.querySelector('.popup__next');
const buttonPrev = document.querySelector('.popup__prev');
const totalImages = document.querySelector('.popup__total');
const currentImage = document.querySelector('.popup__number');

let unlock = true;

const timeout = 600;

// Если кликаем на стрелку вправо:
buttonNext.addEventListener('click', () => {
  buttonPrev.classList.remove('_hide');
  for (let i = 0; i < images.length; i++) {
    if (images[i].classList.contains('_active')) {
      images[i].classList.remove('_active');
      images[i + 1].classList.add('_active');
      imageZoomer.src = images[i + 1].src;
      currentImage.textContent = Number(currentImage.textContent) + 1;
      if (images[i + 2] === undefined) {
        buttonNext.classList.add('_hide');
      }
      break;
    }
  }
});

// Если кликаем на стрелку влево:
buttonPrev.addEventListener('click', () => {
  buttonNext.classList.remove('_hide');
  for (let i = 0; i < images.length; i++) {
    if (images[i].classList.contains('_active')) {
      images[i].classList.remove('_active');
      images[i - 1].classList.add('_active');
      imageZoomer.src = images[i - 1].src;
      currentImage.textContent = Number(currentImage.textContent) - 1;
      if (images[i - 2] === undefined) {
        buttonPrev.classList.add('_hide');
      }
      break;
    }
  }
});

if (popupLinks.length > 0) {
  for (let index = 0; index < popupLinks.length; index++) {
    const popupLink = popupLinks[index];
    popupLink.addEventListener("click", function(e) {
      const imageTarget = e.target.closest('.blog__image-box').querySelector('img');

      imageZoomer.src = imageTarget.src;
      imageTarget.classList.add('_active');
      totalImages.textContent = images.length;

      for (let i = 0; i < images.length; i++) {
        buttonNext.classList.remove('_hide');
        buttonPrev.classList.remove('_hide');
        if (images[i] === imageTarget && i === images.length - 1) {
          buttonNext.classList.add('_hide');
        }
        if (images[i] === imageTarget && i === 0) {
          buttonPrev.classList.add('_hide');
        }
        if (images[i].classList.contains('_active')) {
          currentImage.textContent = i + 1;
        }
      }

      const popupName = popupLink.getAttribute('href').replace('#', '');
      const curentPopup = document.getElementById(popupName);
      popupOpen(curentPopup);
      e.preventDefault();
    });
  }
}

// Закрывает попап с указанным классом
const popupCloseIcon = document.querySelectorAll('.popup__close');
if (popupCloseIcon.length > 0) {
  for (let index = 0; index < popupCloseIcon.length; index++) {
    const el = popupCloseIcon[index];
    el.addEventListener('click', function(e) {
      popupClose(el.closest('.popup')); // ЧТО ЗАКРЫВАЕМ (родитель)
      e.preventDefault();
    });
  }
}

function popupOpen(curentPopup) {
  if (curentPopup && unlock) {
    const popupActive = document.querySelector('.popup.open');
    if (popupActive) {
      popupClose(popupActive, false);
    } else {
      bodyLock();
    }
    curentPopup.classList.add('open');
    curentPopup.addEventListener("click", function(e) {
      if (!e.target.closest('.popup__content')) {
        popupClose(e.target.closest('.popup'));
      }
    });
  }
}

function popupClose(popupActive, doUnlock = true) {
  if (unlock) {
    for (let image of images) {
      image.classList.remove('_active');
    }
    popupActive.classList.remove('open');
    if (doUnlock) {
      bodyUnLock();
    }
  }
}

function bodyLock() {
  const lockPaddingValue = window.innerWidth - document.querySelector('body').offsetWidth + 'px';

  if (lockPadding.length > 0) {
    for (let index = 0; index < lockPadding.length; index++) {
      const el = lockPadding[index];
      el.style.paddingRight = lockPaddingValue;
    }
  }
  body.style.paddingRight = lockPaddingValue;
  body.classList.add('lock');
  html.classList.add('lock');

  unlock = false;
  setTimeout(function() {
    unlock = true;
  }, timeout);
}

function bodyUnLock() {
  setTimeout(function() {
    if (lockPadding.length > 0) {
      for (let index = 0; index < lockPadding.length; index++) {
        const el = lockPadding[index];
        el.style.paddingRight = '0px';
      }
    }
    body.style.paddingRight = '0px';
    body.classList.remove('lock');
    html.classList.remove('lock');
  }, timeout);

  unlock = false;
  setTimeout(function() {
    unlock = true;
  }, timeout);
}

document.addEventListener('keydown', function(e) {
  if (e.which === 27) {
    const popupActive = document.querySelector('.popup.open');
    popupClose(popupActive);
  }
});

(function() {
  // проверяем поддержку
  if (!Element.prototype.closest) {
    // реализуем
    Element.prototype.closest = function(css) {
      var node = this;
      while (node) {
        if (node.matches(css)) return node;
        else node = node.parentElement;
      }
      return null;
    };
  }
})();
(function() {
  // проверяем поддержку
  if (!Element.prototype.matches) {
    // определяем свойство
    Element.prototype.matches = Element.prototype.matchesSelector ||
      Element.prototype.mozMatchesSelector ||
      Element.prototype.msMatchesSelector;
  }
})();