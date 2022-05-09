const refs = {
  btnDecrem: document.querySelector('button[data-action="decrement"]'),
  btnIncrem: document.querySelector('button[data-action="increment"]'),
  spanCounter: document.querySelector("#value"),
};

refs.btnDecrem.addEventListener("click", onBtnDecremClick);
refs.btnIncrem.addEventListener("click", onBtnIncremClick);

let counterValue = 0;

function onBtnDecremClick() {
  counterValue -= 1;
  refs.spanCounter.textContent = counterValue;
}

function onBtnIncremClick() {
  counterValue += 1;
  refs.spanCounter.textContent = counterValue;
}
