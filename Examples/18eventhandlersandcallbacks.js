document
  .querySelector('#app')
  .addEventListener('click', () => console.log('cliccato'));

console.log('sync');

function prima() {
  console.log(1);
}

function seconda(callback) {
  setTimeout(() => {
    console.log(2);
    callback();
  }, 1000);
}

function terza() {
  console.log(3);
}

prima();
seconda(terza);
