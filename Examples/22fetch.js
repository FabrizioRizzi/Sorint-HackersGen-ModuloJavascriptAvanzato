const fetchNewImage = () => {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then((res) => {
      console.log(res)
      return res.json()
    })
    .then((res) => {
      console.log(res);
      document.querySelector('.immagine').src = res.message;
    });
};

document.querySelector('.fetch').addEventListener('click', fetchNewImage);

// Creare un caricamento

// Chiamata POST

// async await
/* 
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1984,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json)); */
