let cartCount = 0;

function addToCart() {
  cartCount++;
  document.getElementById("cart-count").innerHTML = cartCount;
  document.getElementById("cart-count-2").innerHTML = cartCount;
}
