// Esempio 1
const coord = { x: 100, y: 200 };
const { x, y } = coord;

// Same as:
// const x = coord.x
// const y = coord.y

console.log(x);
console.log(y);

// Esempio 2, nuovi nomi alle variabili
const coord2 = { x: 100, y: 200 };
const { x: new1, y: new2 } = coord2;

console.log(new1);
console.log(new2);


// Esempio 3, rest operator
const oggetto = { a: 100, b: 200, c: 300, d: 400, e: 500 };

const { a, b, ...args } = oggetto;

console.log(a);
console.log(b);
console.log(args);

const person = {
  name: 'Fabrizio',
  age: 37,
  city: 'Milano',
  introduceSelf: function () {
    console.log('Ciao sono ' + this.name);
  },
};

const { introduceSelf, ...soloDatiAnagrafici } = person;

/* Same as:
const soloDatiAnagrafici = {
  name: person.name,
  age: person.age,
  city: person.city
}
*/

console.log(soloDatiAnagrafici);
