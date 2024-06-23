let express = require("express");
const { title } = require("process");
let app = express();
let PORT = 3000;
app.listen(PORT, () => {
  console.log("This server is running");
});
let book = {
  title: "The God Of Small Things",
  author: "Arundhati Roy",
  publicationYear: 1997,
  genre: "Novel",
  isAvailable: true,
  stock: 5,
};
// Question 1: Create an endpoint that returns the details of a book stored on the server.
app.get("/book", (req, res) => {
  res.json(book);
});
// Question 2: Design an endpoint that provides the full title and author of the book.
function getFullTitleAndAuthor(book) {
  return book.title + " " + "by " + book.author;
}
app.get("/book/fulltitle-author", (req, res) => {
  res.json({ fullTitleAndAuthor: getFullTitleAndAuthor(book) });
});
// Question 3: Develop an endpoint to access the genre and availability status of the book.
function getGenreAndAvailability(book) {
  return {
    genre: book.genre,
    availabilty: book.isAvailable,
  };
}
app.get("/book/genre-availability", (req, res) => {
  res.json(getGenreAndAvailability(book));
});
// Question 4: Create an endpoint to calculate and return the age of the book.
function calculateBookAge(book) {
  let currentYear = 2024;
  return currentYear - book.publicationYear;
}
app.get("/book/age", (req, res) => {
  res.json({ age: calculateBookAge(book) });
});
// Question 5: Implement an endpoint to provide a summary of the book including its title, author, genre, and publication year.
function getBookSummary(book) {
  return (
    "Title: " +
    book.title +
    ", Author: " +
    book.author +
    ", Genre: " +
    book.genre +
    ", Published: " +
    book.publicationYear
  );
}
app.get("/book/summary", (req, res) => {
  res.json({ summary: getBookSummary(book) });
});
// Question 6: Develop an endpoint to check the stock status of the book and determine if an order is required.
function checkStockAndOrder(book) {
  if (book.stock > 0) {
    return { status: "inStock", stock: book.stock };
  } else {
    return { status: "Out Of Stock", message: "Order Required" };
  }
}
app.get("/book/stock-status", (req, res) => {
  res.json(checkStockAndOrder(book));
});
