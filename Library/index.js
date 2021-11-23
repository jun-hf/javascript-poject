const container_list = document.querySelector(".container-list");
const addForm = document.querySelector("#addForm");
const submitBtn = document.querySelector("#submit");

function Book(
  title = "Harry Potter",
  author = "J,K",
  pages = "300",
  read = "read"
) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.updateRead = function () {
  if (this.read === "read") {
    this.read = "no read";
    console.log(this.read);
  } else {
    this.read = "read";
    console.log(this.read);
  }
  clearContainer();
  display(myLibrary);
};

let myLibrary = [];

const b1 = new Book();
const b2 = new Book();

myLibrary.push(b1);
myLibrary.push(b2);

// clear container
const clearContainer = () => {
  const container_list = document.querySelector(".container-list");
  container_list.innerHTML = "";
};

// create a function that will re-render myLibrary
const display = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    const div = document.createElement("div");
    div.classList.add("container");

    const h2 = document.createElement("h2");
    h2.textContent = arr[i].title;
    div.appendChild(h2);

    const author = document.createElement("p");
    author.textContent = arr[i].author;
    div.appendChild(author);

    const pages = document.createElement("p");
    pages.textContent = arr[i].pages;
    div.appendChild(pages);

    const read = document.createElement("p");
    read.textContent = arr[i].read;
    div.appendChild(read);

    const readButton = document.createElement("button");
    readButton.textContent = "read";
    readButton.addEventListener("click", () => arr[i].updateRead());
    div.appendChild(readButton);

    container_list.appendChild(div);
  }
};

display(myLibrary);

const addBook = () => {
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const pages = document.querySelector("#pages").value;
  const read = document.querySelector("#read").value;

  addForm.reset();
  myLibrary.push(new Book(title, author, pages, read));
  clearContainer();
  display(myLibrary);
};

submitBtn.addEventListener("click", () => addBook());
