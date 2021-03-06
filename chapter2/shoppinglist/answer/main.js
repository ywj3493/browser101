"use strict";

let num = 2;
let num2 = num;

console.dir(num);
console.dir(num2);

num2 = 3;

console.dir(num);
console.dir(num2);

const items = document.querySelector(".items");
const input = document.querySelector(".footer__input");
const addBtn = document.querySelector(".footer__button");
const form = document.querySelector(".new-form");

form.addEventListener("submit", (event) => {
  //form submit 은 브라우저에서 default로 화면을 초기화 함
  event.preventDefault();
  onAdd();
});

/**
 * 주석은 보통 함수 앞에만 달아둔다
 */
function onAdd() {
  const text = input.value;
  const item = createItem(text);
  items.appendChild(item);
  input.value = "";
  item.scrollIntoView();
  input.focus();
}

function createItem(text) {
  if (!text) {
    return;
  }
  const itemRow = document.createElement("li");
  itemRow.setAttribute("class", "item__row");
  itemRow.innerHTML = `<div></div>`;

  // const item = document.createElement("div");
  // item.setAttribute("class", "item");

  // const name = document.createElement("span");
  // name.setAttribute("class", "item__name");
  // name.innerText = text;

  // const deleteBtn = document.createElement("button");
  // deleteBtn.setAttribute("class", "item__delete");
  // deleteBtn.innerHTML = '<i class="fa-solid fa-minus"></i>';
  // deleteBtn.addEventListener("click", () => {
  //   items.removeChild(itemRow);
  // });

  // const itemDivider = document.createElement("div");
  // itemDivider.setAttribute("class", "item__divider");

  // item.appendChild(name);
  // item.appendChild(deleteBtn);

  // itemRow.appendChild(item);
  // itemRow.appendChild(itemDivider);

  return itemRow;
}
