/* const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/');

xhr.onload = () => {
  console.log(JSON.parse(xhr.response));
}; 

xhr.send(); */

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://www.googleapis.com/books/v1/volumes?q=douglasadams');

xhr.onload = () => {
  document.querySelector('.paragraph').innerHTML = JSON.parse(
    xhr.response
  ).totalItems;
  const books = JSON.parse(xhr.response).items.map(
    (item) => item.volumeInfo.title
  );
  console.log(books);
  books.forEach((book) => {
    let p = document.createElement('p');
    p.innerText = book;
    document.body.appendChild(p);
  });
};

xhr.send();
