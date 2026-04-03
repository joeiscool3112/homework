let products = [
  { id: 1, name: "iPhone 15", price: 1000, category: "Electronics" },
  { id: 2, name: "MacBook Pro", price: 2000, category: "Electronics" },
  { id: 3, name: "Pen", price: 20, category: "Stationery" }
];

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


app.get("/products", (req, res) => {
    const { category } = req.query;

    if (category) {
        const filteredProducts = products.filter(
            product => product.category === category
        );
        if (!filteredProducts.length) {
            return res.status(404).json({ error: "No products found for the specified category" });
        }
        return res.json(filteredProducts);
    }

    res.json(products);
});

app.get("/products/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const product = products.find(p => p.id === id);
    if (!product) {
        return res.status(404).json({ error: "Product not found" });
    }
    res.json(product);
});


app.post("/products", (req, res) => {
    const { name, price, category } = req.body;

    if (!name || !price || !category) {
        return res.status(400).json({ error: "Missing required fields: name, price, category" });
    }
    const newProduct = {
        id: products.length + 1,
        name,
        price,
        category
    };
    products.push(newProduct);
    res.status(201).json(newProduct);
});

app.put("/products/:id", (req, res) => {
    const { id } = req.params;
    const { name, price, category } = req.body;
    const productIndex = products.findIndex(p => p.id === parseInt(id));
    if (productIndex === -1) {
        return res.status(404).json({ error: "Product not found" });
    }
    const updatedProduct = { ...products[productIndex], name, price, category };
    products[productIndex] = updatedProduct;
    res.json(updatedProduct);
});


app.delete("/products/:id", (req, res) => {
  const ProductId = parseInt(req.params.id);
  products = products.filter((p) => p.id !== ProductId);
  res.status(200).json({ message: "Deleted successfully" });
});
