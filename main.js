let books = [];
const title = document.querySelector(".title");
const author = document.querySelector(".author");
const button = document.querySelector(".btn");

//ADD BOOKS TO TABLE LIST
function addBookList() {
  const list = document.querySelector(".book-list");

  const row = document.createElement("tr");

  row.innerHTML = `
                    <td>title: ${title.value}</td>
                    <td>Author: ${author.value}</td>
                    <td><button type="submit" class="remove">Remove</button></td>`;

  list.appendChild(row);
}

//REMOVE BOOK FUNCTION
function deleteBook(el) {
  if (el.classList.contains("remove")) {
    el.parentElement.parentElement.remove();
  }
}

//ADD INPUT VALUE
button.addEventListener("click", function () {
  books.push({ title: title.value, author: author.value });

  addBookList();

  //CLEAR FIELDS AFTER ADD
  title.value = "";
  author.value = "";
});

//REMOVE BOOK
const removeBtn = document.querySelector(".book-list");

removeBtn.addEventListener("click", (e) => {
  deleteBook(e.target);
});
