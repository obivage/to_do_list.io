"use strick";

const inputTask = document.getElementById("input_text");
const taskContainer = document.getElementById("ul_container");

function addTask() {
  if (inputTask.value === "") {
    alert("No task added");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputTask.value;
    taskContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    storeData();
  }
  inputTask.value = "";
}

taskContainer.addEventListener(
  "click",
  function (outline) {
    if (outline.target.tagName === "LI") {
      outline.target.classList.toggle("checked");
      storeData();
    } else if (outline.target.tagName === "SPAN") {
      outline.target.parentElement.remove();
      storeData();
    }
  },
  false
);

function storeData() {
  localStorage.setItem("data", taskContainer.innerHTML);
}

function displayTask() {
  taskContainer.innerHTML = localStorage.getItem("data");
}
displayTask();
