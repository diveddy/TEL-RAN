let form = document.querySelector(".products-form")
let productName = document.querySelector("input[name='product-name']")
let productPrice = document.querySelector("input[name='product-price']")
let productsWrapper = document.querySelector(".products-wrapper")


let products = [
    {
        name : "Велосипед",
        price : 40000,
        id : Date.now()
    },
    {
        name : "Самокат",
        price : 15000,
        id : Date.now()+1
    },
    {
        name : "Лыжи",
        price : 20000,
        id : Date.now()+2
    },
    {
        name : "Сноуборд",
        price : 25000,
        id : Date.now()+3
    }
]

form.addEventListener("submit", function(event) {
    event.preventDefault()
    //console.log(productName.value)
    //console.log(productPrice.value)
    let newProduct = {
        name: productName.value,
        price: Number(productPrice.value), id: Date.now ()
    }
    products.push(newProduct)
    renderProducts(products);
    onHover();
    deleteProduct()
    clearInputs()
    
    
})

function clearInputs(){
    productName.value = ``
    productPrice.value = ``
}

function renderProducts(arr) {
    productsWrapper.innerHTML = ``
    arr.forEach(function(el) {
        productsWrapper.innerHTML += `
        <div class="product" id="${el.id}>
            <p class="product-name">${el.name}</p>
            <p class="product-class">${el.price}</p>
            <button class="delete-btn">X</button>
        </div>
        ` 
    });
}
    renderProducts(products)

 function onHover() {
    let product = document.querySelectorAll(".product")
    product.forEach(function(el) {
        el.addEventListener("mouseover", function() {
            el.querySelector(".delete-btn").style.display = "block"
        })
        el.addEventListener("mouseout", function() {
        el.querySelector(".delete-btn").style.display = "none"
        })
    })

 }
 onHover()

 function deleteProduct() {
    let deleteBtns = document.querySelectorAll(".delete-btn")
    deleteBtns.forEach(function(btn) {
        btn.addEventListener("click", function() {
            console.log(btn.parentElement.getAttribute("id"));
            deleteElem(btn.parentElement.getAttribute("id"));
            console.log(products);
            btn.parentElement.remove()
        })
    })
 }
 deleteProduct()


function deleteElem (id) {
    products.forEach(function (el, i){
        if(el.id == id) {
        products.splice(i,1)
    }
    })
}

 
       
  