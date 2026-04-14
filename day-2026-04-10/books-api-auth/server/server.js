require("dotenv").config();

const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/auth");
const booksRoutes = require("./routes/book");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware chung
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.json({ message: "Books API Auth is running" });
});

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/books", booksRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});