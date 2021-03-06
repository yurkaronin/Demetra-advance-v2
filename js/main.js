"use strict";
let header = document.querySelector('.header');
// let test = header.style.height;
// динамическая высота шапки сайта и соответствующий верхний padding в main 
let headerLogo = document.querySelector('.logo__image');
let menuButton = document.querySelector('.button-menu');

document.addEventListener("DOMContentLoaded", () => {
  window.addEventListener('scroll', function () {
    if (window.pageYOffset > header.offsetHeight) {
      header.classList.add('sticky');
      headerLogo.src = 'img/trademark.svg';
    } else {
      header.classList.remove('sticky');
      headerLogo.src = 'img/logo-rus--wh.svg';
    }
  });
});



// прилипающая шапка со сменным лого в зависимости от того какая сейчас страница

// кнопка меню
if (menuButton) {
  menuButton.addEventListener('click', function (r) {
    document.body.classList.toggle('custom-lock');
    document.body.classList.toggle('active');
    menuButton.classList.toggle('active');
  });

}

// Подмена лого в шапке, при открытом мобильном меню

menuButton.addEventListener('click', function (е) {
  if (menuButton.classList.contains('active')) {
    headerLogo.src = 'img/logo-rus.svg';
  } else {
    headerLogo.src = 'img/logo-rus--wh.svg';
  }

});



// плавный скролл по страницам
SmoothScroll({
  // Время скролла 400 = 0.4 секунды
  animationTime: 800,
  // Размер шага в пикселях
  stepSize: 75,

  // Дополнительные настройки:

  // Ускорение
  accelerationDelta: 30,
  // Максимальное ускорение
  accelerationMax: 2,

  // Поддержка клавиатуры
  keyboardSupport: true,
  // Шаг скролла стрелками на клавиатуре в пикселях
  arrowScroll: 50,

  // Pulse (less tweakable)
  // ratio of "tail" to "acceleration"
  pulseAlgorithm: true,
  pulseScale: 4,
  pulseNormalize: 1,

  // Поддержка тачпада
  touchpadSupport: true,
});

// Подмена логотипа в подвале при наведении
let logotypeLink = document.querySelector('.js-logotype-link');
let footerLogo = document.querySelector('.js-footer-logotype');

logotypeLink.addEventListener('mouseover', function (e) {
  footerLogo.src = 'img/logo-rus--color.svg';
});

logotypeLink.addEventListener('mouseout', function (e) {
  footerLogo.src = 'img/logo-rus--wh.svg';
});