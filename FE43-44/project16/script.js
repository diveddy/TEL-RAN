/*
let item = document.querySelector("main")

console.log(item.innerText)
console.log(item.innerHTML)

item.innerHTML += "<h2>Hello</h2>"
*/


/*
let greeting = "Hello"
greeting = greeting + " Eduard"
console.log(greeting)
*/

/*
let num = 10
num += 1
num++
*/

/*
let num = 10
num -= 1
num--
*/

/*
let main = document.querySelector("main")
let name = "Eduard"

main.innerHTML += `<p>${name}</p>`
*/

/*
let main = document.querySelector("main")
for (let i = 0; i < 5; i++) {
    main.innerHTML += "<p>Hello</p>"
    
}
*/

/*
let main = document.querySelector("main")
let link = "https://google.com"
let link_name = "Google"
main.innerHTML += `<a href="${link}">${link_name}</a>`
*/

/*
for (let i = 0; i < 5; i++) {
    main.innerHTML += `<p>Hello ${i + 1}</p>`
    
}
*/

/*
let main = document.querySelector("main")

let laptop = {
    mark : "Acer",
    model : "G444M",
    price : 15000
}

main.innerHTML += `
<div>
    <h1>${laptop.mark}</h1>
    <p>${laptop.model}</p>
    <p>${laptop.price}</p>
</div>
`
*/

/*
let main = document.querySelector("main")

let book = {
    name : "Капитанская дочка",
    author : "Пушкин А.С",
    count : 700

}
main.innerHTML += `
<div>
    <h1>${book.name}</h1>
    <p>${book.author}</p>
    <p>${book.count}</p>
</div>
`
*/

/*
let main = document.querySelector("main")

let laptops = [
{
    mark : "Acer",
    model : "G444M",
    price : "18000"
},
{
    mark : "Asus",
    model : "705K",
    price : "25000"
},
{
    mark : "HP",
    model : "P500",
    price : "50000"
}
]
*/

/*
for (let i = 0; i < laptops.length; i++) {
    main.innerHTML += `
<div class="laptop">
    <h1>${laptops[i].mark}</h1>
    <p class="model">${laptops[i].model}</p>
    <p class="price">${laptops[i].price}</p>
</div>
`
}
*/

/*
laptops.forEach(function(laptop) {
    main.innerHTML += `
        <div class="laptop">
            <h1>${laptop.mark}</h1>
            <p>${laptop.model}</p>
            <p>${laptop.price}</p>
        </div>
    `
})
*/

/*
let arr = [2, 4, 6, 8, 10]

arr.forEach(function(num) {
    console.log(num + 2)
})

console.log(arr);
*/

/*
let main = document.querySelector("main")
let names = ["Arsen", "Paul", "Ljudmila", "Grisha"]
names.forEach(function(name) {
    console.log("Hello " + name)
})

console.log(names);
*/



let main = document.querySelector("main")

 let cars = [
    {
        mark : "Mercedes-Benz",
        model : " S600",
        year : "Year: 2005",
        price : "$50000"
    }, 
    {
        mark : "BMW",
        model : " M5",
        year : "Year: 2010",
        price : "$30000"
    },
    {
        mark : "VW",
        model : " Golf5",
        year : "Year: 2015",
        price : "$25000"
    },
    {
        mark : "Toyota",
        model : " Camry",
        year : "Year: 2015",
        price : "$25000"
    }
 ] 

 cars.forEach(function(car) {
    main.innerHTML += `
        <div class="car">
            <h1>${car.mark + car.model}</h1>
            <p>${car.year}</p>
            <p>${car.price}</p>
        </div>
    `
})



 /*
 Для каждого из элементов массива отобразить разметку и стилизовать её
 <div class="car">  
    <h1>Mark Model</h1>
    <p>Год выпуска: year</p>
    <p>Цена: price</p>
 </div>
*/