const refs = {
  input: document.querySelector("#font-size-control"),
  span: document.querySelector("#text"),
};

refs.input.addEventListener("input", onInputChange);

function onInputChange(event) {
  //   console.log(refs.input.value);
  const sizeText = event.currentTarget.value + "px";

  refs.span.style.fontSize = sizeText;
}
