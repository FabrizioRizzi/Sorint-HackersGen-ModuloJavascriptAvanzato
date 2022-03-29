// 'fruits' array created using array literal notation.
const fruits = ['Apple', 'Banana'];
console.log(fruits.length);
// 2

// 'fruits' array created using the Array() constructor.
const fruits2 = new Array('Apple', 'Banana');
console.log(fruits2.length);
// 2

// Accedere all'ultimo elemento
console.log(fruits[fruits.length - 1]);

// push, pop, unshift, shift
fruits.push('Orange');

console.log(fruits);

fruits.pop();

console.log(fruits);

fruits.unshift('Orange');

console.log(fruits);

fruits.shift();

console.log(fruits);

// includes

console.log(fruits.includes('Apple'));
