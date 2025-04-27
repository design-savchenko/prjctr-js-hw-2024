"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("toggleBtn");
  const statusText = document.getElementById("statusText");

  let isDarkMode = localStorage.getItem("darkMode") === "true";
  let lastToggle = localStorage.getItem("lastToggle");

  function updateUI() {
    document.body.style.backgroundColor = isDarkMode ? "#222" : "#fff";

    button.textContent = isDarkMode ? "Turn on" : "Turn off";

    if (isDarkMode) {
      button.classList.add("light-mode");
      button.classList.remove("dark-mode");
      statusText.style.color = "#fff";
    } else {
      button.classList.add("dark-mode");
      button.classList.remove("light-mode");
      statusText.style.color = "#000";
    }

    if (lastToggle) {
      statusText.textContent = `Last ${
        isDarkMode ? "turn off" : "turn on"
      }: ${lastToggle}`;
    } else {
      statusText.textContent = "";
    }
  }

  updateUI();

  button.addEventListener("click", function () {
    isDarkMode = !isDarkMode;

    let now = new Date();
    let formattedTime =
      now.getDate().toString().padStart(2, "0") +
      "-" +
      (now.getMonth() + 1).toString().padStart(2, "0") +
      "-" +
      now.getFullYear() +
      " " +
      now.getHours().toString().padStart(2, "0") +
      ":" +
      now.getMinutes().toString().padStart(2, "0") +
      ":" +
      now.getSeconds().toString().padStart(2, "0");

    localStorage.setItem("darkMode", isDarkMode);
    localStorage.setItem("lastToggle", formattedTime);

    lastToggle = formattedTime;

    updateUI();
  });
});
