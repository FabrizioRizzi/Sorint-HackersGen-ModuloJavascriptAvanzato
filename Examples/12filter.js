// Tornare true se l'array ha un numero maggiore di lettere 'a' rispetto a 'b'
const letters = ['a', 'b', 'a', 'b'];

const a = letters.filter(letter => letter === 'a');
const b = letters.filter(letter => letter === 'b');

console.log(a.length > b.length);

letters.unshift('c');

console.log(letters)

// Tornare un nuovo array con solo gli id abilitati
const array = [
  { id: '1', enabled: true },
  { id: '2', enabled: false },
  { id: '3', enabled: true },
];

console.log(array.filter(element => element.enabled).map((element, i) => ({id: element.id, indice: i})));

// Tornare un array che abbia solamente l'id come elemento dell'array

// Prova reale: filtrare i risultati dell'utente 3

fetch('https://jsonplaceholder.typicode.com/posts/')
  .then((res) => res.json())
  .then((res) => {
    console.log(res.filter(post => post.userId === 3));
  });
  