const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryList = document.querySelector('.gallery')
console.log(galleryList)

const galleryMarkup = images
  .map(({ url, alt }) => `<li><img src= '${url}' alt= '${alt}' width =300 height = 200</li>`)
  .join("");
  galleryList.insertAdjacentHTML("afterbegin", galleryMarkup);
  // console.log(galleryMarkup)

galleryList.style.display = "flex";
galleryList.style.justifyContent = "space-between";
galleryList.style.alignItems = "center";
galleryList.style.listStyle = "none";
galleryList.style.margin = 0;
galleryList.style.padding = 0;
// galleryList.setAttribute("display:flex; justify-content:space-between; align-items:center");
  


const img = document.querySelectorAll('img');
img.forEach(element => {
  element.style.display = "block";
  element.style.maxWidth = "100%";
// element.style.height = "auto";
  element.style.objectFit = "cover";
});
// console.log(img)
// img.style.display = "block";
// img.style.maxWidth = "100%";
// // img.style.height = "auto";
// img.style.objectFit = "cover";

