
// var productNameInput = document.getElementById("productName");
// var productPriceInput = document.getElementById("productPrice");
// var productCategoryInput = document.getElementById("productCategory");
// var productDescriptionInput = document.getElementById("productDescription");

// var containerProducts = [];

// function addProduct() {
//     var product = {
//         name: productNameInput.value,
//         price: productPriceInput.value,
//         category: productCategoryInput.value,
//         description: productDescriptionInput.value
//     }
//     containerProducts.push(product);
//     // console.log(product);
//     displayProducts()

// }

// function clearForm() {
//     productNameInput.value = " ",
//         productPriceInput.value = " ",
//         productCategoryInput.value = " ",
//         productDescriptionInput.value = " "
// }


// function displayProducts() {
//     var temp = '';

//     for (var i = 1; i < containerProducts.length; i++) {

//         temp += `<tr>
//         <td>`+ i + `</td>
//         <td >`+ containerProducts[i].name + `</td>
//         <td>`+ containerProducts[i].price + `</td>
//         <td>`+ containerProducts[i].category + `</td>
//         <td>`+ containerProducts[i].description + `</td>
//         <td><button class="btn btn-outline-warning rounded">Update</button></td>
//         <td><button class="btn btn-outline-danger rounded">Delete</button></td>
//       </tr>`
//     }
//     document.getElementById("tableData").innerHTML = temp;

// }

var productNameInput = document.getElementById("productName");
var productPriceInput = document.getElementById("productPrice");
var productCategoryInput = document.getElementById("productCategory");
var productDescriptionInput = document.getElementById("productDescription");
var productSearchInput = document.getElementById("searchInput");

var addbtn=document.getElementById('addBtn');
var updatebtn=document.getElementById('updateBtn');

var currentIndex=0;

var arrayOfProducts = [];

if (localStorage.getItem('products') != null)//y3ny fe data mn kbl keda
{
    arrayOfProducts = JSON.parse(localStorage.getItem('products'))
    displayProducts(arrayOfProducts)
}


function search(term)
{
    var arrSearch=[];
    for(var i=0 ;i<arrayOfProducts.length;i++)
    {

        if(arrayOfProducts[i].name.toLowerCase().includes(term.toLowerCase())===true)
        {
           arrSearch.push(arrayOfProducts[i])

        }

    }
    console.log(arrSearch);
    displayProducts(arrSearch);

}

function addProduct() {
    var product = {
        name: productNameInput.value,
        price: productPriceInput.value,
        category: productCategoryInput.value,
        description: productDescriptionInput.value
    }
    arrayOfProducts.push(product)

    localStorage.setItem('products', JSON.stringify(arrayOfProducts));
    displayProducts(arrayOfProducts);


}

function displayProducts(arr) {
    var temp = '';
    for (var i = 1; i < arr.length; i++) {

        temp += ` <tr>
    <td>`+ i + `</td>
    <td >`+ arr[i].name + `</td>
    <td>`+ arr[i].price + `</td>
    <td>`+ arr[i].category + `</td>
    <td>`+ arr[i].description + `</td>
    <td><button onclick="setFormForUpdate(`+ [i] + `)" class="btn btn-outline-warning rounded">Update</button></td>
    <td><button onclick="deleteProduct(`+ [i] + `)"  class="btn btn-outline-danger rounded">Delete</button></td>
    </tr>`
    }
    document.getElementById('tableData').innerHTML = temp;
}

function deleteProduct(productIndex) {
    arrayOfProducts.splice(productIndex,1)
    localStorage.setItem('products',JSON.stringify(arrayOfProducts));
    displayProducts(arrayOfProducts)
    // console.log(arrayOfProducts);
   
}

function setFormForUpdate(productIndex){
    currentIndex=productIndex;
    productNameInput.value=arrayOfProducts[productIndex].name;
    productPriceInput.value=arrayOfProducts[productIndex].price;
    productCategoryInput.value=arrayOfProducts[productIndex].category;
    productDescriptionInput.value=arrayOfProducts[productIndex].description;
    addbtn.classList.add('d-none');
    updatebtn.classList.replace('d-none','d-inline-block');

}

function updateProduct(){
    arrayOfProducts[currentIndex].name = productNameInput.value;
    arrayOfProducts[currentIndex].price = productPriceInput.value;
    arrayOfProducts[currentIndex].category = productCategoryInput.value;
    arrayOfProducts[currentIndex].description = productDescriptionInput.value;

    localStorage.setItem('products',JSON.stringify(arrayOfProducts));
    addbtn.classList.replace('d-none','d-inline-block');
    updatebtn.classList.add('d-none')
    displayProducts(arrayOfProducts);
 
}

function clearForm() {
    productNameInput.value = "";
    productPriceInput.value = "";
    productCategoryInput.value = "";
    productDescriptionInput.value = "";
}















