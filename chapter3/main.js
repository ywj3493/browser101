"use strict";

const playBtn = document.querySelector(".game__button");
const clock = document.querySelector(".game__clock");
const counter = document.querySelector(".game__counter");
const field = document.querySelector(".field");
const stopIcon = `<i class="fa-solid fa-stop"></i>`;
const playIcon = `<i class="fa-solid fa-play"></i>`;

const state = {
  playing: false,
  timeCounter: 0,
  carrotCounter: 10,
  dialog: false,
  result: false,
};

function applyState() {
  playBtn.innerHTML = state.playing ? stopIcon : playIcon;
  clock.innerHTML = state.timeCounter;
  counter.innerHTML = state.carrotCounter;
}

function gameReset() {
  state.playing = false;
  state.timeCounter = 0;
  state.carrotCounter = 10;
  state.dialog = false;
  state.result = false;
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function dialog(message) {
  const element = document.createElement("div");
  element.classList.add("dialog");
  return element;
}

/**
 *
 * @param {number} x bug button position x
 * @param {number} y bug button position y
 * @returns bug button element
 */
function createBug(x, y) {
  const element = document.createElement("button");
  element.classList.add("bug");
  element.style.top = `${y}px`;
  element.style.left = `${x}px`;
  element.innerHTML = `<img src="./assets/img/bug.png" alt="">`;
  element.addEventListener("click", () => {
    field.removeChild(element);
  });
  return element;
}

/**
 *
 * @param {number} x carrot button position x
 * @param {number} y carrot button position y
 * @returns carrot button element
 */
function createCarrot(x, y) {
  const element = document.createElement("button");
  element.classList.add("carrot");
  element.style.top = `${y}px`;
  element.style.left = `${x}px`;
  element.innerHTML = `<img src="./assets/img/carrot.png" alt="">`;
  element.addEventListener("click", () => {
    field.removeChild(element);
    state.carrotCounter = state.carrotCounter - 1;
    applyState();
    if (state.carrotCounter == 0) {
    }
  });
  return element;
}

/**
 * onClick play button
 * function : start time count, place items randomly
 */
const onClickPlayBtn = () => {
  const startClock = () => {
    state.timeCounter = 10;
    applyState();
    var intervalID = setInterval(() => {
      state.timeCounter = state.timeCounter - 1;
      clock.innerHTML = state.timeCounter;
      if (state.timeCounter === 0) {
        clearInterval(intervalID);
      }
    }, 1000);
  };
  if (!state.playing) {
    state.playing = !state.playing;
    playBtn.innerHTML = state.playing ? stopIcon : playIcon;
    for (let i = 0; i < 10; i++) {
      field.appendChild(
        createBug(
          Math.random() * document.body.clientWidth,
          ((Math.random() + 1) / 2) * document.body.clientHeight
        )
      );
      field.appendChild(
        createCarrot(
          Math.random() * document.body.clientWidth,
          ((Math.random() + 1) / 2) * document.body.clientHeight
        )
      );
    }
    startClock();
  } else {
    console.dir("test");
    state.playing = !state.playing;
    playBtn.innerHTML = state.playing ? stopIcon : playIcon;
    setState("timeCounter", 10);
    removeAllChildNodes(field);
  }
};

playBtn.addEventListener("click", onClickPlayBtn);
