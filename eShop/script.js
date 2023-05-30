function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }
let itemscart = []
let totalPrice = 0;

function addToCart(produktId) {
  var productName = document.getElementById(produktId).getElementsByClassName("cart-title")[0].innerHTML
  var productPrice = parseInt(document.getElementById(productId).getElementsByClassName("cart-price")[0].innerHTML)

let product = {
  name: productName,
  price: produktPrice,
  quantity: 1
};

let productToFind = itemsCart.find(item => item.name === productName);

if (productToFind) {
    productToFind.quantity++;
    totalPrice += productPrice;
} else {
  itemscart.push(product)
  totalPrice += productPrice;
}

console.log(itemscart , totalPrice);
}

