// --- ARROW FUNCTIONS ---

// Bài 1: Viết lại các functions sau bằng arrow function
const double = (n) => n * 2;
const isEven = (n) => n % 2 === 0;
const fullName = (first, last) => `${first} ${last}`;
console.log("1: ", double(4), isEven(10), fullName("joe", "tran"));
// Bài 2: Dùng arrow function + map() để format danh sách
const prices = [100, 200, 350, 50];
const formatted = prices.map(p => `${p}₫`);
console.log("2: ", formatted);
// Output: ["100₫", "200₫", "350₫", "50₫"]

// Bài 3: Arrow function + filter + reduce chain

const orders = [
  { product: 'Laptop', amount: 15000000, status: 'completed' },
  { product: 'Mouse', amount: 200000, status: 'completed' },
  { product: 'Monitor', amount: 5000000, status: 'pending' },
  { product: 'Keyboard', amount: 800000, status: 'completed' }
];
// Tính tổng amount của các orders có status === 'completed'
const total = orders
  .filter(order => order.status === "completed")
  .reduce((sum, order) => sum + order.amount, 0);

console.log("3: ", total);

// --- DESTRUCTURING ---

// Bài 4: Destructure object
const student = {
  name: 'Joe',
  scores: { math: 85, english: 92, physics: 78 },
  hobbies: ['coding', 'reading', 'gaming']
};
const { name, scores: { math }, hobbies: [firstHobby] } = student;
// Extract: name, math score, first hobby
// const { ??? } = student;
console.log("4: ", name);
console.log(math);
console.log(firstHobby);

// Bài 5: Destructure function parameters
// Viết function nhận object và in: "Joe scored 85 in math"
function printScore({ name, scores: { math } }) {
  console.log(`5: ${name} scored ${math} in math`);
}
printScore({
  name: "Joe",
  scores: { math: 85 }
});
// Bài 6: Array destructuring swap
let x = 10, y = 20;
// Swap x và y dùng destructuring (1 dòng)
[x, y] = [y, x];
console.log(`6: x = ${x}, y = ${y}`);


// --- SPREAD / REST ---

// Bài 7: Merge 2 arrays và remove duplicates
const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];
// Output: [1, 2, 3, 4, 5, 6]
// HINT: dùng spread + Set
const arr3 = [...new Set([...arr1, ...arr2])];
console.log("7: ", arr3);
// Bài 8: Clone object và override 1 property
const config = { theme: 'dark', lang: 'vi', fontSize: 14 };
// Tạo newConfig giống config nhưng fontSize = 16
const newconfig = {...config, fontSize: 16};
console.log("8: ", newconfig);

// Bài 9: Viết function nhận bất kỳ số lượng arguments
// function multiply(multiplier, ...numbers) → return array of (number * multiplier)
// multiply(2, 1, 2, 3) → [2, 4, 6]
function multiply(multiplier, ...number) {
    return number.map(n => n * multiplier);
}
console.log("9: ", multiply(2, 1, 2, 3));

// Bài 10: Destructuring + rest — tách head và tail
const data = ['header', 'row1', 'row2', 'row3', 'row4'];
// Extract: header = 'header', rows = ['row1', 'row2', 'row3', 'row4']
const [head, ...tail] = data;
console.log(`10: head = ${head} tail = ${tail}`);


// --- TEMPLATE LITERALS ---

// Bài 11: Viết function tạo HTML card từ object
// Input: { name: 'Joe', role: 'Developer', avatar: 'joe.png' }
// Output: chuỗi HTML hoàn chỉnh (dùng template literal multi-line)
function createCard(user) {
  return `
  <div class="card">
    <img src="${user.avatar}" alt="${user.name}">
    <h2>${user.name}</h2>
    <p>${user.role}</p>
  </div>
  `;
}
const user2 = {
  name: "Joe",
  role: "Developer",
  avatar: "joe.png"
};

console.log("11: ", createCard(user2));
// Bài 12: Tagged template literal (nghiên cứu thêm)
// Viết function highlight() dùng với template literal:
// highlight`Hello ${name}, you have ${count} messages`
// Output: "Hello **Joe**, you have **5** messages"

function highlight(name, msg) {
    console.log(`Hello **${name}**, you have **${msg}** messages`);
}
console.log("12: ", highlight("joe", 5));