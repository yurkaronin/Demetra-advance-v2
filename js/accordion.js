let accordButtons = document.querySelectorAll('.custom-accordion__button');
//
// for (let accordButton of accordButtons) {
//   accordButton.onclick = function () {
//     accordButton.classList.toggle('active');
//   };
// }

for (let accordButton of accordButtons) {
  accordButton.onclick = function () {
    accordButton.classList.toggle('active');
  };
}