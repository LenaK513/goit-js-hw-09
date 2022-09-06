import flatpickr from 'flatpickr';
// Додатковий імпорт стилів

import 'flatpickr/dist/flatpickr.min.css';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};
console.log(options.defaultDate);
let fp = flatpickr('#datetime-picker', { options });
console.log(fp);
let input = document.querySelector('#datetime-picker');
// console.log(input);
const btnStart = document.querySelector('[data-start]');
btnStart.disabled = true;
document.querySelector('#datetime-picker').flatpickr({
  onClose: function (selectedDates) {
    if (selectedDates[0] > options.defaultDate.fp_incr(-1)) {
      btnStart.disabled = false;
    } else {
      btnStart.disabled = true;
      window.alert('Please choose a date in the future');
    }
    console.log(selectedDates[0]);
  },
});

const onTimerCount = () => {
  setInterval(() => {
    const currentDate = new Date();
    const inputDate = new Date(
      document.getElementById('datetime-picker').value
    ).getTime();

    const delta = inputDate - currentDate;
    // // console.log(options.selectedDates[0]);
    console.log(delta);

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

const valueDays = document.querySelector('[data-days]');
const valueHours = document.querySelector('[data-hours]');
const valueMin = document.querySelector('[data-minutes]');
const valueSec = document.querySelector('[data-seconds]');

const timerInterface = document.querySelector('.timer');
function clockInterface({ days, hours, minutes, seconds }) {
  valueDays.innerText = days;
  valueHours.innerText = hours;
  valueMin.innerText = minutes;
  valueSec.innerText = seconds;
}
