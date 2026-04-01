# Kế hoạch học Thứ 4 – 01-04-2026 (Tuần 9: Node.js & Express)

## Mục tiêu trong ngày

- Bắt đầu chặng đường Backend với Node.js
- Hiểu kiến trúc Client-Server và REST API
- Tự xây dựng Backend API server đầu tiên với Express
- DSA 30 phút: Hash tables và thuật toán tối ưu O(1)

---

## Review

> Frontend Foundation (HTML/CSS) và Dynamic Web (JS/React).

---

## Lý thuyết cần nắm

### 1. Node.js Basics

#### Node.js là gì?

```javascript
// Node.js KHÔNG phải là một ngôn ngữ mới.
// Nó là một runtime environment (môi trường thực thi) cho phép chạy JavaScript ở phía Server.
// JS trên trình duyệt (Browser): thao tác DOM (document, window), UI.
// JS trên Node.js: thao tác File System (fs), Network (http), Database.
```

#### Modules: `require()` và `module.exports`

```javascript
// Thay vì dùng <script src="...">, Node.js dùng hệ thống module (CommonJS)

// --- math.js ---
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;

module.exports = { add, subtract };

// --- app.js ---
const math = require("./math");
console.log(math.add(5, 3)); // 8
```

#### NPM (Node Package Manager)

```bash
# Khởi tạo dự án Node.js (tạo file package.json)
npm init -y

# Cài đặt thư viện của người khác (VD: cài express)
npm install express
# Thư viện sẽ được tải vào thư mục node_modules/
# KHÔNG BAO GIỜ commit thư mục node_modules lên Git! (chỉ cần package.json)
```

#### Built-in modules cơ bản

```javascript
const fs = require("fs");
const path = require("path");

// Đọc file (sync)
const text = fs.readFileSync(path.join(__dirname, "hello.txt"), "utf-8");
console.log(text);
```

---

### 2. REST API Concepts (1h)

#### REST API là gì?

- **API** (Application Programming Interface): Cầu nối giao tiếp giữa Client (React) và Server (Node.js).
- **REST** (Representational State Transfer): Một bộ quy chuẩn phổ biến để thiết kế API.

#### HTTP Methods (Các hành động)

- `GET`: Lấy dữ liệu (READ)
- `POST`: Tạo mới dữ liệu (CREATE)
- `PUT` / `PATCH`: Cập nhật dữ liệu (UPDATE)
- `DELETE`: Xóa dữ liệu (DELETE)

#### Status Codes (Mã trạng thái trả về)

- **2xx (Thành công):** `200 OK`, `201 Created`
- **4xx (Lỗi từ Client):** `400 Bad Request`, `401 Unauthorized`, `404 Not Found`
- **5xx (Lỗi từ Server):** `500 Internal Server Error`

#### Request / Response Cycle

1. Client gửi một HTTP Request (kèm Method, URL, Headers, Body).
2. Server nhận Request, xử lý (kiểm tra DB, Logic).
3. Server trả về HTTP Response (kèm Status Code, Data dạng JSON).

---

### 3. Express Framework (1h)

#### Khởi tạo Server Express cơ bản

```javascript
const express = require("express");
const app = express();
const PORT = 3000;

// Middleware: cho phép server đọc được dạng JSON từ Client gửi lên
app.use(express.json());

// Routes cơ bản
app.get("/", (req, res) => {
  res.send("Hello Backend World!");
});

// Chạy server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
```

#### Định nghĩa RESTful Routes (Ví dụ với Users)

```javascript
let users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];

// GET /users - Lấy tất cả users
app.get("/users", (req, res) => {
  res.json(users);
});

// GET /users/:id - Lấy 1 user cụ thể (Route Parameter)
app.get("/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find((u) => u.id === userId);

  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }
  res.json(user);
});

// POST /users - Tạo user mới (cần Body)
app.post("/users", (req, res) => {
  const { name } = req.body;
  const newUser = { id: users.length + 1, name };
  users.push(newUser);

  res.status(201).json(newUser);
});

// DELETE /users/:id - Xóa user
app.delete("/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  users = users.filter((u) => u.id !== userId);
  res.status(200).json({ message: "Deleted successfully" });
});
```

---

## Bài tập thực hành

### 1) Khởi động Node.js & Modules (1h)

Tạo thư mục `node-drills/`.

