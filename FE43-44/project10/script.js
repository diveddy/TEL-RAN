// alert("Hello World") //
// console.log("Hello Eddy") //

//----------

// let username = prompt("Введите своё имя")
// alert(username)
// console.log(username) 

//------------------

// let hello = "Hello "

//console.log(hello + "World");

//--------------------

// let username = prompt("Введите своё имя")
// let hello = "Hello, "
// console.log(hello + username)

//-------------

// let username = prompt("Введите ваше имя")
// console.log("Hello " + username)

//-----------------

// let isRaining = false
// if(isRaining == true) {
//   alert("Возьми зонт")
//} else {
//   alert("Погода сегодня солнечная, зонт не нужен")
//}

//-----------------

/* let degree = 15
if(degree > 15) {
    alert("Выходи в футболке")
} else if(degree < 3) {
    alert("Надень куртку")
} else {
    alert("Надень кофту")
}
*/

//----------------

/* let price = 500
    if(price > 700) {
    alert("Ваша скидка - 20%")
} else if(price > 500) {
    alert("Ваша скидка - 15%")
} else if(price < 500) {
    alert("Скидки нет")
}
*/







//ДЗ//

/*
let r = 20
let g = 50
let b = 200
let rgb = "rgb("
console.log(rgb + r + ", " + g + ", " + b + ")")
*/


/*
let number = +prompt("Ввести число")
    if(number > 100) {
    alert(">")
} else if(number < 100) {
    alert("<")
} else if(price = 100) {
    alert("=")}
*/

/*
let a = +prompt("Ввести число")
let b = +prompt("Ввести второе число")
let c = a + b
let d = a - b
let e = a * b
let f = a / b
console.log(c, + d, + e, + f);
*/


/*
let r =40
let g = 50
let b = 200

let str = `rgb(${r}, ${g}, ${b})`
console.log(str);
*/

/*
let a = +prompt("Ввести число")
let b = +prompt("Ввести второе число")
if (a > b) {
console.log(a)}
else {
console.log(b)}
*/

/*
let num1 = +prompt("Ввести 1-e число");
let num2 = +prompt("Ввести 2-e число");
if (num1 > num2) {
  console.log(num1);
} else if (num1 == num2) {
  console.log("равны");
} else {
  console.log(num2);
}
*/



// Объекты и массивы

/*
let user = {
name : Eddy
login : "World"
age : 48,
img : "https://img.jpg",
hobbies : ["Diving", "Rugby", "Travel"]
}


let book = {
    name : "Мастер и Маргарита",
    style : "Социальная драма",
    year : 1937,
    picture : "https://img.jpg",
    tags : ["Воланд", "Москва", "Дьявол"]
    }
    console.log(books)



    let books = [ "HarryPotter1", "HarryPotter2", "HarryPotter3"]
    console.log(books);

    */


/*
    let user = ["Eddy", "World", 48, "https://img.jpg", "Diving", "Rugby", "Travel"]


    let users = [{
            name : Eddy,
            login : "World",
            age : 48,
            img : "https://img.jpg",
            hobbies : ["Diving", "Rugby", "Travel"]
    }
], {
            name : Eddy,
            login : "World",
            age : 48,
            img : "https://img.jpg",
            hobbies : ["Diving", "Rugby", "Travel"]

            */

            /*
            let book = ["Мастер и Маргарита", "Социальная драма", 1937]
            console.log(book[0]);
            */


            /*
            let posts = [{}, {}, {}]

            let numbers = [0, 1, 2, 3, 4]
            console.log(number);
            numbers.push(5)
            console.log(numbers)
            */

            /*
            let nums = [100, 500]
            let num1 = +prompt("Ввести 1-e число");
            let num2 = +prompt("Ввести 2-e число");
            let num3 = +prompt("Ввести 3-e число");
            nums.push(num1, num2, num3)
            console.log(nums)
            */

            /*
            let nums =  [1, 2, 3, 4, 5]

            console.log(nums[0]);
            console.log(nums[1]);
            console.log(nums[2]);

            for(let i = 0; i < nums.length; i++) {
            console.log(nums[i])
            }

            */

            /*
            for(let i = 1; i <= 5; i++) {
                console.log(100)
            }
            */

