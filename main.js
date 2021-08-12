/* eslint no-unused-vars: 0 no-undef: 0 */
const title = document.querySelector('.title');
const author = document.querySelector('.author');
const button = document.querySelector('.btn');
const dateMonth = document.querySelector('.datetime')


//DATE SECTION

const section = document.createElement('div');
section.classList.add('date-time');
section.innerHTML = `<div>${Date()}<div>`
dateMonth.appendChild(section)

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  // REMOVE BOOK FUNCTION

  displayBookList() {
    this.title = title;
    const list = document.querySelector('.book-list');
    list.innerHTML = '';

    // RETRIEVE THE BOOK FROM LOCAL STORAGE IN JSON FORMAT
    localStorage.getItem('book');

    // CONVERT THE JSON FORMAT BACK TO AN OBJECT
    const bookArray = JSON.parse(localStorage.getItem('book') || '[]');

    // DESTRUCTURE THE STORED DATA IN THE OBJECT PARSED FROM THE LOCALSTORAGE

    bookArray.forEach(({ title, author, id }) => {
      const div = document.createElement('div');
      div.classList.add('book');
      div.innerHTML = `
                        <div>' ${title} '  by ${author}</div>
                        
                        <button class='remove' id = '${id}'>Remove</button>`;

      list.appendChild(div);
    });
  }

  // DELETE BOOK
  deleteBook(el) {
    const books = JSON.parse(localStorage.getItem('book'));
    localStorage.setItem('book', JSON.stringify(books));
    const { id } = el;
    localStorage.setItem(
      'book',
      JSON.stringify(books.filter((book) => book.id !== id)),
    );
    this.displayBookList();
  }
}

// CREATE A NEW INSTANCE OF BOOK
const book = new Book(title, author);

// ADD INPUT VALUE
button.addEventListener('click', () => {
  const books = JSON.parse(localStorage.getItem('book') || '[]');
  const id = Math.random().toString(36).substr(0, 5);
  books.push({ id, title: title.value, author: author.value });
  localStorage.setItem('book', JSON.stringify(books));

  // CLEAR FIELDS AFTER ADD
  title.value = '';
  author.value = '';
  book.displayBookList();
});

// REMOVE BOOK
const removeBtn = document.querySelector('.book-list');

removeBtn.addEventListener('click', (e) => {
  book.deleteBook(e.target);
});

book.displayBookList();
