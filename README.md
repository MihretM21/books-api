# Books API

A small REST API built with Node.js and Express. It also includes a script that saves books to files and reads them back.

Built as the Week 8 assignment of the Hiruy Full-Stack Bootcamp.

## Part 1: Files (`files.js`)
Uses Node's built-in `fs` module to:
1. Create one book object and save it to `book.json`
2. Read it back and print it on one readable line
3. Create an array of 6 books and save it to `books.json`
4. Read the array back, print how many books there are, then print every book on its own line

Run it:
```
node files.js
```

## Part 2: Server (`server.js`)
An Express server that reads its books from an array in the code. Every book has a unique `id`.

| Request | Result |
|---|---|
| `GET /` | The text: Welcome to the Books API |
| `GET /books` | All books as JSON |
| `GET /books/:id` | The one matching book. If it doesn't exist: status 404 and `{ "error": "Book not found" }` |
| `GET /books?author=...` | Only the books by that author (not case-sensitive). If nothing matches: `[]` |
| `GET /books/count` | `{ "count": <the real number of books> }` |

Example requests:
```
http://localhost:3000/books
http://localhost:3000/books/2
http://localhost:3000/books?author=George Orwell
http://localhost:3000/books/count
```

## How to run it
```
git clone https://github.com/MihretM21/books-api.git
cd books-api
npm install
node server.js
```
Then open `http://localhost:3000` in your browser. Stop the server with `Ctrl + C`.

## Project structure
```
books-api/
├── files.js        (Part 1: write and read files)
├── server.js       (Part 2: Express server)
├── book.json       (one saved book)
├── books.json      (the saved array of 6 books)
├── package.json
└── README.md
```

## Notes
- `/books/count` is defined **before** `/books/:id`. Express uses the first matching route, so otherwise `count` would be read as an id.
- Every route ends with `return res...` so each request gets exactly one response, and no request waits forever.
- The ids in the URL arrive as text, so the code uses `Number(req.params.id)` before comparing.
- The data lives in an array in the code, so it resets when the server restarts.

## Built with
Node.js, Express

## Author
Mihret Dula, [@MihretM21](https://github.com/MihretM21)
