const input = document.querySelector("#validation-input");
const inputLength = parseInt(input.getAttribute("data-length"));

input.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  if (event.currentTarget.value.length !== inputLength) {
    event.currentTarget.classList.add("invalid");
  } else if (event.currentTarget.value.length === inputLength) {
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
