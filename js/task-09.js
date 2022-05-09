function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  btnChange: document.querySelector(".change-color"),
  spanEl: document.querySelector(".color"),
};

refs.btnChange.addEventListener("click", onBtnChangeClick);

function onBtnChangeClick() {
  document.body.style.backgroundColor = getRandomHexColor();
  refs.spanEl.textContent = getRandomHexColor();
}
