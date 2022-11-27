/*
let item = document.querySelector("div")

let itemClass = item.getAttribute("class")
let itemId = item.getAttribute("id")
let itemClass1 = document.querySelector("div").getAttribute("class")
console.log(itemClass1)
*/

/*
let itemClass = document.querySelector("a").getAttribute("href")
console.log(itemClass)
*/
/*
const href = document.querySelector("a")
let href1 = href.getAttribute("href")
console.log(href1)
*/
/*
let link = document.querySelector("a")
let googleLink = link.getAttribute("href")
console.log(googleLink)
*/
/*
let text = document.querySelector("p")
let textId = text.getAttribute("id")
console.log(textId)
*/

/*
let item = document.querySelector("div")
item.setAttribute("id", "item-1")
console.log(item.getAttribute("id"))
*/

/*
let image = document.querySelector("img")
image.setAttribute("src", "./image1.jpeg")
*/

/*
let image = document.querySelector("img")
let button = document.querySelector("button")

function addAttr() {
    image.setAttribute("src", "./image1.jpeg")
}
*/

// addAttr()

// button.addEventListener("click", addAttr)

/*
let images = document.querySelectorAll("img")
console.log(images);

for(i=0; i < images.length; i++) {
    images[i].setAttribute("src", `./images/img-${[i+1]}.jpg`)
}
*/

//setAttribute("src", `./img-${[i]}.jpg`)

/*
function returnObj(name, age) {
    return {
        name,
        age
    }
}

returnObj('tasha', 25)


console.log(returnObj('tasha', 25))
*/


/*
let laptops = [];

for (let i = 0; i < 3; i++) {
    let mark = prompt("Введите марку ноутбука")
    let price = +prompt("Введите цену ноутбука")
    laptops.push({ mark, price })
    
}
console.log(laptops);
*/


let texts = ["Lorem", "Ipsum", "Dolor", "Sit", "Amet"];

let paragraphs = document.querySelectorAll("p");
for (let i = 0; i < texts.length; i++) {
    let iterParagraph = paragraphs[i];
    let iterTexts = texts[i];
    iterParagraph.innerText = iterTexts;

};