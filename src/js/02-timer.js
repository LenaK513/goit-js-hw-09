import flatpickr from 'flatpickr';
// Додатковий імпорт стилів

import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const valueDays = document.querySelector('[data-days]');
const valueHours = document.querySelector('[data-hours]');
const valueMin = document.querySelector('[data-minutes]');
const valueSec = document.querySelector('[data-seconds]');
const inputFp = document.querySelector('#datetime-picker');
const btnStart = document.querySelector('[data-start]');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(`${selectedDates[0]}`);

    if (selectedDates[0].getTime() < options.defaultDate.fp_incr(1).getTime()) {
      console.log(options.defaultDate.fp_incr(1));

      Notify.failure('Please, choose a date in the future');
    } else {
      btnStart.disabled = false;
    }
  },
};

let fp = flatpickr(inputFp, options);
console.log(fp);

fp.close();
btnStart.disabled = true;
let timerId = null;
const onTimerCount = () => {
  timerId = setInterval(() => {
    let currentDate = new Date();
    console.log(currentDate);
    let inputDate = new Date(inputFp.value).getTime();

    let delta = inputDate - currentDate;
    if (delta > 1000) {
      btnStart.disabled = true;
    } else {
      if (delta <= 1000) delta = 0;
      clearInterval(timerId);
    }

    const { days, hours, minutes, seconds } = convertMs(delta);
    console.log(`${days}:${hours}:${minutes}:${seconds}`);
    clockInterface({ days, hours, minutes, seconds });
  }, 1000);
};

btnStart.addEventListener('click', onTimerCount);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

// const timerInterface = document.querySelector('.timer');
function clockInterface({ days, hours, minutes, seconds }) {
  valueDays.innerText = days;
  valueHours.innerText = hours;
  valueMin.innerText = minutes;
  valueSec.innerText = seconds;
}
