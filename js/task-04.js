const counter = {
  btnDecrem: document.querySelector('button[data-action="decrement"]'),
  btnIncrem: document.querySelector('button[data-action="increment"]'),
  span: document.querySelector("#value"),
};

counter.btnDecrem.addEventListener("click", onBtnDecremClick);
counter.btnIncrem.addEventListener("click", onBtnIncremClick);

let counterValue = 0;

function onBtnDecremClick() {
  counterValue -= 1;
  counter.span.textContent = counterValue;
}

function onBtnIncremClick() {
  counterValue += 1;
  counter.span.textContent = counterValue;
}
