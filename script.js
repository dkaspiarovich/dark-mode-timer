"use strict";

const timerElement = document.querySelector(".timer__inner");
let minutes = document.querySelector(".timer__minutes");
let seconds = document.querySelector(".timer__seconds");
let lapMinutes = document.querySelector(".lap__minutes");
let lapSeconds = document.querySelector(".lap__seconds");
const buttonStart = document.querySelector(".button__start");
const buttonPause = document.querySelector(".button__pause");
const buttonStop = document.querySelector(".button__stop");
const buttonlap = document.querySelector(".button__lap");
const clearlap = document.querySelector(".button__clear__lap");
const lapTimer = document.querySelector(".lap__timer");
const buttonAll = document.querySelector(".button__all");
const lapBlock = document.querySelector(".lap__block");

let second = 0;
let minute = 0;
let interval;

let active = false;

// ---------- START TIMER FUNCTION

const startTimer = function () {
  active = true;
  seconds.textContent = "00";
  second++;
  if (second <= 9) {
    seconds.textContent = "0" + second;
    if (!buttonlap) {
      lapSeconds.textContent = "0" + second;
    }
  } else if (second < 60) {
    seconds.textContent = second;
    if (!buttonlap) {
      lapSeconds.textContent = second;
    }
  }
  if (second > 59) {
    minutes.textContent = "00";
    minutes.textContent = lapMinutes.textContent;
    minute++;
    second = 0;
    if (minute <= 9) {
      minutes.textContent = "0" + minute;
      if (!clearlap) {
        lapMinutes.textContent = "0" + minute;
      }
    } else if (minute > 9) {
      minutes.textContent = minute;
      if (!clearlap) {
        lapMinutes.textContent = minute;
      }
    }
  }
};

// ---------- BUTTON START

buttonStart.addEventListener("click", function () {
  if (!active) {
    interval = setInterval(startTimer, 1000);
    buttonAll.classList.remove("hidden");
    lapBlock.classList.remove("hidden");
  }
});

// ---------- BUTTON PAUSE

buttonPause.addEventListener("click", function () {
  active = false;
  clearInterval(interval);
});

// ---------- BUTTON STOP

buttonStop.addEventListener("click", function () {
  active = false;
  clearInterval(interval);
  second = 0;
  minute = 0;
  seconds.textContent = "00";
  minutes.textContent = "00";
  buttonAll.classList.add("hidden");
  lapBlock.classList.add("hidden");
});

// ---------- BUTTON LAP

buttonlap.addEventListener("click", function () {
  lapMinutes.style.color = "#d9d9d9";
  lapSeconds.style.color = "#d9d9d9";

  lapSeconds.textContent = seconds.textContent;
  lapMinutes.textContent = minutes.textContent;
});

// ---------- BUTTON CLEAR LAP

clearlap.addEventListener("click", function () {
  lapMinutes.style.color = "#808080";
  lapSeconds.style.color = "#808080";

  lapSeconds.textContent = "00";
  lapMinutes.textContent = "00";
});
