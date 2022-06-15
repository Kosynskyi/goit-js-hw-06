const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", (event) => {
  event.preventDefault();

  const mail = formEl.elements.email.value;
  const password = formEl.elements.password.value;

  if (mail === "" || password === "") {
    alert("Пожалуйста, заполните все поля!");
  } else {
    console.log({ mail, password });
    formEl.reset();
  }
});
