"use strict";

const elementTitle = document.querySelectorAll(".wrapper h2");
const sectionElement = document.getElementById("headerTwo");

const firstSectionElement = document.querySelector(".firstSection h2");
const ul = document.getElementsByTagName("ul")[0];
if (ul) {
  const li = ul.getElementsByTagName("li")[4];
  console.log(li);
}

const selectByClass = document.getElementsByClassName("hatredLevelBlock");

console.log(elementTitle);
console.log(sectionElement);
console.log(firstSectionElement);
console.log(selectByClass);
