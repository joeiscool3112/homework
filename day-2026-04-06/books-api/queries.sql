CREATE TABLE books (
    id SERIAL PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    genre VARCHAR(50),
    available BOOLEAN DEFAULT true
);

INSERT INTO books (title, genre) VALUES ('The Pragmatic Programmer', 'Tech');
INSERT INTO books (title, genre) VALUES ('Clean Code', 'Tech');
INSERT INTO books (title, genre) VALUES ('Harry Potter', 'Fantasy');

SELECT * FROM books;

UPDATE books SET available = false WHERE id = 1;

DELETE FROM books WHERE id = 2;

SELECT * FROM books;