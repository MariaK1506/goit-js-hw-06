const refs = {
  inputEl: document.querySelector("input#name-input"),
  spanEl: document.querySelector("span#name-output"),
};

refs.inputEl.addEventListener("input", onInputChange);

function onInputChange(event) {
  refs.spanEl.textContent = event.currentTarget.value;
  if (refs.spanEl.textContent === "") {
    refs.spanEl.textContent = "Anonymous";
  }
}
