const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("ul");

// 1 вариант

const makeIngredientsElements = (ingredients) => {
  return ingredients.map((ingredient) => {
    const createIngr = document.createElement("li");

    createIngr.textContent = ingredient;
    createIngr.classList.add("item");
    return createIngr;
  });
};
const elements = makeIngredientsElements(ingredients);
console.log(elements);
list.append(...elements);

// 2 вариант

// const elements = ingredients.map(ingredient => {
// const createIngr = document.createElement('li')

// createIngr.textContent = ingredient;
// createIngr.classList.add('item')
//   // console.log(createIngr);
//   return createIngr;
// })
// // console.log(elements);
// list.append(...elements);
