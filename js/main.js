/*

Ajax = Async Javascript And Xml

GET     --->    Get data from database
POST    --->    Send data to database
UPDATE  --->    Update data on database
DELETE  --->    Delete data from database
PATCH   --->    Update piece of data on database

product_api.readyState == 0 // Connection is not Estabilished
product_api.readyState == 1 // Connection is Estabilished
product_api.readyState == 2 // Request is Recieved
product_api.readyState == 3 // Request is Procesing
product_api.readyState == 4 // Request finished & response ready

product_api.response   --->     will get the data to me

*/

var product_api = new XMLHttpRequest(); // New Instance
product_api.open("GET", "https://dummyjson.com/products"); //Estabilish Connection
product_api.send(); // Tells the api to send data to my App
var product_obj = [];

product_api.addEventListener("readystatechange", function () {
  if (product_api.readyState == 4) {
    console.log(JSON.parse(product_api.response));
    product_obj = JSON.parse(product_api.response);
    print_products();
  }
});

function print_products() {
  var products_div = ``;
  for (var i = 0; i < 6; i++) {
    products_div += `
        <div class="col-md-4 mb-4">
            <div class="card-group">
                <div class="card scale">
                    <div class="card-img">
                        <img src="${product_obj.products[i].thumbnail}" class="card-img-top" alt="...">
                        <div class="sale-tag">${product_obj.products[i].discountPercentage}%</div>
                    </div>
                    <div class="card-info mt-4">
                        <span class="ps-4">${product_obj.products[i].category} | ${product_obj.products[i].brand}</span>
                        <span class="pe-4"><i class="fa-solid fa-comment"></i> ${product_obj.products[i].id} Comments</span>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title p-2">${product_obj.products[i].title}</h5>
                        <p class="card-text p-2">${product_obj.products[i].description}</p>
                    </div>
                    <div class="card-bootom mb-3">
                      <button class="btn btn-green ms-4"><i class="fa-solid fa-cart-plus"></i>
                      <span class="pe-2 ps-4">Add To Cart</span></button>
                      <span class="fs-5 price me-4">$${product_obj.products[i].price}</span>
                        
                    </div>
                </div>
            </div>
        </div>
        `;
  }
  document.getElementById("product_items").innerHTML = products_div;
}
