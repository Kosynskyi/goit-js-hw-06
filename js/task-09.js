function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector("body");
const spanColorEl = document.querySelector(".color");
console.log(spanColorEl);
const btnEl = document.querySelector(".change-color");

btnEl.addEventListener("click", (event) => {
  spanColorEl.textContent = getRandomHexColor();
  bodyEl.style.backgroundColor = getRandomHexColor();
});
