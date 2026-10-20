const fs = require("fs");

// Steps 1-2: one book, save it, read it back
const book = {
  id: 1,
  title: "Things Fall Apart",
  author: "Chinua Achebe",
  year: 1958,
  genre: "Novel",
};
fs.writeFileSync("book.json", JSON.stringify(book, null, 2));

const savedBook = JSON.parse(fs.readFileSync("book.json", "utf8"));
console.log(
  `${savedBook.id}. ${savedBook.title} by ${savedBook.author} (${savedBook.year}) - ${savedBook.genre}`,
);

// Steps 3-4: array of 6 books, save it, read it back
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
fs.writeFileSync("books.json", JSON.stringify(books, null, 2));

const savedBooks = JSON.parse(fs.readFileSync("books.json", "utf8"));
console.log(`Total books: ${savedBooks.length}`);
savedBooks.forEach((b) => {
  console.log(`${b.id}. ${b.title} by ${b.author} (${b.year}) - ${b.genre}`);
});
