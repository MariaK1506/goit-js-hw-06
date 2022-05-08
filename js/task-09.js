function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  btnChange: document.querySelector(".change-color"),
  span: document.querySelector(".color"),
};

refs.btnChange.addEventListener("click", onBtnChangeClick);

function onBtnChangeClick() {
  document.body.style.backgroundColor = getRandomHexColor();
  refs.span.textContent = getRandomHexColor();
}
