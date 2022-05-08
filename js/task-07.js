const refs = {
  input: document.querySelector("#font-size-control"),
  span: document.querySelector("#text"),
};

refs.input.addEventListener("input", onInputChange);

function onInputChange() {
  //   console.log(refs.input.value);
  const sizeText = refs.input.value + "px";

  refs.span.style.fontSize = sizeText;
}
