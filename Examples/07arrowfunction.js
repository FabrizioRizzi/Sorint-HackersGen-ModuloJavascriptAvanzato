const prova = (a) => a * 2;

// Same as:
/* function prova(a) {
  return a * 2;
} */

console.log(prova(3));

// Changing the function here with an arrow function will not work because arrow function doesn't bind this!
const person = {
  name: 'Fabrizio',
  introduceSelf: function () {
    console.log('ciao, mi chiamo: ' + this.name);
  },
};

person.introduceSelf();
