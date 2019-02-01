var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var price = Math.floor(100*(Math.random()))
 var itemObj ={[item]:price}
 cart.push(itemObj)
 console.log(`${item}) has been added to your cart.`)
 return  cart
}
addToCart('banana')
addToCart('apple')
addToCart('orange')
addToCart('strawberry')
addToCart('blueberry')

function viewCart() {
  // write your code here
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