/*
    for(let i = 1; i <= 50; i++) {
    console.log("Eddy")
    }
*/
/*
    for(let i = 1; i <= 100; i++) {
        console.log(i)}
*/
/*
for(let i = 0; i <= 100; i++) {
    if(i > 30)
    console.log("Больше", i)
    else if 
    console.log(i)

}
*/

/*
let nums =  [10, 20, 30, 40, 50]
for(let i = 0; i < nums.length; i++) {
    console.log(nums[i])
}
*/

/*
let arr = [32, 51, 60, 78, 105, 14, 10]
for(let i = 0; i < arr.length; i++) {
    if(arr[i] >= 50)
    console.log(arr[i])
}
*/

/* ДЗ.1

let arr = [-10, 50, 60, 0, -100, 125]
for(let i = 0; i < arr.length; i++) {
    if(arr[i] > 0)
    console.log(arr[i])
}
*/

/* ДЗ.2
let arr = [11, 12, 15, 17, 18, 25, 26]
for(let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 == 0)
    console.log(arr[i])
}
*/

/* ДЗ.3
let arr = [10, 20, 30, 40, 50, 60];
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum+= arr[i]
    }
    console.log(sum);
    */

    /*
    let arr = [-10, 50, 60, 0, -100, 125];
    let mult = 1

    for(let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
        mult *=arr[i];
    } 
}  
console.log(mult);
*/

/*
nums = [100, 500]

for(let i = 0; i <3; i++) {
    nums.push( +prompt("Введите число"))
} 

console.log(num);
*/

/*
let user = {
name : "Eddy",
age : 48
}
*/

/*
let laptop = {
    color : "black",
    mark : "Acer",
    model : "455565GG",
    size : "15,6",
    tech : {
        ozu : "16GB",
        processor : "Intel i7",
        videocard : "Nvidia"
    },
    price : 50000 
}


console.log(`<p>${laptop.color}</p>`)
*/


/*
let laptop = {
    color : "black",
    mark : "Acer",
    model : "455565GG",
    size : "15,6",
    tech : {
        ozu : "16GB",
        processor : "Intel i7",
        videocard : "Nvidia"
    },
    price : 50000 
}
    console.log(`<div class="laptop">
    <h1>${laptop.model}</h1>
    <p>${laptop.color}</p>
    <p>${laptop.price}</p>
    </div>`);
*/
/*
let laptop = {
    color : "black",
    mark : "Acer",
    model : "455565GG",
    size : "15,6",
    tech : {
        ozu : "16GB",
        processor : "Intel i7",
        videocard : "Nvidia"
    },
    price : 50000
}
*/
/*
let laptops = [
    {
    color : "black",
    mark : "Acer",
    model : "455565GG",
    size : "15,6",
    tech : {
        ozu : "16GB",
        processor : "Intel i7",
        videocard : "Nvidia"
    },
    price : 50000
},
{
    color : "white",
    mark : "Asus",
    model : "GT-TRA367",
    size : "17",
    tech : {
    ozu : "32GB",
    processor : "Intel i5",
    videocard : "Nvidia"
},
price : 65000  
}  
]

console.log(`
    <div>
        <h1>${laptops[0].price}</h1>
        <p>${laptops[0].mark}</p>
        <p>${laptops[0].model}</p>
    </div>
    <div>
        <h1>${laptops[1].price}</h1>
        <p>${laptops[1].mark}</p>
        <p>${laptops[1].model}</p>
    </div>
    
`)
*/

let instaPosts = [
{
    title : "My first photo",
    descr : "Bonn photo",
    author : "Eddy",
    likes : 100,
    img : "https://photo1.img"
},
{
    title : "My second photo",
    descr : "Mediterranean photo",
    author : "Mishel",
    likes : 222,
    img : "https://photo2.png"
},
{
    title : "My third photo",
    descr : "USA photo",
    author : "Medea",
    likes : 72,
    img : "https://photo3.png"
},{
    title : "My forth photo",
    descr : "Estonia photo",
    author : "Lana",
    likes : 742,
    img : "https://photo4.png"
}
]
/*
console.log(`
    <div class="insta-post".
        <h1>${instaPosts[0].title}</h1>
        <p>${instaPosts[0].descr}</p>
        <p>${instaPosts[0].author}</p>
        <p>${instaPosts[0].likes}</p>
        <img src="${instaPosts[0].img}" alt="фото в инсте"
    </div>
`);
*/

