let books = [];
const title = document.querySelector('.title');
const author = document.querySelector('.author');
const button = document.querySelector('.btn');

button.addEventListener('click', function(){
    books.push({title: title.value, author: author.value })
})
