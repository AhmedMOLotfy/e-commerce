var sliderPhotos = ["images/1.png","images/2.png","images/3.png","images/4.gif"];
// get img - element
var imgElement = document.getElementById("s-img");

productsData = [
    {
        imgSrc:'images/A5cc4b072120345acb5bf39a8b9d859c63.png_720x720q50.webp',
        title: 'Sofa',
        description: 'Dongguan Tianhang furniture factory luxury living room sofa',
        category: 'furniture'
    },
    {
        imgSrc:'images/Hb76343b7307d43648e0acfce4c6847d1x.webp',
        title: 'Sofa',
        description: 'Fabric corner living room sofa with pulled out bed 3 seats sofa',
        category: 'furniture'
    },
    {
        imgSrc:'images/living-1.jpg',
        title: 'Sofa',
        description: 'Fabric corner living room sofa with pulled out bed 3 seats sofa',
        category: 'furniture'
    },
    {
        imgSrc:'images/living2.jpg',
        title: 'Sofa',
        description: 'Tianhang Furniture Factory direct sells Velvet sofa living room',
        category: 'furniture'
    },
    {
        imgSrc:'images/men_clothes_1.jpg',
        title: 'T-shirt black',
        description: 'Dongguan Tianhang furniture factory luxury living room sofa',
        category: 'clothes'
    },
    {
        imgSrc:'images/men_clothes_3.jpg',
        title: 'T-shirt brown',
        description: 'Dongguan Tianhang furniture factory luxury living room sofa',
        category: 'clothes'
    },
    {
        imgSrc:'images/men_clothes_4.jpg',
        title: 'T-shirt brown',
        description: 'Dongguan Tianhang furniture factory luxury living room sofa',
        category: 'clothes'
    },


    {
        imgSrc:'images/nokia_1.jpg',
        title: 'Nokia',
        description: 'Nokia G21 4gb ram, 128gb memory, finger print sensor - blue',
        category: 'phones'
    },

    {
        imgSrc:'images/galaxy_1.jpg',
        title: 'Galaxy',
        description: 'Samsung Galaxy M34, Dual SIM, 8GB RAM, 128GB Storage, 5G, Blue - 1 year Warranty',
        category: 'phones'
    },

    {
        imgSrc:'images/samsung_1.jpg',
        title: 'Samsung',
        description: 'Samsung Galaxy A54 - Dual SIM Mobile Phone Android, 8GB RAM, 128GB, 5G, Awesome Lime',
        category: 'phones'
    },
];

if(!lengthCart){
    localStorage.setItem('cartProducts',JSON.stringify([]))
}



var href = window.location.href.slice(22);
if(href == 'index.html'){
    var navLinks = document.querySelectorAll("div.collapse.navbar-collapse ul li a");
    for (var i = 0;i < navLinks.length;i++){
        navLinks[i].classList.remove('active');
    }
    var ele =  document.getElementById("Home");
    ele.classList.add("active");
}
else if(href == 'about.html'){
    var navLinks = document.querySelectorAll("div.collapse.navbar-collapse ul li a");
    for (var i = 0;i < navLinks.length;i++){
        navLinks[i].classList.remove('active');
    }
    var ele =  document.getElementById("about");
    ele.classList.add("active");
}
else if(href == 'contactUs.html'){
    var navLinks = document.querySelectorAll("div.collapse.navbar-collapse ul li a");
    for (var i = 0;i < navLinks.length;i++){
        navLinks[i].classList.remove('active');
    }
    var ele =  document.getElementById("contact");
    ele.classList.add("active");
}
else if(href == 'cart.html'){
    var navLinks = document.querySelectorAll("div.collapse.navbar-collapse ul li a");
    for (var i = 0;i < navLinks.length;i++){
        navLinks[i].classList.remove('active');
    }
    var ele = document.getElementById("cart-div");
    ele.classList.add("design-cart");

}

var cartProducts = [];

function lengthCart(){
    return JSON.parse(localStorage.getItem('cartProducts')).length;
}

function productsInCart(img){
    var arr = JSON.parse(localStorage.getItem('cartProducts'));
    const index = arr.findIndex(object => {
        return object.imgSrc == img;
    });
    if(index == -1){
        return false;
    }
    return true;
}

function appendToProductList(value = 'furniture'){
    var parentToAppend = document.querySelector(".products-container .row");
    if(parentToAppend){
        parentToAppend.replaceChildren();
        for(var i = 0;i < productsData.length;i++){
            if(productsData[i].category == value){
                var newProduct = document.createElement("div");
                newProduct.setAttribute("class","col-md-4 col-sm-6 "+ productsData[i].category);
                parentToAppend.appendChild(newProduct);
    
                var newCard = document.createElement("div");
                newCard.setAttribute("class","card");
                newProduct.appendChild(newCard);
    
                newCard.innerHTML = 
                `
                <img
                    class="card-img-top"
                    src="${productsData[i].imgSrc}"
                    alt="Card image cap" />
                <div class="card-body">
                    <h5 class="card-title">${productsData[i].title}</h5>
    
                    <p class="card-text">
                    ${productsData[i].description}
                    </p>
    
                    <div class="d-flex justify-content-between mt-2 card-bottom">
                        <select class="form-select" aria-label="Default select example" style="width: 100px;">
                            <option selected>select</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        ${!productsInCart(productsData[i].imgSrc) ? 
                            '<span class="addCart" onclick="addToCart(this)">Add To Cart </span>' : 
                            '<span class="addCart added" style="cursor: auto;" onclick="addToCart(this)">Check Cart </span>'}
                    
                    </div>
                </div>
                `;
            }
        }
    }
    
    


}

