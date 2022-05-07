// 1--
const quantityItemEl = document.querySelectorAll(".item");
console.log(`Number of categories: ${quantityItemEl.length}`);

// 2--

// 1 вариант
const category = [...quantityItemEl]
  .map((element) => {
    const firstEl = element.firstElementChild.textContent;
    const secondEl = element.children[1].children.length;
    return `Category: ${firstEl}\nElements: ${secondEl}`;
  })
  .join("\n");

console.log(category);

// 2 вариант
// const category = [...quantityItemEl]
//   .map(
//     (element) =>
//       `Category: ${element.firstElementChild.textContent}\nElements: ${element.children[1].children.length}`
//   )
//   .join("\n");

// console.log(category);
