const clockHandHour = document.querySelector(".clock-hand-hour");
const clockHandMinute = document.querySelector(".clock-hand-minute");
const clockHandSecond = document.querySelector(".clock-hand-second");

clockHandHour.style.transform = "translate(-50%, -100%) rotate(140deg)";

const translate = "translate(-50%, -100%)";
function setRotation(element, degrees) {
  element.style.transform = `${translate} rotate(${degrees}deg)`;
}

const hourDegrees = (hour, minute) => {
  return hour * 30 + minute * 0.5;
};

const minuteDegrees = (minute) => {
  return minute * 6;
};

const secondDegrees = (second) => {
  return second * 6;
};

function setTime() {
  const date = new Date();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  setRotation(clockHandHour, hourDegrees(hour, minute));
  setRotation(clockHandMinute, minuteDegrees(minute));
  setRotation(clockHandSecond, secondDegrees(second));

  console.log(hour, minute, second);
}

const intervalID = setInterval(setTime, 1000);
