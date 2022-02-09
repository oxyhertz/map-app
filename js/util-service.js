"use strict";

function checkPasswords() {
  var elPass = document.getElementById("password");
  var elConfirmPass = document.getElementById("confirmPassword");

  if (elPass.value !== elConfirmPass.value)
    elConfirmPass.setCustomValidity("Passwords do not match");
  else elConfirmPass.setCustomValidity("");
}

function showAge(newVal) {
  document.getElementById("sAge").innerHTML = newVal;
}

function calcHoursTillBd(timestamp) {
  const currYear = new Date().getFullYear();
  const nextBdTime = new Date(timestamp).setFullYear(currYear);
  var hoursLeft = (nextBdTime - Date.now()) / 1000 / 60 / 60;

  return Math.trunc(hoursLeft);
}
