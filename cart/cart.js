let subtotal = 6.0;
let total = 6.0;
let cartCount = document.querySelector("#cart-count");

let subtotalElement = document.querySelector("#subtotal");
let totalElement = document.querySelector("#total");

let countOne = 1;
let countElementOne = document.querySelector("#count-one");
let minusButtonOne = document.querySelector("#minus-one");
let plusButtonOne = document.querySelector("#plus-one");
let priceOne = document.querySelector("#price-one");
let numPriceOne = 3.5;

minusButtonOne.addEventListener("click", function () {
  if (countOne <= 1) {
    return;
  }
  countOne--;
  countElementOne.textContent = countOne;
  numPriceOne = numPriceOne - 3.5;
  priceOne.textContent = "$" + numPriceOne;

  subtotal = subtotal - 3.5;
  total = subtotal;
  totalElement.textContent = "$" + total;
  subtotalElement.textContent = "$" + subtotal;

  console.log(subtotal);
});

plusButtonOne.addEventListener("click", function () {
  countOne++;
  countElementOne.textContent = countOne;
  numPriceOne = numPriceOne + 3.5;
  priceOne.textContent = "$" + countOne * 3.5;

  subtotal = subtotal + 3.5;
  total = subtotal;
  totalElement.textContent = "$" + total;
  subtotalElement.textContent = "$" + subtotal;
});

let countTwo = 1;
let countElementTwo = document.querySelector("#count-two");
let minusButtonTwo = document.querySelector("#minus-two");
let plusButtonTwo = document.querySelector("#plus-two");
let priceTwo = document.querySelector("#price-two");
let numPriceTwo = 2.5;

minusButtonTwo.addEventListener("click", function () {
  if (countTwo <= 1) {
    return;
  }
  countTwo--;

  countElementTwo.textContent = countTwo;
  numPriceTwo = numPriceTwo - 2.5;
  priceTwo.textContent = "$" + numPriceTwo;

  subtotal = subtotal - 2.5;
  total = subtotal;
  totalElement.textContent = "$" + total;
  subtotalElement.textContent = "$" + subtotal;
});

plusButtonTwo.addEventListener("click", function () {
  countTwo++;
  countElementTwo.textContent = countTwo;
  numPriceTwo = numPriceTwo + 2.5;
  priceTwo.textContent = "$" + countTwo * 2.5;

  subtotal = subtotal + 2.5;
  total = subtotal;
  totalElement.textContent = "$" + total;
  subtotalElement.textContent = "$" + subtotal;
});

let productOne = document.querySelector("#product-one");
let removeButtonOne = document.querySelector("#amount1");

removeButtonOne.addEventListener("click", function () {
  productOne.remove();
  subtotal = subtotal - 3.5 * countTwo;
  total = subtotal;
  totalElement.textContent = "$" + total;
  subtotalElement.textContent = "$" + subtotal;

  cartCount.textContent = cartCount.textContent - 1;
});

let productTwo = document.querySelector("#product-two");
let removeButtonTwo = document.querySelector("#amount2");

removeButtonTwo.addEventListener("click", function () {
  productTwo.remove();
  subtotal = subtotal - 2.5 * countTwo;
  total = subtotal;
  totalElement.textContent = "$" + total;
  subtotalElement.textContent = "$" + subtotal;
  cartCount.textContent = cartCount.textContent - 1;
});

let btnCheckout = document.querySelector("#btn-checkout");
btnCheckout.onclick = function () {
  window.location.href = "../delivery/delivery.html";
};
