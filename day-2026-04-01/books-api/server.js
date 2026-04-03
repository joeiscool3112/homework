const express = require("express");
const app = express();
const PORT = 3000;

let books = [
  {
    id: 1,
    title: "The Pragmatic Programmer",
    author: "David Thomas",
    genre: "Tech",
    available: true,
  },
  {
    id: 2,
    title: "Clean Code",
    author: "Robert Martin",
    genre: "Tech",
    available: false,
  },
  {
    id: 3,
    title: "Sapiens",
    author: "Yuval Noah Harari",
    genre: "History",
    available: true,
  },
];

app.use(express.json());

app.get("/books", (req, res) => {
  let result = books;
  const { genre, available } = req.query;
  if (genre) {
    result = result.filter((book) => book.genre === genre);
  }
  if (available) {
    result = result.filter((book) => book.available === (available === "true"));
  }
  res.json(result);
});

app.get("/books/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const book = books.find((b) => b.id === id);
  if (book) {
    res.json(book);
  } else {
    res.status(404).json({ message: "Book not found" });
  }
});

app.post("/books", (req, res) => {
  const { title, author, genre, available } = req.body;
  const newBook = {
    id: books.length + 1,
    title,
    author,
    genre,
    available,
  };
  books.push(newBook);
  res.status(201).json(newBook);
});

app.patch("/books/:id/borrow", (req, res) => {
  const id = parseInt(req.params.id);
  const book = books.find((b) => b.id === id);
  if (book) {
    if (book.available) {
      book.available = false;
      res.json({
        message: "Book borrowed successfully",
        book,
      });
    } else {
      res.status(400).json({ message: "Book is already borrowed" });
    }
  } else {
    res.status(404).json({ message: "Book not found" });
  }
});


app.patch("/books/:id/return", (req, res) => {
  const id = parseInt(req.params.id);
  const book = books.find((b) => b.id === id);
  if (book) {
    if (!book.available) {
      book.available = true;
      res.json({
        message: "Book returned successfully",
        book,
      });
    } else {
      res.status(400).json({ message: "Book is not borrowed" });
    }
  } else {
    res.status(404).json({ message: "Book not found" });
  }
});

app.delete("/books/:id", (req, res) => {
  const id = parseInt(req.params.id);
  books = books.filter((b) => b.id !== id);
  res.json({ message: "Book deleted" });
});

app.listen(PORT, () => {
  console.log(`Server is running on  http://localhost:${PORT}`);
});