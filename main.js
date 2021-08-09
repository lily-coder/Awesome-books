let books = [];
const  input = document.querySelectorAll('.input');

const button = document.querySelector('.btn');

for(let i = 0; i < input.length; i++){
    button.addEventListener('click', function(){
        books.push({title: input[i].value, author: input[i].value })
    })
}