// 1--
const quantityItemEl = document.querySelectorAll(".item");
console.log('Number of categories: ', quantityItemEl.length);

// 2--

const category = [...quantityItemEl]
    .map(element =>`Category: ${element.children[0].textContent}
    Elements: ${element.children[1].children.length}`)
   .join("\n");

console.log(category);

// const textItemEl = document.querySelectorAll("h2");
// // textItemEl.forEach(element => {
// //     console.log('Category: ', element.textContent)
//     
// ;


// const hhh = document.querySelectorAll(".item ul")

// const length = hhh.forEach(element => {
    
//     console.log('Elements: ', element.querySelectorAll('li').length)
// });
    







