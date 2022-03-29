const person = {
  name: 'Fabrizio Rizzi',
  address: {
    city: 'Milano',
  },
  birthday: new Date(),
};

const personCopy = { ...person };

const personCopy2 = Object.assign({}, person); // Array.from

const personCopy3 = JSON.parse(JSON.stringify(person));

const personCopy4 = structuredClone(person);

console.log(person === personCopy);

personCopy.address.city = 'Pavia';

// Test shallow copy (1 e 2) and deep copy (3 e 4)
console.log(personCopy);
console.log(person);

// Possible solution proposed copying with destructuring
const { ...objcopiato } = person;

objcopiato.name = 'prova';

console.log(objcopiato);
console.log(person);
