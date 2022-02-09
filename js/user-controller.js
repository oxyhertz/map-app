"use strict";

function setBgc() {
  const bodyEl = document.querySelector("body");
  bodyEl.style.backgroundColor = getUserBgc();
}

function setTextColor() {
  const bodyEl = document.querySelector("body");
  bodyEl.style.color = getUserTextColor();
}
