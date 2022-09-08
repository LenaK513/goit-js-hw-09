import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('.form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  delayTime = form.elements.delay.value;
  step = form.elements.step.value;
  amount = form.elements.amount.value;
  // console.log(delayTime);
  // console.log(step);
  // console.log(amount);

  for (let index = 1; index <= amount; index += 1) {
    createPromise(index, delayTime)
      .then(({ position, delay }) => {
        Notify.success(`✔ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    delayTime += step;
  }

  function createPromise(position, delay) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const shouldResolve = Math.random() > 0.3;
        if (shouldResolve) {
          resolve({ position, delay });
          console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
        } else {
          reject({ position, delay });
          console.log(`❌ Rejected promise ${position} in ${delay}ms`);
        }
      }, delayTime);
    });
  }
}
