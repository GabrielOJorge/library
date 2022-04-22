const bookForm = document.getElementById("book-form");

let myLibrary = [];

function Book(title, author, pages, haveRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.haveRead = haveRead;
}

function addBookToLibrary() {
  const titleInputValue = document.getElementById("title").value;
  const authorInputValue = document.getElementById("author").value;
  const pagesInputValue = Number(document.getElementById("pages").value);
  const haveReadInputValue = Boolean(document.getElementById("have-read").value);

  
  const newBook = new Book(titleInputValue, authorInputValue, pagesInputValue, haveReadInputValue);
  console.log(newBook);

  myLibrary.push(newBook);

  myLibrary.map(book => console.log(book.title));
}

bookForm.addEventListener("submit", e => {
  e.preventDefault();
  addBookToLibrary();
});

// const inputsValues = Array.from(document.querySelectorAll("#book-form input")).reduce((acc, input) => ({...acc, [input.id]: input.value}), {});