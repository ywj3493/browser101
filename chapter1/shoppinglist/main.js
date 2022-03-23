"use strict";

const addBtn = document.querySelector(".addBtn");
const addTextField = document.querySelector(".addTextField");
const list = document.querySelector(".list");

addBtn.addEventListener("click", () => {
  console.dir("click");
  let li = document.createElement("div");
  li.classList.add(`inner`);
  let deleteBtn = document.createElement("button");
  deleteBtn.append(`-`);
  deleteBtn.classList.add(`deleteBtn`);
  deleteBtn.addEventListener("click", () => {
    list.remove(this);
  });
  li.append(`${addTextField.value}`);
  li.appendChild(deleteBtn);
  list.appendChild(li);
  addTextField.value = "";
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    list.append(`${addTextField.value}`);
    addTextField.value = "";
  }
});
