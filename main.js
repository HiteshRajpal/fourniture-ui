console.log("welcome to javascript")

function starsAndAddToCart(x, element) {
    var div = document.createElement("div")
    div.id = "ratingAndCart"
    div.style.display = "flex"
    div.style.alignItems = "baseline";
    for (var i = 0; i < 5; i++) {
        var imgTag = document.createElement("img");

        if (i < x) {
            imgTag.src = "assest/star.png";
        }
        else {
            imgTag.src = "assest/star-empty.png";
        }

        imgTag.width = "14";
        imgTag.height = "16";
        div.appendChild(imgTag);
    }
    var addToCart = document.createElement("img");
    addToCart.src = "assest/addToCart.png";
    addToCart.height = "30";
    addToCart.width = "30";
    addToCart.style.marginLeft = "auto";
    div.appendChild(addToCart)
    element.appendChild(div);

}
function createProduct(index,displayImage,name,catagoery,price,rating) {
    var productParentDiv = document.createElement("div")
    productParentDiv.id = "product" + index;
    var imageElement = document.createElement("img");
    imageElement.src = displayImage;
    imageElement.style.width = "100%";
    var productName = document.createElement("span");
    productName.style.marginTop = "-4px";
    productName.textContent = name;
    var productCatagoery = document.createElement("div");
    productCatagoery.id = "productCatagoery";
    productCatagoery.style.display = "flex";
    productCatagoery.style.alignItems = "baseline";
    var productCatagoerySpan = document.createElement("span")
    productCatagoerySpan.textContent = catagoery;
    productCatagoerySpan.style.fontSize = "x-small";
    productCatagoerySpan.style.color = "grey";
    productCatagoery.appendChild(productCatagoerySpan);
    var productPrice = document.createElement("span")
    productPrice.textContent = price;
    productCatagoery.appendChild(productPrice);
    productCatagoery.lastChild.style.marginLeft = "auto";

    var element = document.getElementById("listOfProducts");
    productParentDiv.style.display = "flex";
    productParentDiv.style.flexDirection = "column";
    productParentDiv.appendChild(imageElement);
    productParentDiv.appendChild(productName);
    productParentDiv.appendChild(productCatagoery);

    element.appendChild(productParentDiv);
    starsAndAddToCart(rating, productParentDiv);
}
//createProduct();
var response = httpGetAsync("http://localhost:3000/listOfProducts",displayListOfProducts)
function httpGetAsync(theUrl, callback)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
}

console.log(response);

function displayListOfProducts(response){
    response = JSON.parse(response)
    for (var i = 0 ; i < response.length ; i++){
        var product = response[i];
        createProduct(i,product.displayImage,product.name,product.categoery,product.price,product.rating)
    }
displayFilter()
}

function displayFilter(){
    var divBox = document.createElement("div");
    divBox.textContent = "Collection";
    divBox.style.borderBottom = "1px solid";
    divBox.style.display = "flex";
    divBox.style.paddingTop = "50px";
    divBox.style.paddingBottom = "10px"

    var imgArrow = document.createElement("img");
    imgArrow.src = "assest/downArrow.png";
    imgArrow.width = "15";
    imgArrow.height = "18";
    imgArrow.style.marginLeft = "auto";
    divBox.appendChild(imgArrow)
    var element = document.getElementById("filter");
    element.appendChild(divBox)
}

