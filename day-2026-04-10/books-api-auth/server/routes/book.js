const express = require("express");
const router = express.Router();
const pool = require("../config/db");
const authMiddleware = require("../middleware/mauth");

// GET /api/books
router.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM books");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// POST /api/books
router.post("/", authMiddleware, async (req, res) => {
  try {
    const userId = req.user.userId;
    const { title, genre } = req.body;

    const result = await pool.query(
      "INSERT INTO books (title, genre, user_id) VALUES ($1, $2, $3) RETURNING *",
      [title, genre, userId]
    );

    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// DELETE /api/books/:id
router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    const userId = req.user.userId;
    const bookId = req.params.id;

    const result = await pool.query(
      "DELETE FROM books WHERE id = $1 AND user_id = $2 RETURNING *",
      [bookId, userId]
    );

    if (result.rows.length === 0) {
      return res.status(403).json({ error: "You can only delete your own books" });
    }

    res.json({ message: "Book deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;