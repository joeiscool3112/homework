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

function ProfileCard({name, email, avatar, role}) {
   return (
    <div
      style={{
        border: role === 'admin' ? '2px solid red' : '2px solid blue',
        textAlign: 'center',
        borderRadius: '10px',
        maxWidth: '400px',
        margin: '0 auto',
        padding: '10px',
        marginBottom: '20px',
          }}
    >
      <img
        src={avatar}
        alt={name}
        style={{ width: '80px', borderRadius: '50%' }}
      />
      <h3>{name}</h3>
      <p>{email}</p>
      <p>Role: {role}</p>
    </div>
  );
}

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
function Renderproduct({products}) {
  const total = products.reduce((sum, item) => {
    return item.inStock ? sum + item.price : sum;
  }, 0);
  return(
    <div>
      {products.map((item) => {
return (
  <div key={item.id}
  style={{
    border: '1px solid yellow',
    textAlign: 'center',
    borderRadius: '10px',
    maxWidth: '400px',
    margin: '0 auto',
    padding: '10px',
    marginBottom: '20px',
    opacity: item.inStock ? 1 : 0.5,
  }}>
    <h3>{item.name}</h3>
    <h3>Price: {item.price} VND</h3>
    <h3>Stock: {item.inStock ? 'Avalaible' : 'Sold out'}</h3>
  </div>
);
})}
     <footer style={{
      marginTop: '20px',
      marginBottom: '20px',
     }}>
        Total: {total} VND
      </footer>  
    </div>
  )
}

// --- Bài 4: Counter Component ---
// Tạo Counter với: +1, -1, Reset buttons
// Không cho giảm dưới 0
// Count > 10 → đổi màu text sang đỏ
function Counter() {
  const [count, setCount] = useState(0);
  return (
      <div>
        <p style={{
          color: count > 10 ? 'Red' : 'green',
        }} >Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>+1</button>
        <button onClick={() => setCount(count > 0 ? count - 1 : 0)}>
          -1
        </button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    );
}

// --- Bài 5: Toggle Component ---
// Tạo Toggle switch: click to show/hide nội dung
// Button text thay đổi: "Show Details" ↔ "Hide Details"
// Nội dung ẩn/hiện bằng conditional rendering
function ToggleDetails() {
  const [show, setShow] = useState(false);

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <button style={{
        textAlign: 'center',
        borderRadius: '10px',
        maxWidth: '400px',
        margin: '0 auto',
        padding: '10px',
        marginBottom: '20px',
      }} 
      onClick={() => setShow(!show)}>
        {show ? 'Hide Details' : 'Show Details'}
      </button>

      {show && (
        <p style={{ margin: '10px' }}>
          Đây là phần nội dung đang được hiển thị.
        </p>
      )}
    </div>
  );
}

// --- Bài 6: Controlled Input ---
// Tạo form nhập tên
// Hiển thị real-time: "Hello, [tên đang gõ]!"
// Hiển thị character count: "15/50 characters"
// Nếu > 50 ký tự → text đỏ + disable submit button
function NameType() {
  const [name, setName] = useState('');
  return (
    <div
      style={{
        marginTop: '20px',
        textAlign: 'center',
        padding: '20px',
      }}
    >
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
        style={{
          padding: '10px',
          width: '250px',
          borderRadius: '8px',
          border: '1px solid gray',
        }}
      />

      <h3>Hello, {name || '...'}!</h3>

      <p
        style={{
          color: name.length > 50 ? 'red' : 'white',
        }}
      >
        {name.length}/50 characters
      </p>

      <button
        disabled={name.length > 50}
        style={{
          padding: '10px 16px',
          borderRadius: '8px',
          cursor: name.length > 50 ? 'not-allowed' : 'pointer',
          opacity: name.length > 50 ? 0.5 : 1,
        }}
      >
        Submit
      </button>
    </div>
  );
}

function App() {
  return (
    <div>
      <Greeting name='Joe'/>
      <Counter/>
      <ToggleDetails/>
      <NameType/>
      <ProfileCard name='Joe' email='email@gmail.com' avatar={heroImg} role='user'/>
      <Renderproduct products={products}/>
    </div>
  );
}

export default App;