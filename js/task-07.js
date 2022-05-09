const refs = {
  inputEl: document.querySelector("#font-size-control"),
  spanEl: document.querySelector("#text"),
};

refs.inputEl.addEventListener("input", onInputChange);

function onInputChange(event) {
  //   console.log(refs.input.value);
  const sizeText = event.currentTarget.value + "px";

  refs.spanEl.style.fontSize = sizeText;
}
