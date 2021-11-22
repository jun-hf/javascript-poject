const container_list = document.querySelector(".container-list");
console.dir(container_list.firstElementChild);

function Book(title = "hp", author = "jk", pages = "100", read = "read") {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.updateRead = function () {
  if (this.read === "read") {
    this.read = "unread";
  } else {
    this.read = "read";
  }
};

let myLibrary = [];

const b1 = new Book();
const b2 = new Book();

myLibrary.push(b1);
myLibrary.push(b2);

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
    readButton.classList.add("read-btn");
    readButton.addEventListener("click", () => arr[i].updateRead());
    div.appendChild(readButton);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "delete";
    div.appendChild(deleteButton);

    container_list.appendChild(div);
  }
};

display(myLibrary);
