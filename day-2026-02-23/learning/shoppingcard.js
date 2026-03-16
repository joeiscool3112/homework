const cart = {
  p1: { name: "ao", price: 10, quantity: 2 },
  p2: { name: "quan", price: 5, quantity: 1 }
};

function calculateTotal(value) {
    let total = 0;
    for (const item of Object.values(cart)) {
    total += item.price * item.quantity;
  }
    return total;
}
console.log("la: ", calculateTotal(cart));

function addProduct(cart, productId, productData) {
    cart[productId] = productData;
}
addProduct(cart, "p3", {name: "tat", price: 2, quantity: 5});
console.log(cart);

function updateQuantity(cart, productId, newQuantity) {
    if (cart[productId]) {
        cart[productId].quantity = Math.max(0, newQuantity);
    }
}
updateQuantity(cart, "p3", 9);
console.log(cart);

function removeProduct(cart, productId) {
    if (cart[productId]) {
        delete cart[productId];
    }
}
removeProduct(cart, "p2");
console.log(cart);