appendToProductList();

function moveImagesRight(){
    var curImage = imgElement.getAttribute("src");
    var curIndex = sliderPhotos.indexOf(curImage);
    curIndex += 1;
    if(curIndex > 4 - 1){
        curIndex = 0;
    }
    var newElement = sliderPhotos[curIndex]
    imgElement.setAttribute("src",newElement)
}

function moveImagesLeft(){
    var curImage = imgElement.getAttribute("src");
    var curIndex = sliderPhotos.indexOf(curImage);
    curIndex -= 1;
    if(curIndex < 0){
        curIndex = 4 - 1;
    }
    var newElement = sliderPhotos[curIndex]
    imgElement.setAttribute("src",newElement)
}

function pressCategoryLink(value){
    var allLinks = document.querySelectorAll("ul.nav.nav-pills.justify-content-start li a")
    for(var i = 0;i < allLinks.length;i++){
        allLinks[i].classList.remove('active');
    }
    var curLink = document.getElementById(value);
    curLink.classList.add('active');
    appendToProductList(value);
}


function openCart(){
    window.open("/cart.html","_blank")
}

var cartSpan = document.getElementById("cart-no");

if (localStorage.getItem("cartProducts").length > 1){
    cartSpan.innerHTML = lengthCart();
}

function addToCart(e){

    e.classList.add('added');
    e.innerHTML = 'Check Cart';
    e.style.cursor = 'auto';
    var productQty = e.parentNode.firstElementChild.value;
    var productImg = e.parentNode.parentNode.parentNode.firstElementChild.src.slice(22);
    const index = productsData.findIndex(object => {
        return object.imgSrc == productImg;
    });
    var productAdded = productsData[index];
    productAdded.qty = productQty;
    cartProducts.push(productAdded);
    localStorage.setItem('cartProducts',JSON.stringify(cartProducts));
    cartSpan.innerHTML = lengthCart();
}

function pressNavbar(val){
    var navLinks = document.querySelectorAll("div.collapse.navbar-collapse ul li a");
    for (var i = 0;i < navLinks.length;i++){
        navLinks[i].classList.remove('active');
    }
    var lin = document.getElementById(val);
    window.open(`/${val}.html`,"_self");
    lin.classList.add("active");

}


// var navLinks = document.querySelectorAll("div.collapse.navbar-collapse ul li a");
// function removeActiveLink(){
//     for (var i = 0;i < navLinks.length;i++){
//         navLinks[i].classList.remove('active');
//         console.log("removed")
//     }
// }


// for (var i = 0;i < navLinks.length;i++){
//     navLinks[i].addEventListener('click',function(e){
//         removeActiveLink();
//         e.target.classList.add('active');
//         if(e.target.innerHTML == 'Home'){
//             window.open('/index.html','_self');
//         }
//         else if(e.target.innerHTML == 'About'){
//             e.target.classList.add('active');
//             window.open('/about.html','_self')
//         }
//     });
// }

function showStorage(){
    var arr = JSON.parse(localStorage.getItem('cartProducts'));
    return arr;
}

function showShoppingCart(){
    var cartUl = document.querySelector(".ul-cart");
    if(cartUl){
        var cartProducts = showStorage();
    for(var i = 0;i < cartProducts.length;i++){
        var newListItem = document.createElement("li");
        newListItem.setAttribute("class","d-flex justify-content-between align-items-center")
        cartUl.appendChild(newListItem);
        newListItem.innerHTML = 
        `            
        <div class="d-flex align-items-center">
                <img class="me-2 cart-img" src="${cartProducts[i].imgSrc}" alt />
                <div>
                    <h4 class="m-0">${cartProducts[i].title}</h4>
                    <p class="m-0 desc-cart">Fabric corner living room sofa with pulled out bed 3 seats sofa</p>
                </div>
            </div>
        <button class="btn btn-danger" onclick='deleteFromCart(this)'>Delete</button>
        `
        }
    }
}

showShoppingCart();

function deleteFromCart(btn){
    productimg = btn.parentNode.firstElementChild.firstElementChild.src.slice(22);
    var proCart = showStorage();
    const index = proCart.findIndex(object => {
        return object.imgSrc == productimg;
    });
    

    proCart.splice(index,1);

    
    localStorage.setItem('cartProducts',JSON.stringify(proCart));
    var product = btn.parentNode;
    cartSpan.innerHTML = lengthCart();
    productimg = btn.parentNode.parentNode.removeChild(product)
}