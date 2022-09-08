import { Notify } from 'notiflix/build/notiflix-notify-aio'

const form = document.querySelector('.form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  delay = form.elements.delay.value;
  step = form.elements.step.value;
  amount = form.elements.amount.value;
  console.log(delay)
  console.log(step)
  console.log(amount)



