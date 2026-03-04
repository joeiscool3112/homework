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



//Scenario 2: Student Performance Analytics
const classData = [
  { id: 1, name: 'Nguyen Van A', math: 8, physics: 7, english: 9 },
  { id: 2, name: 'Tran Thi B', math: 6, physics: 8, english: 7 },
  { id: 3, name: 'Le Van C', math: 9, physics: 9, english: 8 },
  { id: 4, name: 'Pham Thi D', math: 4, physics: 6, english: 6 },
  { id: 5, name: 'Hoang Van E', math: 10, physics: 9, english: 10 }
];
// 1. Tính điểm trung bình mỗi học sinh (add property "average")
function addAverageScores(classData) {
  // Return new array with average property
  return classData.map(student => {
    const average = ((student.math + student.physics + student.english) / 3).toFixed(2);
    return { ...student, average };
  });
}

console.log("1: ", addAverageScores(classData));
// 2. Find top performer (highest average)
function findTopStudent(classData) {
  // Your code
  const temp_class_data = addAverageScores(classData);
  return temp_class_data.reduce((max, student) => {
    if (student.average > max.average) {
        return student;
    }
        return max;
  }
)
.name;
}
console.log("2: ", findTopStudent(classData));

// 3. Count students có average >= 8.0 (Giỏi)
function countExcellentStudents(classData) {
  // Your code
  const temp_class_data = addAverageScores(classData);
  return temp_class_data.filter(student => student.average >= 8).map(student => student.name);
}
console.log("3: ", countExcellentStudents(classData));

// 4. Tính điểm trung bình của cả lớp cho từng môn
function getSubjectAverages(classData) {
  // Return: { math: 7.6, physics: 7.8, english: 8 }
  let sum_math = 0;
  let sum_physics = 0;
  let sum_english = 0;
  for (let student of classData) {
    sum_math += student.math;
    sum_physics += student.physics;
    sum_english += student.english;
  }
  return {
    math: sum_math / classData.length,
    physics: sum_physics / classData.length,
    english: sum_english / classData.length
  }
}
console.log("4: ", getSubjectAverages(classData));
// 5. Find students failing any subject (< 5)
function findFailingStudents(classData) {
  // Your code
  return classData.filter(student => student.math < 5 || student.physics < 5 || student.english < 5)
  .map(student => student.name);
}
console.log("5: ", findFailingStudents(classData));
