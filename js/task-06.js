const inputEl = document.querySelector("#validation-input");
const inputElLength = parseInt(inputEl.dataset.length);

inputEl.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  if (event.currentTarget.value.length !== inputElLength) {
    event.currentTarget.classList.add("invalid");
    event.currentTarget.classList.remove("valid");
  } else if (event.currentTarget.value.length === inputElLength) {
    event.currentTarget.classList.remove("invalid");
    event.currentTarget.classList.add("valid");
  }
}

// function onInputBlur() {
//   if (input.value.length !== inputLength) {
//     input.classList.add("invalid");
//   }

//   if (input.value.length === inputLength) {
//     input.classList.remove("invalid");
//     input.classList.add("valid");
//   }
// }
