const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');

let intervalId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

btnStart.addEventListener('click', onClickColorChange);

// btnStop.addEventListener('click', () => {
//   console.log(9);
// });
intervalId = setInterval(() => {}, 1000);
