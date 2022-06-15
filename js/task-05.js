const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

inputEl.addEventListener("input", (event) => {
  inputEl !== ""
    ? (outputEl.textContent = event.currentTarget.value)
    : "Anonymous";
});
