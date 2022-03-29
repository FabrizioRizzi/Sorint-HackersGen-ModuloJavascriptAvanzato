const colors = ['Violet', 'Indigo', 'Blue', 'Green', 'Yellow', 'Orange', 'Red'];

// destructuring assignment
var [a, b, ...args] = colors;
console.log(a);
console.log(b);
console.log(args);

// Swapping values
let x = 100;
let y = 200;
[x, y] = [y, x];
console.log(x); // 200
console.log(y); // 100 */

// Spread
let numberStore = [0, 1, 2];
let newNumber = 3;
numberStore = [...numberStore, newNumber];

console.log(...numberStore);

// unire due array
const array1 = [1, 2];
const array2 = [3, 4];

const array3 = [...array1, ...array2];

console.log(array3);

// shallow copy
const newArray = [...numberStore];

console.log(newArray, numberStore);

newArray[3] = 'zero';

console.log(newArray, numberStore);
