let cartCount = 0;

function addToCart() {
  cartCount++;
  document.getElementById("cart-count").innerHTML = cartCount;
  document.getElementById("cart-count-2").innerHTML = cartCount;
}

let button1 = document.getElementById("button1");
button1.onclick = function () {
  window.location.href = "../cart/cart.html";
};
