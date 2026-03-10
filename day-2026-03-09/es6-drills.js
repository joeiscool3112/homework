// Bài 1: Viết lại bằng arrow function (one-liner nếu được)
const square = (n) => n * n;
const greet = (name) => `Hello, ${name}!`;
const isPositive = (n) => n > 0;
console.log("1:", square(5));
console.log("1:", greet("Joe"));
console.log("1:", isPositive(10));
console.log("1:", isPositive(-3));

// Bài 2: Dùng arrow + map() — format prices
const prices = [100000, 250000, 3500000, 50000];
// Output: ["100,000₫", "250,000₫", "3,500,000₫", "50,000₫"]
// HINT: dùng toLocaleString('vi-VN')
const formattedPrices = prices.map((price) => `${price.toLocaleString("vi-VN")}₫`);

console.log("2:", formattedPrices);

// Bài 3: Dùng arrow + filter + reduce — chain
const transactions = [
  { type: 'income', amount: 5000000, description: 'Salary' },
  { type: 'expense', amount: 200000, description: 'Coffee' },
  { type: 'income', amount: 1000000, description: 'Freelance' },
  { type: 'expense', amount: 500000, description: 'Dinner' },
  { type: 'expense', amount: 150000, description: 'Books' }
];
// a) Tính tổng income
const totalIncome = transactions
  .filter((item) => item.type === "income")
  .reduce((sum, item) => sum + item.amount, 0);
// b) Tính tổng expense
const totalExpense = transactions
  .filter((item) => item.type === "expense")
  .reduce((sum, item) => sum + item.amount, 0);
// c) Tính balance (income - expense)
const balance = totalIncome - totalExpense;
// d) Lấy tên tất cả expenses có amount > 200000
const bigExpenses = transactions
  .filter((item) => item.type === "expense" && item.amount > 200000)
  .map((item) => item.description);

console.log("3a - total income:", totalIncome);
console.log("3b - total expense:", totalExpense);
console.log("3c - balance:", balance);
console.log("3d - expenses > 200000:", bigExpenses);

// Bài 4: Viết higher-order function
// createMultiplier(3) trả về function nhân cho 3
// const triple = createMultiplier(3);
// triple(5) → 15
// triple(10) → 30
const createMultiplier = (multiplier) => (value) => value * multiplier;
const triple = createMultiplier(3);
console.log("4:", triple(5));
console.log("4:", triple(10));

// Bài 5: Object destructuring
const apiResponse = {
  status: 200,
  data: {
    user: {
      id: 42,
      name: 'Joe Tran',
      address: { city: 'Hanoi', country: 'Vietnam' }
    },
    token: 'abc123'
  }
};
// Extract: status, user name, city, token (dùng nested destructuring)
const {
  status,
  data: {
    user: {
      name,
      address: { city }
    },
    token
  }
} = apiResponse;
console.log("5:", status, name, city, token);


// Bài 6: Array destructuring với default values
{const rgb = [255, 128];
// Extract: r=255, g=128, b=0 (b mặc định 0 nếu thiếu)
const [r, g, b = 0] = rgb;
console.log("6:", r, g, b);}
// Bài 7: Function parameter destructuring
// Viết function renderUser({ name, email, role = 'user' })
// → return `<div class="user ${role}"><h3>${name}</h3><p>${email}</p></div>`
const renderUser = ({ name, email, role = "user" }) =>
  `<div class="user ${role}"><h3>${name}</h3><p>${email}</p></div>`;

console.log("7:", renderUser({ name: "Joe", email: "joe@mail.com" }));
console.log("7:", renderUser({ name: "Alice", email: "alice@mail.com", role: "admin" }));

// Bài 8: Swap variables bằng destructuring
let a = 'hello', b = 'world';
// Swap → a = 'world', b = 'hello' (1 dòng)
[a, b] = [b, a];

console.log("8:", a, b);

// Bài 9: Merge arrays + remove duplicates
const frontend = ['HTML', 'CSS', 'JavaScript', 'React'];
const backend = ['Node.js', 'Express', 'JavaScript', 'PostgreSQL'];
// Output: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express', 'PostgreSQL']
// HINT: new Set([...])
const mergedSkills = [...new Set([...frontend, ...backend])];
console.log("9:", mergedSkills);

// Bài 10: Clone and modify nested object
const defaults = {
  theme: 'light',
  notifications: { email: true, sms: false, push: true },
  language: 'vi'
};
// Tạo userSettings: giống defaults nhưng theme='dark', notifications.sms=true
// ⚠️ Phải deep clone notifications (không chỉ spread level 1)
const userSettings = {
  ...defaults,
  theme: "dark",
  notifications: {
    ...defaults.notifications,
    sms: true
  }
};
console.log("10:", userSettings);
// Bài 11: Rest parameters
// Viết function log(level, ...messages)
// log('ERROR', 'Connection failed', 'Retrying...', 'Port 3000')
// Output: "[ERROR] Connection failed | Retrying... | Port 3000"
const log = (level, ...messages) => `[${level}] ${messages.join(" | ")}`;
console.log("11:", log("ERROR", "Connection failed", "Retrying...", "Port 3000"));


// Bài 12: Viết function pick(obj, ...keys)
// pick({ a: 1, b: 2, c: 3 }, 'a', 'c') → { a: 1, c: 3 }
// HINT: dùng reduce + destructuring
const pick = (obj, ...keys) =>
  keys.reduce((result, key) => {
    if (key in obj) {
      result[key] = obj[key];
    }
    return result;
  }, {});

console.log("12:", pick({ a: 1, b: 2, c: 3 }, "a", "c"));