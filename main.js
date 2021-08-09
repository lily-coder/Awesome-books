let books = [];
const title = document.querySelector('.title');
const author = document.querySelector('.author');
const button = document.querySelector('.btn');

button.addEventListener('click', function(){
    books.push({title: title.value, author: author.value })

    addBookList();
})

function addBookList() {
    const list = document.querySelector('.book-list');

    const row = document.createElement('tr');

    row.innerHTML = `
                    <td>title: ${title.value}</td>
                    <td>Author: ${author.value}</td>
                    <td><button type="submit">Remove</button></td>`;
    
    list.appendChild(row);

    title.value = "";
    author.value = "";

}


