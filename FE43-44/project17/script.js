/*
let main = document.querySelector("main")
// main.className += "block"
console.log(main.classList.add("active"));
*/


let main = document.querySelector("main")

/*
let buttonAdd = document.querySelector(".add")
let buttonRemove = document.querySelector(".remove")
buttonAdd.addEventListener("click", function () {
    main.classList.add("active")

})

buttonAdd.addEventListener("click", function () {
    main.classList.remove("active")
})
*/
/*
let button = document.querySelector(".btn")
button.addEventListener("click", function () {
    main.classList.toggle("active")
})
*/

/*
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

numbers.forEach(num => {
    main.innerHTML += `<p>${num}</p>`
})

let texts = document.querySelectorAll("p")
texts.forEach(function(text) {
    text.addEventListener("click", function() {
        text.classList.toggle("red")
    })
})


console.log(texts);
*/
 
/*
let todos = [
    {
    name : "Вынести мусор"
},
{
    name : "Проверить ДЗ"
},
{
    name : "Создать веб-приложение"
},
{
    name : "Помыть посуду"
}
]
*/

/*
todos.forEach(function(todo) {
    main.innerHTML += `<div class="todo">
    <p>${todo.name}</p>
    </div>
    ` 
})


let items = document.querySelectorAll(".todo")
items.forEach(function(item) {
    item.addEventListener("click", function() {
        console.log(item.children);
    item.querySelector("p").classList.toggle("line")
    })
})
*/

/*
let todo = document.querySelector(".todo")
let text = document.querySelector("p")


text.addEventListener("click", function(){
    console.log("клик по тегу p");
})


todo.addEventListener("click", function(){
    console.log("клик по тегу div");
})

todo.children[1].innerText = "hello"
*/



// С помощью forEach() создать карточки товаров из массива arr. 
// При нажатии на карточку делать ее фон красным. При втором нажатии возвращать на прежний цвет. 
let arr = [
    {
        name : "Acer",
        price : 50000,
        img : "./images/img1.jpg"
    },
    {
        name : "Asus",
        price: 45000
    },
    {
        name : "HP",
        price: 60000
    }
]

