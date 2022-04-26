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

  createBookCard(title, author, pages, haveRead);
}

const createBookCard = (title, author, pages, haveRead) => {
  const divTitleAuthor = document.createElement("div");

  const bookTitle = document.createElement("h2");
  bookTitle.textContent = title;

  const By = document.createElement("h2");
  By.textContent = "By";

  const bookAuthor = document.createElement("h2");
  bookAuthor.textContent = author;

  divTitleAuthor.append(bookTitle, By, bookAuthor);

  const divPages = document.createElement("div");
  const bookPages = document.createElement("h2");
  bookPages.textContent = pages;

  divPages.appendChild(bookPages);

  const divBtns = document.createElement("div");

  const readBtn = document.createElement("button");
  haveRead ? readBtn.textContent = "Read" : readBtn.textContent = "Not read";
  readBtn.addEventListener("click", () => {
    readBtn.textContent === "Read" ? readBtn.textContent = "Not read" : readBtn.textContent = "Read";
  });

  const delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.addEventListener("click", () => divBook.style.display = "none");

  divBtns.append(readBtn, delBtn);

  const divBook = document.createElement("div");
  divBook.classList.add("book-form", "-book");
  divBook.append(divTitleAuthor, divPages, divBtns)

  const libraryBookshelf = document.querySelector(".library-bookshelf");

  libraryBookshelf.append(divBook);
}

const addBookToLibrary = () => {
  const titleInputValue = document.getElementById("title").value;
  const authorInputValue = document.getElementById("author").value;
  const pagesInputValue = Number(document.getElementById("pages").value);
  const haveReadInputValue = document.getElementById("have-read").checked;

  const formControls = document.querySelectorAll("input");
  
  const newBook = new Book(titleInputValue, authorInputValue, pagesInputValue, haveReadInputValue);
  myLibrary.push(newBook);

  formControls.forEach(input => {
    input.value = null
    input.checked = false;
    hideForm();
  });
}

const displayBookForm = () => {
  main.style.filter = "blur(3px)";
  formBg.style.display = "initial";
  bookForm.style.transform = "scale(1)";
};

const hideForm = () => {
  main.style.filter = "blur(0px)";
  formBg.style.display = "none";
  bookForm.style.transform = "scale(0)"
};

bookForm.addEventListener("submit", e => {
  e.preventDefault();
  addBookToLibrary();
});

addBtn.addEventListener("click", displayBookForm);
formBg.addEventListener("click", hideForm);

// const inputsValues = Array.from(document.querySelectorAll("#book-form input")).reduce((acc, input) => ({...acc, [input.id]: input.value}), {});