const refs = {
  input: document.querySelector("input#name-input"),
  span: document.querySelector("span#name-output"),
};

refs.input.addEventListener("input", onInputChange);

function onInputChange(event) {
  refs.span.textContent = event.currentTarget.value;
  if (refs.span.textContent === "") {
    refs.span.textContent = "Anonymous";
  }
}
