"use strict";
const STORAGE_KEY = "userData";

function saveUserData(ev) {
  ev.preventDefault();

  const userEmail = document.querySelector("[name=user-email]").value;
  const userAge = document.querySelector("[name=user-age").value;
  const bgc = document.querySelector("[name=bgc]").value;
  const textColor = document.querySelector("[name=text-color]").value;
  const userBd = document.querySelector("[name=user-bd]").value;
  const userBt = document.querySelector("[name=user-bt]").value;

  const userData = {
    userEmail,
    userAge,
    bgc,
    textColor,
    userBd,
    userBt,
    bdTimeStamp: Date.parse(`${userBd} ${userBt}`),
  };

  saveToStorage(STORAGE_KEY, userData);
}

function getUserBgc() {
  return loadFromStorage(STORAGE_KEY)?.bgc ? loadFromStorage(STORAGE_KEY).bgc : "#fff";
}

function getUserTextColor() {
  return loadFromStorage(STORAGE_KEY)?.textColor ? loadFromStorage(STORAGE_KEY).textColor : "#000";
}

function getCurrUser() {
  if (loadFromStorage(STORAGE_KEY)) return loadFromStorage(STORAGE_KEY);
  else return null;
}
