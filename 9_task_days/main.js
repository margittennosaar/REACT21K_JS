let form = document.querySelector("form");
let text = document.querySelector("#answer");
let countdown = document.querySelector("#timer");

let alldays = [];
let businessdays = [];
let countdowntimer;

const daysLeft = (event) => {
  event.preventDefault();

  let startDate = new Date(document.getElementById("start").value);
  let endDate = new Date(document.getElementById("end").value);
  let title = document.getElementById("title").value;

  while (startDate < endDate) {
    startDate.setDate(startDate.getDate() + 1);
    alldays.push(startDate);
    if (startDate.getDay() !== 6 && startDate.getDay() !== 0) {
      businessdays.push(startDate);
    }
  }

  text.textContent = `There are ${alldays.length} days and ${businessdays.length} workdays until ${title}`;

  form.reset();
  alldays = [];
  businessdays = [];

  thisismytimerfunction(endDate, title);
};

const thisismytimerfunction = (endDate, title) => {
  console.log(endDate);
  if (countdowntimer) {
    clearInterval(countdowntimer);
  }

  countdowntimer = setInterval(function () {
    let now = new Date();
    let timeleft = endDate - now;

    let days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeleft / (1000 * 60 * 60)) % 24);
    let minutes = Math.floor((timeleft / 1000 / 60) % 60);
    let seconds = Math.floor((timeleft / 1000) % 60);

    countdown.textContent = `Countdown from today to ${title}: ${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;
  }, 1000);
};

form.addEventListener("submit", daysLeft);