- Khởi tạo `npm init -y`.
- Viết 1 file `math.js` chứa các hàm (add, multiply, divide). Xuất ra (export).
- Viết 1 file `app.js` import các hàm đó và chạy thử.
- Cài đặt 1 thư viện npm nhỏ trên mạng (VD: `uuid`), dùng nó tạo ra 5 ID ngẫu nhiên in ra màn hình.

---

### 2) Simple REST API Server — Mini Project

**Yêu cầu:** Xây dựng một API quản lý danh sách Sản phẩm (Products).

**Cấu trúc thư mục:**

```
products-api/
├── package.json
└── server.js
```

**Data mô phỏng (In-memory array):**

```javascript
let products = [
  { id: 1, name: "iPhone 15", price: 1000, category: "Electronics" },
  { id: 2, name: "MacBook Pro", price: 2000, category: "Electronics" },
];
```

**Các Endpoints bắt buộc (CRUD):**

1. **[GET] `/products`**
   - Trả về toàn bộ danh sách sản phẩm.
   - Thêm tính năng query parameter (mở rộng): Nếu gọi `GET /products?category=Electronics`, chỉ trả về sản phẩm điện tử. (Dùng `req.query`).
2. **[GET] `/products/:id`**
   - Tìm và trả về sản phẩm có `id` tương ứng.
   - Dùng `req.params`. Nếu không tìm thấy, trả về status `404 Not Found`.
3. **[POST] `/products`**
   - Đọc `req.body` (name, price, category).
   - Tạo ID mới lớn nhất. Thêm vào mảng.
   - Trả về status `201 Created` và object sản phẩm vừa tạo.
4. **[PUT] `/products/:id`**
   - Tìm sản phẩm. Không thấy -> lỗi 404.
   - Cập nhật thông tin dựa trên `req.body`.
   - Trả về mảng danh sách sau khi update hoặc riêng item đó.
5. **[DELETE] `/products/:id`**
   - Xóa sản phẩm khỏi mảng.
   - Trả về JSON xác nhận đã xóa.

**Công cụ test:**

- Dùng **Postman** hoặc **Thunder Client** (VSCode Extension) để gọi API, gửi JSON body kiểm tra từng trường hợp GET, POST, PUT, DELETE.

---

### 3) Ghi chú học tập (NOTES-2026-04-01.md)

- Phân biệt sự khác nhau giữa Node.js và JavaScript trên trình duyệt.
- API là gì? REST API là gì? Giải thích cho người không biết IT hiểu.
- Trình bày điểm khác nhau giữa HTTP Method GET và POST. Khi nào nên dùng cái nào?
- Liệt kê các HTTP Status Code và ý nghĩa của chúng (ít nhất là 200, 201, 400, 404, 500).
- req.params, req.query, và req.body khác nhau ở chỗ nào trong Express? Xin ví dụ URL đi kèm.

---

## DSA 30 phút

**Focus:** Hash tables và Arrays (O(1) lookups)

**Mục tiêu:**
Thay vì dùng 2 vòng lặp (O(n²)) để kiểm tra tồn tại, chúng ta sử dụng Hash Map (Object / Map trong JS) để lookup trong O(1).

### Exercises:

1. **Valid Anagram** (LeetCode #242)
   - Kiểm tra hai chuỗi chữ có phải đảo chữ của nhau không.
   - Gợi ý: Dùng object để đếm tần suất xuất hiện của chữ cái.
2. **First Unique Character in a String** (LeetCode #387)
   - Tìm chữ cái đầu tiên trong chuỗi không bị lặp lại. Trả về index.
   - Gợi ý: Duyệt qua 1 lần để tạo freq map. Duyệt lại 1 lần nữa để kiểm tra freq.

**Targets:**

- ✅ Giải thích time complexity (O(n)) và space complexity (O(n) / O(26) ~ O(1)) như roadmap đã dặn.
- ✅ Cố gắng làm bằng Object/Map, không dùng nested loops.

---

## Git workflow

- Nhánh: `day/2026-04-01`
- Thư mục: `day-2026-04-01/`
- Commits gợi ý:
  - `"feat: add node modules drills"`
  - `"feat: setup express server for products api"`
  - `"feat: implement get and post products endpoints"`
  - `"feat: implement put and delete products endpoints"`
  - `"chore: add learning notes for node.js and rest apis"`
  - `"feat: solve hash table leetcode problems"`

---

**🎯 Focus ngày hôm nay:** Kiến trúc Client - Server. Hiểu rằng API chính là cái cung cấp thông tin (JSON) cho chiếc "User Directory Web App" (Client) em làm các tuần trước. Code hôm nay là chỉ tạo ra Data/JSON thôi, không có CSS/HTML.