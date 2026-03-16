import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
// --- Bài 1: Hello Component ---
// Tạo component <Greeting name="Joe" />
// Hiển thị: "Hello, Joe! Welcome to React."
// Nếu không truyền name → hiển thị "Hello, World!"

function Greeting({ name = 'World' }) {
  return <h1>Hello, {name}! Welcome to React.</h1>;
}

// --- Bài 2: User Card Component ---
// Tạo component <ProfileCard user={userObj} />
// Props: { name, email, avatar, role }
// Render card với thông tin user
// role === 'admin' → border đỏ, role === 'user' → border xanh

// --- Bài 3: Product List ---
// Tạo danh sách sản phẩm:
const products = [
  { id: 1, name: 'iPhone 16', price: 25000000, inStock: true },
  { id: 2, name: 'MacBook Pro', price: 45000000, inStock: false },
  { id: 3, name: 'AirPods Pro', price: 6000000, inStock: true },
  { id: 4, name: 'iPad Air', price: 18000000, inStock: true },
];
// a) Render danh sách products dạng cards
// b) Sản phẩm hết hàng → hiện badge "Sold Out" + opacity 0.5
// c) Tính tổng giá trị sản phẩm còn hàng → hiển thị ở footer

// --- Bài 4: Counter Component ---
// Tạo Counter với: +1, -1, Reset buttons
// Không cho giảm dưới 0
// Count > 10 → đổi màu text sang đỏ

// --- Bài 5: Toggle Component ---
// Tạo Toggle switch: click to show/hide nội dung
// Button text thay đổi: "Show Details" ↔ "Hide Details"
// Nội dung ẩn/hiện bằng conditional rendering

// --- Bài 6: Controlled Input ---
// Tạo form nhập tên
// Hiển thị real-time: "Hello, [tên đang gõ]!"
// Hiển thị character count: "15/50 characters"
// Nếu > 50 ký tự → text đỏ + disable submit button
function App() {
  return (
    <div>
      <Greeting name='Je'/>
    </div>
  );
}

export default App;