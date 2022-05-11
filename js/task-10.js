function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  input: document.querySelector("input"),
  btnCreate: document.querySelector('[data-create=""]'),
  btnDestroy: document.querySelector('[data-destroy=""]'),
  boxes: document.querySelector("#boxes"),
};

refs.btnCreate.addEventListener("click", createBoxes);
refs.btnDestroy.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  amount = refs.input.value;
  const size = 30;

  for (let i = 0; i < amount; i += 1) {
    const newDiv = document.createElement("div");
    const divSize = size + i * 10;
    newDiv.textContent = i;
    newDiv.style.width = divSize + "px";
    newDiv.style.height = divSize + "px";
    newDiv.style.backgroundColor = getRandomHexColor();
    refs.boxes.append(newDiv);
  }
}

function destroyBoxes() {
  refs.boxes.innerHTML = "";
}
