const rangeEl = document.querySelector("#font-size-control");
console.log(rangeEl);

const spanTextEl = document.querySelector("#text");
console.log(spanTextEl);

rangeEl.addEventListener("input", () => {
  spanTextEl.style.fontSize = rangeEl.value + "px";
});
