// Book object

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

// Library Object

class Library {
  constructor() {
    this.library = [];
  }

  addBook(book) {
    this.library = [...this.library, book];
  }

  addMutlipleBooks = (arr) => {
    this.library = [...this.library, ...arr];
  };

  deleteBook = (delTitle) => {
    const lib = [];
    for (let i = 0; i < this.library.length; i++) {
      if (this.library[i].title !== delTitle) {
        lib.push(this.library[i]);
      }
    }
    this.library = [...lib];
  };

  updateItemRead = (title) => {
    for (let i = 0; i < this.library.length; i++) {
      if (this.library[i].title === title) {
        this.library[i].read = !this.library[i].read;
      }
    }
  };
}

// creating a new Library and mutliple new books
const library = new Library();
const book1 = new Book("Harry Potter", "J. K. Rowling", "109", true);
const book2 = new Book("Harry Potter2", "J. K. Rowling", "122", false);
const book3 = new Book("Harry Potter3", "J. K. Rowling", "199", false);

library.addMutlipleBooks([book1, book2, book3]);

// creating a book card

function createBookCard(book) {
  const card = document.createElement("div");
  const card_body = document.createElement("div");
  const title = document.createElement("h5");
  const author = document.createElement("h6");
  const page = document.createElement("p");
  const readBtn = document.createElement("a");
  const deleteBtn = document.createElement("a");

  // adding class
  card.classList = "card m-1";
  card.style.width = "18rem";
  card_body.classList = "card-body";
  title.classList = "card-title book-title";
  page.classList = "card-text page";
  author.classList = "card-subtitle mb-2 text-muted author";
  deleteBtn.classList = "btn btn-danger m-1 text-white delete";

  // adding logic to read button
  if (book.read) {
    readBtn.classList = "btn btn-dark m-2 text-white read";
    readBtn.textContent = "Read";
  } else {
    readBtn.classList = "btn btn-secondary m-2 text-white read";
    readBtn.textContent = "Not read";
  }

  // setting content
  title.textContent = book.title;
  author.textContent = book.author;
  page.textContent = `Pages: ${book.pages}`;
  deleteBtn.textContent = "Delete";

  // buidling the content
  card_body.appendChild(title);
  card_body.appendChild(author);
  card_body.appendChild(page);
  card_body.appendChild(readBtn);
  card_body.appendChild(deleteBtn);
  card.appendChild(card_body);
  list.appendChild(card);
}

const list = document.getElementById("card");
createBookCard(book3);
createBookCard(book1);
createBookCard(book2);

// display function

function updateLibrary() {
  clearDisplay();
  for (let i = 0; i < library.library.length; i++) {
    createBookCard(library.library[i]);
  }
}

// adding event listener
list.addEventListener("click", deleteItem);
function deleteItem(e) {
  if (e.target.classList.contains("delete")) {
    const del = e.target.parentElement.childNodes[0].textContent;
    library.deleteBook(del);
    updateLibrary();
  }
}

list.addEventListener("click", updateRead);
function updateRead(e) {
  if (e.target.classList.contains("read")) {
    const readTitle = e.target.parentElement.childNodes[0].textContent;
    library.updateItemRead(readTitle);
    updateLibrary();
  }
}

// clear display function
function clearDisplay() {
  list.innerHTML = "";
}

// adding submit event listener

const submitBtn = document.getElementById("submit");
const addBook = (e) => {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const read = document.getElementById("read").checked;

  addForm.reset();
  const aaa = new Book(title, author, pages, read);
  library.addBook(aaa);
  clearDisplay();
  updateLibrary();
};

submitBtn.addEventListener("click", addBook);
