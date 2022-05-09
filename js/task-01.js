// 1--
const itemEl = document.querySelectorAll(".item");
console.log(`Number of categories: ${itemEl.length}`);

// 2--

// 1 вариант
const category = [...itemEl]
  .map((element) => {
    const firstEl = element.firstElementChild.textContent;
    const secondEl = element.children[1].children.length;
    return `Category: ${firstEl}\nElements: ${secondEl}`;
  })
  .join("\n");

console.log(category);
