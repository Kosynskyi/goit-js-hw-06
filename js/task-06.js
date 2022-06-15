const validatorEl = document.querySelector("#validation-input");
validatorEl.addEventListener("blur", () => {
  if (validatorEl.value.length > Number(validatorEl.dataset.length)) {
    validatorEl.classList.add("valid");
    validatorEl.classList.remove("invalid");
  } else {
    validatorEl.classList.add("invalid");
    validatorEl.classList.remove("valid");
  }
});