/*
for(let i = 0; i < instaPosts.length; i++) {
    if(instaPosts[i].likes >= 100)
    console.log(`
    <div class="insta-post".
    <h1>${instaPosts[i].title}</h1>
    <p>${instaPosts[i].descr}</p>
    <p>${instaPosts[i].author}</p>
    <p>${instaPosts[i].likes}</p>
    <img src="${instaPosts[i].img}" alt="фото в инсте"
</div>
`)
}
*/

/* --- Добавить в массив 10 объектов типа ---
let arr = []
for (let i = 0; i < 10; i++) {
    arr.push({name:`Alex`})
}
console.log(arr);
*/

/* Добавить в новый массив числа от 0 до 10 */
             
/*
let arr = [1, 2, 4, -40, -3, 8, 7, 0, -5, 18, 12]
let dia_arr = []
for (let i = 0; i < arr.length; i++) {
    if(arr[i]>=0 && arr[i]<10) {
        dia_arr.push(arr[i])
    }
}
*/

/*
let arr = [1, 2, 4, -40, -3, 8, 7, 0, -5, 18, 12]
let negSum = 0;
let posSum = 0;
for (let i = 0; i < arr.length; i++) {
    if(arr[i]>0) 
        posSum +=arr[i];
            else negSum +=[i];
}
let arr1 = [posSum, negSum];
console.log(arr1);
*/


/*
let arr = [1, 2, 4, -40, -3, 8, 7, 0, -5, 18, 12]
let negativeSum = 0;
let possitiveSum = 0;
for (let i = 0; i < arr.length; i++) {
    if(arr[i]>0) 
    possitiveSum +=arr[i]; 
        else negativeSum +=arr[i];   
}
let arr1 = [possitiveSum, negativeSum];
console.log(arr1);
*/

/*
let arr = [1, 2, 4, -40, -3, false, "dfsf", {},8, 7, 0, -5, 18, 12]
let negativeSum = 0;
let possitiveSum = 0;
let rest = []
for (let i = 0; i < arr.length; i++) {
    if(typeof arr[i] === "number") {             
    if(arr[i]>0) 
    possitiveSum +=arr[i]; 
        else negativeSum +=arr[i];   
} else {
    rest.push(arr[i])
}
}
let arr1 = [possitiveSum, negativeSum];
console.log(arr1, rest);

*/

/*
let arr = [1, 2, 4, -40, -3, false, "dfsf", {},8, 7, 0, -5, 18, 12]
let negativeSum = 0;
let possitiveSum = 0;
let rest = []
for (let i = 0; i < arr.length; i++) {
    if(typeof arr[i] === "number" && arr[i]>0) {             
        possitiveSum +=arr[i]; 
    } else if (typeof arr[i] === "number" && arr[i]<0) {
        negativeSum +=arr[i]; 
    } else {
    rest.push(arr[i])
}
let arr1 = [possitiveSum, negativeSum];
console.log(arr1, rest);
*/

/*
let arr = [1, 2, 4, "false", -40, "true", -3, 87, 0, {}, -5, 18, 12]
let posSum = 0
let negSum = 0
let rest = []
for(let i = 0; i < arr.length; i++) {
    if(typeof arr[i] === "number" && arr[i]>0) { 
        posSum += arr[i];
    } else if (typeof arr[i] === "number" && arr[i]<0) {
        negSum +=arr[i];  
    } else {
        rest.push(arr[i])
    }
}
let arr1 = [posSum, negSum]
console.log(arr1, rest)
*/

/*
let arr = [5, 2, 4, -3, 8, 7, 0, -5, 18, 12];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    const iterElement = arr[i];
    sum += iterElement;
    if (sum > 10) {
        console.log(`sum > 10 at ${i+1} iteration`);
    }  
}

*/



/* {'Коля':'1000', 'Вася':'500', 'Петя':'200'}

let arr = [
    {'salary':'1000','name':'alex'},
    {'salary':'500','name':'ivan'},
    {'salary':'200','name':'petr'},
    ]
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += Number(arr[i].salary)
}          
    console.log(sum)
*/


/*
// задание вычислить самое большое число из 3-х
// вычислить самое маленькое число из 3-х
let arr = [
   {'salary':'1000','name':'alex'},
   {'salary':'500','name':'ivan'},
   {'salary':'200','name':'petr'},
   ]
let sum = 0;
for (let i = 0; i < arr.length; i++) {
   sum += Number(arr[i].salary) //оператор перевда из строки в число
}
console.log(sum)
*/