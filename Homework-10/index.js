"use strict";

const taskInput = document.querySelector(".task-input");
const tasksList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const form = document.querySelector(".create-task-form");
const filterInput = document.querySelector(".filter-input");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const taskText = taskInput.value.trim();
  if (taskText === "") {
    return;
  }
  addTask(taskText);
  taskInput.value = "";
});

function addTask(taskText) {
  const tasks = getTasksFromLocalStorage();
  const taskId = crypto.randomUUID();
  const task = { id: taskId, text: taskText };
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  createSingleTaskElement(task);
  toggleClearButton();
}

function createSingleTaskElement(task) {
  const li = document.createElement("li");
  li.setAttribute("data-id", task.id);
  li.innerHTML = `
    <span>${task.text}</span>
    <div class="list-item">
      <i class='bx bxs-edit-alt edit-task' onclick="editTask(this.parentElement.parentElement)"></i>
      <i class='bx bx-trash delete-task' onclick="deleteTask(this.parentElement.parentElement)"></i>
    </div>
  `;
  tasksList.appendChild(li);
}

document.addEventListener("DOMContentLoaded", () => {
  const tasks = getTasksFromLocalStorage();
  tasks.forEach(createSingleTaskElement);
  toggleClearButton();
});

function deleteTask(taskElement) {
  const taskId = taskElement.getAttribute("data-id");
  let tasks = getTasksFromLocalStorage();
  tasks = tasks.filter((task) => task.id !== taskId);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  taskElement.remove();
  toggleClearButton();
}

function editTask(taskElement) {
  const taskId = taskElement.getAttribute("data-id");
  const span = taskElement.querySelector("span");
  const newText = prompt("Редагувати завдання:", span.textContent);
  if (newText === null || newText.trim() === "") return;

  let tasks = getTasksFromLocalStorage();
  const taskIndex = tasks.findIndex((task) => task.id === taskId);
  if (taskIndex !== -1) {
    tasks[taskIndex].text = newText;
    localStorage.setItem("tasks", JSON.stringify(tasks));
    span.textContent = newText;
  }
}

function getTasksFromLocalStorage() {
  return localStorage.getItem("tasks")
    ? JSON.parse(localStorage.getItem("tasks"))
    : [];
}

clearBtn.addEventListener("click", () => {
  localStorage.removeItem("tasks");
  tasksList.innerHTML = "";
  toggleClearButton();
});

function toggleClearButton() {
  if (tasksList.children.length === 0) {
    clearBtn.style.display = "none";
    tasksList.style.display = "none";
  } else {
    clearBtn.style.display = "flex";
    tasksList.style.display = "block";
  }
}

filterInput.addEventListener("keyup", () => {
  const filterText = filterInput.value.toLowerCase();
  document.querySelectorAll(".collection li").forEach((task) => {
    const taskText = task.querySelector("span").textContent.toLowerCase();
    if (taskText.includes(filterText)) {
      task.style.display = "";
    } else {
      task.style.display = "none";
    }
  });
});
