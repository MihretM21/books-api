const express = require("express");
const app = express();
const PORT = 3000;

const books = [
  {
    id: 1,
    title: "Things Fall Apart",
    author: "Chinua Achebe",
    year: 1958,
    genre: "Novel",
  },
  {
    id: 2,
    title: "Fikir Eske Mekabir",
    author: "Haddis Alemayehu",
    year: 1958,
    genre: "Novel",
  },
  {
    id: 3,
    title: "The Alchemist",
    author: "Paulo Coelho",
    year: 1988,
    genre: "Fiction",
  },
  {
    id: 4,
    title: "Half of a Yellow Sun",
    author: "Chimamanda Ngozi Adichie",
    year: 2006,
    genre: "Historical",
  },
  {
    id: 5,
    title: "1984",
    author: "George Orwell",
    year: 1949,
    genre: "Dystopian",
  },
  {
    id: 6,
    title: "Animal Farm",
    author: "George Orwell",
    year: 1945,
    genre: "Satire",
  },
];

app.get("/", (req, res) => {
  res.send("Welcome to the Books API");
});

app.get("/books", (req, res) => {
  const { author } = req.query;
  if (author) {
    const result = books.filter(
      (b) => b.author.toLowerCase() === author.toLowerCase(),
    );
    return res.json(result);
  }
  res.json(books);
});

app.get("/books/count", (req, res) => {
  res.json({ count: books.length });
});

app.get("/books/:id", (req, res) => {
  const book = books.find((b) => b.id === Number(req.params.id));
  if (!book) {
    return res.status(404).json({ error: "Book not found" });
  }
  res.json(book);
});

app.listen(PORT, () => {
  console.log(`Books API running on http://localhost:${PORT}`);
});
