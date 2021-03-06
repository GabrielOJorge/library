const bookForm = document.getElementById("book-form");
const addBtn = document.getElementById("add-btn");
const formBg = document.getElementById("form-bg");
const main = document.querySelector("main");

const titleInput = document.getElementById('title');
const authotInput = document.getElementById('author');
const pagesInput = document.getElementById('pages');
const inputElements = document.querySelectorAll('input');

let myLibrary = [];

class Book {
  constructor (title, author, pages, haveRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead;
  }
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

  const newBook = new Book(titleInputValue, authorInputValue, pagesInputValue, haveReadInputValue);
  myLibrary.push(newBook);

  cleanForm();
  hideForm();

  createBookCard(titleInputValue, authorInputValue, pagesInputValue, haveReadInputValue);
}

const displayBookForm = () => {
  main.classList.add("active");
  formBg.classList.add("active");
  bookForm.classList.add("active");
};

const hideForm = () => {
  main.classList.remove("active");
  formBg.classList.remove("active");
  bookForm.classList.remove("active");
};

const cleanForm = () => {
  const formControls = document.querySelectorAll("input");

  formControls.forEach(input => {
    input.value = null
    input.checked = false;
  });
};

inputElements.forEach(input => {
  let message = '';
  
  switch (input.id) {
    case 'title':
      message = 'Enter the title of the book!';
      break;
      
    case 'author':
      message = "Enter the author's name!";
      break;
    
    case 'pages':
      message = 'Enter the number of pages!';
      break;
  }
  
  input.addEventListener('input', () => {
    input.setCustomValidity('');
    input.checkValidity();
  });

  input.addEventListener('invalid', () => {
    if (input.value === '') {
      input.setCustomValidity(message);
      input.classList.add('error');
    }
  });

  bookForm.addEventListener("submit", () => input.classList.remove('error'));
});

bookForm.addEventListener("submit", e => {
  e.preventDefault();
  addBookToLibrary();
});

addBtn.addEventListener("click", displayBookForm);
formBg.addEventListener("click", hideForm);