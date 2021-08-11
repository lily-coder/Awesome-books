/* eslint no-unused-vars: 0 no-undef: 0 */
let id = 0;
const books = [];
const box = document.getElementById('books');
const form = document.querySelector('.book-form');

// ADD CLASS
class Book {
  constructor(id, title, author) {
    this.id = id;
    this.title = title;
    this.author = author;
  }
  // ADD BOOKS TO TABLE LIST
  add() {
    const row = document.createElement('tr');
    row.id = this.id;
    row.innerHTML = `
                        <td>${this.title}</td>
                        <td>${this.author}</td>
                        <td><button type='button' onclick='new Book().remove(${this.id})''>Remove</button></td>`;
    box.appendChild(row);
    const children = box.getElementsByTagName('tr');
  }
  // REMOVE BOOK FROM TABLE LIST
  remove(id) {
    books.splice(id, 1);
    const toremove = document.getElementById(id);
    const children = box.getElementsByTagName('tr');
    for (let i = id; i < children.length; i += 1) {
      const button = children[i].getElementsByTagName('button');
      button[0].setAttribute(
        'onclick',
        `new Book().remove(${children[i].id - 1})`
      );
      children[i].id -= 1;
    }
    for (let j = id; j < books.length; j += 1) {
      books[j].id -= 1;
    }
    box.removeChild(toremove);
    id -= 1;
    // STORE BOOKS DATA IN LOCAL STORAGE
    localStorage.setItem('storage', JSON.stringify(books));
    localStorage.setItem('storage2', id);
  }
}

// POPULATE BOOKS IN LOCAL STORAGE WHEN PAGE IS LOADED
document.addEventListener('DOMContentLoaded', (event) => {
  const box = document.getElementById('books');
  const count = document.createElement('p');
  count.id = 'counter';
  box.appendChild(count);
  if (localStorage.getItem('storage')) {
    const items = localStorage.getItem('storage');
    const parsed = JSON.parse(items);
    id = 0;
    for (let i = 0; i < parsed.length; i += 1) {
      const book = new Book(i, parsed[i].title, parsed[i].author);
      parsed[i].id = i;
      book.add();
      books.push(parsed[i]);
      id += 1;
    }
    id = parsed.length;
  }

  document.querySelector('.btn').addEventListener('click', (e) => {
    const title = document.querySelector('.title').value;
    const author = document.querySelector('.author').value;
    title.value = '';
    author.value = '';
    const book = new Book(id, title, author);
    book.add();
    books.push(book);
    localStorage.setItem('storage', JSON.stringify(books));
    localStorage.setItem('storage2', id);
    id += 1;
    location.reload();
  });
});
