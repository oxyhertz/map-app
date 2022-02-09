"use strict";

function init() {
  setBgc();
  setTextColor();
  dispHrsToBd();
}

function dispHrsToBd() {
  if (!getCurrUser()) return;
  const txt = `There are only ${calcHoursTillBd(
    getCurrUser().bdTimeStamp
  )} hours until your Birthday!🎁`;
  document.querySelector(".birthday-hours").innerText = txt;
}
