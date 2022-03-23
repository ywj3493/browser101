"use strict";

const xaxis = document.querySelector(".x-axis");
const yaxis = document.querySelector(".y-axis");
const targetbox = document.querySelector(".targetbox");
const coordinate = document.querySelector(".coordinate");

addEventListener("load", () => {
  const targetRect = targetbox.getBoundingClientRect();
  const targetHalfWidth = targetRect.width / 2;
  const targetHalfHeight = targetRect.height / 2;

  document.addEventListener("mousemove", (event) => {
    const x = event.x;
    const y = event.y;
    coordinate.innerHTML = `${x}px, ${y}px`;
    xaxis.style.transform = `translateX(${x}px)`;
    yaxis.style.transform = `translateY(${y}px)`;
    targetbox.style.transform = `translate(${x - targetHalfWidth + 1}px, ${
      y - targetHalfHeight + 1
    }px)`;
  });
});
