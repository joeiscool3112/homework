CREATE TABLE authors (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    country VARCHAR(50)
);

CREATE TABLE books (
    id SERIAL PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    genre VARCHAR(50),
    available BOOLEAN DEFAULT true,
    author_id INTEGER REFERENCES authors(id)
);

INSERT INTO authors (name, country) VALUES
('J.K. Rowling', 'United Kingdom'),
('George R.R. Martin', 'United States');

INSERT INTO books (title, genre, available, author_id) VALUES
('Harry Potter and the Sorcerer''s Stone', 'Fantasy', true, 1),
('Harry Potter and the Chamber of Secrets', 'Fantasy', true, 1),
('A Game of Thrones', 'Fantasy', true, 2);

SELECT books.title, authors.name AS author_name
FROM books
JOIN authors ON books.author_id = authors.id;

UPDATE books
SET available = false
WHERE id = 1;

DELETE FROM books
WHERE id = 2;