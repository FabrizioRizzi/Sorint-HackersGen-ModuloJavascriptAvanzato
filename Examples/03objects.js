// Object literal with computed name property

const nomeProprietà = 'age'

const person = {
  name: ['Bob', 'Smith'],
  [nomeProprietà]: 32,
  introduceSelf: function () {
    console.log(`Hi! I'm ${this.name[0]}. ${this.address?.city}`);
  },
};

// Dot notation to access properties, with optional chaining
console.log(person.age)
console.log(person.address?.city);

person.introduceSelf();

// Bracket notation

const proprietà = 'name';
console.log(person[proprietà])


// Constructor function and prototype

function Person(name) {
  this.name = name;
  this.introduceSelf = function () {
    console.log(`Hi! I'm ${this.name}.`);
  };
}

const io = new Person('Fabrizio');
const lui = new Person('Luca');

io.introduceSelf();
lui.introduceSelf();

console.log(lui['name']);
console.log(io.name);

// Add method to prototype

Person.prototype.addLastName = function (lastName) {
  this.lastName = lastName;
};

io.addLastName('Rizzi');
lui.addLastName('Caputo');

console.log(io);
console.log(lui.lastName);
