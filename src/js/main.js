const bookForm = document.getElementById("book-form");
const addBtn = document.getElementById("add-btn");
const formBg = document.getElementById("form-bg");
const main = document.querySelector("main");

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

const displayBookForm = () => {
  main.style.filter = "blur(3px)";
  formBg.style.display = "initial";
  bookForm.style.transform = "scale(1)";
};

const hideFormBg = () => {
  main.style.filter = "blur(0px)";
  formBg.style.display = "none";
  bookForm.style.transform = "scale(0)"
};

bookForm.addEventListener("submit", e => {
  e.preventDefault();
  addBookToLibrary();
});

addBtn.addEventListener("click", displayBookForm);
formBg.addEventListener("click", hideFormBg);

// const inputsValues = Array.from(document.querySelectorAll("#book-form input")).reduce((acc, input) => ({...acc, [input.id]: input.value}), {});