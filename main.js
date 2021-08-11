/* eslint no-unused-vars: 0 no-undef: 0 */
const books = [];

setTimeout(() => {
  const box = document.getElementById('books');
  count.id = 'counter';
  box.appendChild(count);
}, 1);

// ADD BOOKS TO TABLE LIST
class Book {
  constructor(id, title, author){
    this.id = id;
    this.title = title;
    this.author = author;
  }

  add(){
    const form = document.querySelector('.book-form');
    const title = document.querySelector('.title').value;
    const author = document.querySelector('.author').value;
    const box = document.getElementById('books');
    if (title !== '' && author !== '') {
    const book = {
      this.id,
      this.title,
      this.author,
    };
    this.id += 1;
    books.push(book);
    const row = document.createElement('tr');
    row.id = id;
    row.innerHTML = `
                      <td>Title: ${this.title}</td>
                      <td>Author: ${this.author}</td>
                      <td><button type='button' onclick='remove(${this.id}),store()'>Remove</button></td>`;
    box.appendChild(row);
    } else {
      alert('Please make sure to fill all fields!');
    }
  }
}



// REMOVE BOOK FUNCTION
remove = (n) => {
  books.splice(n, 1);
  const toremove = document.getElementById(n);
  const box = document.getElementById('books');
  const children = box.getElementsByTagName('tr');
  for (let i = n; i < children.length; i += 1) {
    const button = children[i].getElementsByTagName('button');
    button[0].setAttribute('onclick', `remove(${children[i].id - 1}),store()`);
    children[i].id -= 1;
  }
  box.removeChild(toremove);
  id -= 1;
};

// STORE ADDED BOOK DATA IN LOCAL STORAGE
store = () => {
  const box = document.getElementById('books');
  const children = box.getElementsByTagName('tr');
  if (children.length === 0) {
    id = 0;
  }
  localStorage.setItem('storage', JSON.stringify(books));
  localStorage.setItem('storage2', id);
};

// POPULATE STORED BOOKS FROM LOCAL STORAGE
populate = () => {
  if (localStorage.getItem('storage')) {
    const listOfBooks = localStorage.getItem('storage');
    const parsed = JSON.parse(listOfBooks);
    for (let i = 0; i < parsed.length; i += 1) {
      const box = document.getElementById('books');
      const row = document.createElement('tr');
      row.id = i;
      row.innerHTML = `
                      <td>Title ${parsed[i].title}</td>
                      <td>Author ${parsed[i].author}</td>
                      <td><button type='button' onclick='remove(${i}),store()'>Remove</button></td>`;
      box.appendChild(row);
    }
  }
};

// POPULATE BOOKS FROM LOCAL STORAGE AFTER RELOAD
window.onload = setTimeout(() => {
  populate();
}, 1);
