/*
let inpt = document.querySelector(".inpt")
let btn = document.querySelector(".btn")



function btnCallBack() {
    inpt.value = "thanks for press button"
    console.log("click");
    btn.addEventListener("click", btnCallBack)
    btn.removeEventListener("click", btnCallBack)
}

btn.addEventListener("click", btnCallBack)
*/

/*-----------------------------------------------
let input = document.querySelector(".square")
let button = document.querySelector(".action")
button.addEventListener("click", toSquare)
let square = n => n*n;

function toSquare(event) {
//let num = Number (input.value)
//input.value = square(num)
input.value = square(Number(input.value))
}
*/
//-------------------------------------------------

/*
let input = document.querySelector(".input")
let block = document.querySelector(".block")
let unblock = document.querySelector(".unblock")
block.addEventListener("click", blockInput)
unblock.addEventListener("click", unblockInput)

function block(event) {
    input.setAttribute("disabled", true)
}
function unblock(event) {
    input.removeAttribute("disabled");
}
*/

let input = document.querySelector(".input")
let blocked  = document.querySelector(".blocked")
let unblocked  = document.querySelector(".unblocked")
blocked.addEventListener("click", blockInput)
unblocked.addEventListener("click", unblockInput)

function blockInput(event) {
    input.setAttribute("disabled", true)
}
function unblockInput(event) {
    input.removeAttribute("disabled")
}
