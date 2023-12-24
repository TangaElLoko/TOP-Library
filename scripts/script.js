function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.showInfo = function() {
    return `${this.title} by ${this.author}, ${this.pages}, ${(this.read) ? 'already read' : 'not read yet'}`;
}

const myLibrary = [];
const libraryUL = document.querySelector('#myLibrary');

function addBook(title, author, pages, read) {
    //TODO
    myLibrary.push(new Book(title, author, pages, read));
}

function showLibrary() {
    myLibrary.forEach((book) => {
        const newBook = document.createElement('li');
        newBook.classList.add('book.item');
        newBook.textContent = book.showInfo();
        libraryUL.appendChild(newBook);
    })
}

addBook('pepe', 'el mas guapo', 283, true);

showLibrary();

