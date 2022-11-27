/*console.log(document.body);
console.log(document.body.firstChild);
console.log(document.body.lastChild);

console.log(document.querySelector("button"))
console.log(document.querySelector(".item"))
console.log(document.querySelector("#green"))
console.log(document.querySelector("#red"))


console.log(document.querySelectorAll("button"))
console.log(document.querySelectorAll(".item"))

*/

/*
let buttonRed = document.querySelector("#red") 
buttonRed.style.backgroundColor = "red"
*/

/*
document.body.style.backgroundColor = "black"
*/

let buttonGold = document.querySelector("#gold")
// console.log(buttonGold.innerText)


    buttonGold.addEventListener("click", function() {
    document.body.style.background = "gold"
})

let buttonGreen = document.querySelector("#green")
    buttonGreen.addEventListener("click", function() {
    document.body.style.background = "green"
})

let buttonImg = document.querySelector("#img")
    buttonImg.addEventListener("click", function() {
    document.body.style.background = "url(./image1.jpeg)"
})



