// Creare un nuovo array con i numeri dell'array moltiplicati per 2
const numbers = [2, 6, 45];

const moltiplicaPerDue = (number) => number * 2;

const numbersMoltiplicati = numbers.map(moltiplicaPerDue);

console.log(numbersMoltiplicati, numbers);

numbersMoltiplicati[0] = 6;

console.log(numbersMoltiplicati, numbers);

// Risultato desiderato [6, 12, 90]

// Creare un array di oggetti che abbiano la proprietà nome uguale a ciascun elemento dell'array
const names = ['Fabrizio', 'Lorenzo', 'Luca'];

// Risultato desiderato [{nome: "Fabrizio"}, {nome: "Lorenzo"}, {nome: "Luca"}]

const namesObj = names.map((nome) => ({ nome }));

console.log(namesObj);

function ciao(name, address) {
  return {
    name,
    address,
  };
}

console.log(ciao('Fabrizio', 'Milano'));
