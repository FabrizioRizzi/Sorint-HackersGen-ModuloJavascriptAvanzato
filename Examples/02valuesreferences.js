// Primitives

let a = 2;
let b = a;

console.log('a:', a,'b:', b)

b = 3;

console.log('a:', a,'b:', b)

// Objects

const oggettoA = {
  valore: 2
};

const oggettoB = oggettoA;

console.log('oggettoA:', oggettoA.valore, 'oggettoB:', oggettoB.valore)

oggettoB.valore = 3;

console.log('oggettoA:', oggettoA.valore, 'oggettoB:', oggettoB.valore)

// Another example of reference with dates

const dataA = new Date('02-15-2022');

let dataB = dataA;

console.log('dataA:', dataA, 'dataB:', dataB)

dataB.setFullYear(2023);

console.log('dataA:', dataA, 'dataB:', dataB)
