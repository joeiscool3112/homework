const express = require("express");
const app = express();
const pool = require("./db");
const PORT = 3000;
app.use(express.json());

app.get("/books", async (req, res) => {
  try {
    const { genre, available } = req.query;
    let sql = "SELECT * FROM books";
    const params = [];
    const conditions = [];

    if (genre) {
      params.push(genre);
      conditions.push(`genre = $${params.length}`);
    }
    if (available) {
      params.push(available === "true");
      conditions.push(`available = $${params.length}`);
    }

    if (conditions.length > 0) {
      sql += " WHERE " + conditions.join(" AND ");
    }

    const result = await pool.query(sql, params);
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/books/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query("SELECT * FROM books WHERE id = $1", [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Book not found" });
    }

    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.post("/books", async (req, res) => {
  try {
    const { title, genre, available } = req.body;
    const result = await pool.query(
      "INSERT INTO books (title, genre, available) VALUES ($1, $2, $3) RETURNING *",
      [title, genre, available]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.patch("/books/:id/borrow", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const result = await pool.query("SELECT * FROM books WHERE id = $1", [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Book not found" });
    }

    const book = result.rows[0];
    if (book.available) {
      const updateResult = await pool.query(
        "UPDATE books SET available = false WHERE id = $1 RETURNING *",
        [id]
      );
      const book = updateResult.rows[0];
      res.json({
        message: "Book borrowed successfully",
        book,
      });
    } else {
      res.status(400).json({ message: "Book is already borrowed" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});


app.patch("/books/:id/return", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const result = await pool.query("SELECT * FROM books WHERE id = $1", [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Book not found" });
    }

    const book = result.rows[0];
    if (!book.available) {
      const updateResult = await pool.query(
        "UPDATE books SET available = true WHERE id = $1 RETURNING *",
        [id]
      );
      const book = updateResult.rows[0];
      res.json({
        message: "Book returned successfully",
        book,
      });
    } else {
      res.status(400).json({ message: "Book is not borrowed" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.delete("/books/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const result = await pool.query("DELETE FROM books WHERE id = $1 RETURNING *", [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Book not found" });
    }

    res.json({ message: "Book deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on  http://localhost:${PORT}`);
});