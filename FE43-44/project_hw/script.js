/*
В html создаем 3 тега a -  x3. Для каждого из трех, 
    добавить link в href и title внутрь тега из массива arr

   
let arr = [
        {
            link : "https://google.com",
            title : "Ссылка на гугл"
    },
    {
        link : "https://instagram.com",
        title : "Ссылка на инстаграм"
},
{
    link : "https://facebook.com",
    title : "Ссылка на фейсбук"
}
];

let links = document.querySelectorAll("a");
arr.forEach((element, i) => {
links[i].setAttribute("href", element.link)
links[i].innerText = element.title
});

-----------------------------------
*/



/*
let texts = ["Lorem", "Ipsum", "Dolor", "Sit", "Amet"];

let paragraphs = document.querySelectorAll("p");
for (let i = 0; i < texts.length; i++) {
    let iterParagraph = paragraphs[i];
    let iterTexts = texts[i];
    iterParagraph.innerText = iterTexts;

};
*/


/*
let texts = ["Lorem", "Ipsum", "Dolor", "Sit", "Amet"];

let paragraphs = document.querySelectorAll("p");
    texts.forEach(
        function (iterText, i) {
        let iterParagraph = paragraphs[i];
        iterParagraph.innerText = iterText;

        }
    )

    --------------------------------------
    */

    /*
    Создать две кнопки - PLUS, MINUS
    Создать тег p с начальным значением - 0. 
    При клике на buttonPlus увеличивать значение в теге p на 1
    При клике на buttonMinus уменьшать значение в теге p на 1
    addEventListener. innerText. 
    */

    /*
    let plus = document.querySelector(".plus");
    let minus = document.querySelector(".minus");
    let paragraph = document.querySelector(".paragraph");

    minus.addEventListener("click", function (event) {
        paragraph.innerText = Number(paragraph.innerText) -1;
    })
    plus.addEventListener("click", function (event) {
        paragraph.innerText =  Number(paragraph.innerText) +1;
    })
    -------------------------------

    */
