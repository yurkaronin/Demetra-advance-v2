
function changeText() {
  let prevSlideName = document.querySelector('.swiper-slide-prev .hero__title');
  let prevButton = document.querySelector('.hero__button-prev span');

  prevButton.textContent = prevSlideName.textContent;

  let nextSlideName = document.querySelector('.swiper-slide-next .hero__title');
  let nextButton = document.querySelector('.hero__button-next span');

  nextButton.textContent = nextSlideName.textContent;
}

// инициализация слайдера 
let swiper = new Swiper(".mySwiper", {

  navigation: {
    nextEl: ".hero__button-next",
    prevEl: ".hero__button-prev",
  },
  // autoplay: true,
  loop: true,

});

swiper.on('slideChange', function () {
  changeText();
 });