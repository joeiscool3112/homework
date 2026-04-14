import { useEffect } from "react";

function Booklist({
  fetchBooks,
  books,
  title,
  setTitle,
  genre,
  setGenre,
  error,
  handleAddBook,
  handleDeleteBook
}) {

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  

  

return (
  <div className="booklist">
    <h1>Book List</h1>

    <div className="book-controls">
      <input
        type="text"
        placeholder="Book title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="text"
        placeholder="Genre"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
      />

      <button onClick={handleAddBook}>Add Book</button>
    </div>

    {error && <p className="error-text">{error}</p>}

    <ul className="book-list">
      {books.map((book) => (
        <li key={book.id} className="book-item">
          <span>
            <strong>{book.title}</strong> - {book.genre}
          </span>

          <button onClick={() => handleDeleteBook(book.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  </div>
);
}

export default Booklist;