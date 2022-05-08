const refs = {
  btnDecrem: document.querySelector('button[data-action="decrement"]'),
  btnIncrem: document.querySelector('button[data-action="increment"]'),
  span: document.querySelector("#value"),
};

refs.btnDecrem.addEventListener("click", onBtnDecremClick);
refs.btnIncrem.addEventListener("click", onBtnIncremClick);

let counterValue = 0;

function onBtnDecremClick() {
  counterValue -= 1;
  refs.span.textContent = counterValue;
}

function onBtnIncremClick() {
  counterValue += 1;
  refs.span.textContent = counterValue;
}
