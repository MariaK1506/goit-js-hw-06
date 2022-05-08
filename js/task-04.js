const btnDecrem = document.querySelector('button[data-action="decrement"]');
console.log(btnDecrem);
const btnIncrem = document.querySelector('button[data-action="increment"]');
console.log(btnIncrem);

btnDecrem.addEventListener("click", onBtnDecremClick);

// function handleBtnDecremClick() {
//   let counterValue = 0;
//   console.log("КЛИК", (counterValue += 1));
// }

// function btnDecremClickHandler() {
//   let counterValue = 0;
//   console.log("КЛИК", (counterValue += 1));
// }

function onBtnDecremClick(event) {
  let counterValue = 0;
  console.log("КЛИК", (counterValue += 1));
}
