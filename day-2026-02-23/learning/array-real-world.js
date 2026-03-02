const products = [
  { id: 1, name: 'Laptop', price: 25000000, stock: 5, category: 'Electronics' },
  { id: 2, name: 'Mouse', price: 200000, stock: 0, category: 'Electronics' },
  { id: 3, name: 'Keyboard', price: 800000, stock: 12, category: 'Electronics' },
  { id: 4, name: 'Desk', price: 3000000, stock: 3, category: 'Furniture' },
  { id: 5, name: 'Chair', price: 2500000, stock: 0, category: 'Furniture' }
];

// 1. Lấy tên tất cả products có stock > 0
function getAvailableProducts(value) {
  // Your code
   return products.filter(product => product.stock > 0).map (product => product.name);
}
console.log("1: ", getAvailableProducts(products));

// 2. Tổng giá trị inventory (price × stock)
function calculateTotalInventoryValue(products) {
  // Your code
 return products.reduce((total, products) => {
    return total + (products.price * products.stock); 
}, 0)
}
 console.log("2: ", calculateTotalInventoryValue(products));
// 3. Tìm product đắt nhất
function findMostExpensiveProduct(products) {
  // Your code
  return products.reduce((max, products) => {
    if (products.price > max.price) {
        return products;
    }
        return max;
  }).name;

}
  
console.log(findMostExpensiveProduct(products));

// 4. Group products by category
// Output: { Electronics: [...], Furniture: [...] }
function groupByCategory(products) {
  // Your code
    return {
        Electronics : products.filter(products => products.category === "Electronics")
    .map(products => products.name),
     Furniture : products.filter(products => products.category === "Furniture")
    .map(products => products.name)
}
}
console.log("4: ", groupByCategory(products))

// 5. Sắp xếp products theo price (giảm dần)
function sortByPriceDesc(products) {
  // Your code
  return products
    .sort((a, b) => b.price - a.price)
    .map(products => products.name);

}
console.log("5: ", sortByPriceDesc(products))
// 6. Filter products trong khoảng giá min-max
function filterByPriceRange(products, minPrice, maxPrice) {

  // Your code
  return products.filter(product => {
    return product.price >= minPrice && product.price <= maxPrice
  })
  .map(product => product.name);
}
console.log("6: ", filterByPriceRange(products, 800000, 3000000));
// 7. Check có product nào out of stock (stock === 0)?
function hasOutOfStock(products) {
  // Your code
  return products.filter( product => product.stock === 0)
  .map(product => product.name);
}
console.log("7: ",hasOutOfStock(products))
// 8. Check tất cả products có price > 0?
function allHaveValidPrice(products) {
  // Your code
  return products.filter( product => product.stock > 0)
  .map(product => product.name);
}
console.log("8: ", allHaveValidPrice(products));
// 9. Tính trung bình giá products trong category cụ thể
function getAveragePriceByCategory(products, category) {
  // Your code
   const filtered = products.filter(p => p.category === category);
  if (filtered.length === 0) return 0;
  const total = filtered.reduce((sum, p) => sum + p.price, 0);
  return total / filtered.length;
}
console.log("9: ", getAveragePriceByCategory(products, "Electronics"));

// 10. Find products by name (case-insensitive search)
function searchProducts(products, searchTerm) {
  // Your code (HINT: use includes() hoặc indexOf())
 for (let i = 0; i < products.length; i++) {
    if (products[i].name.includes(searchTerm)) {
        return products[i];
    }
 }
}
console.log("10: ", searchProducts(products, "Chair"));