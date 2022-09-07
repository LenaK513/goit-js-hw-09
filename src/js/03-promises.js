import { Notify } from 'notiflix/build/notiflix-notify-aio'

const form = document.querySelector('.form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  delay = form.elements.delay.value;
  step = form.elements.step.value;
  amount = form.elements.amount.value;


for (let index = 1; index < amount; index +=1) {
  
  function createPromise(index, delay) {
    return new Promise((resolve, reject)=>{
      const shouldResolve = Math.random() > 0.3;
    setTimeout((delay) => {
      if (shouldResolve) {
        Notify.success(`✔ Fulfilled promise ${index} in ${delay}ms`)
    } else {
      Notify.failure(`✖ Rejected promise ${index} in ${delay}ms`)
    }
    }, delay);

    delay +=step;
   
    }) 
  }

}
createPromise({position, delay})
  .then(({ position, delay }) => {
    console.log(`✔ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`✖ Rejected promise ${position} in ${delay}ms`);
  });