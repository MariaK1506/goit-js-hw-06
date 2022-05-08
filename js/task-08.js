const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;
  const mail = formElements.email.value;
  const password = formElements.password.value;
  const formData = { mail, password };
  console.log(formData);

  console.log(`Login: ${mail}, Password: ${password}`);
  if (mail === "" || password === "") {
    return alert("Внимание! Все поля должны быть заполнены!");
  }

  event.currentTarget.reset();

  //   const formData = new FormData(event.currentTarget);
  //   console.log(formData);
  //   formData.forEach((value, name) => {
  //     // console.log("Имя поля: ", name);
  //     // console.log("Значение поля: ", value);

  //   });
  //   event.currentTarget.reset();
}
