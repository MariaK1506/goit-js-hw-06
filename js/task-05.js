const refs = {
  input: document.querySelector("input#name-input"),
  span: document.querySelector("span#name-output"),
};

// refs.input.addEventListener("focus", onInputFocus);
// refs.input.addEventListener("blur", onInputBlur);
refs.input.addEventListener("input", onInputChange);

// function onInputFocus() {
//   console.log("Инпут получил фокус - событие focus");
// }
// function onInputBlur() {
//   console.log("Инпут потерял фокус - событие blur");
// }

function onInputChange(event) {
  refs.span.textContent = event.currentTarget.value;
}
