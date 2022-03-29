const map1 = new Map();

map1.set('a', 1);
map1.set('b', 2);
map1.set('c', 3);

console.log(map1.get('a')); // expected output: 1

map1.set('a', 97);

console.log(map1.get('a')); // expected output: 97

console.log(map1.size); // expected output: 3

const mySet1 = new Set();

mySet1.add(1); // Set [ 1 ]
mySet1.add(5); // Set [ 1, 5 ]
mySet1.add(5); // Set [ 1, 5 ]
mySet1.add('some text'); // Set [ 1, 5, 'some text' ]

mySet1.has(1); // true
mySet1.has(3); // false, since 3 has not been added to the set

mySet1.size; // 5

mySet1.add(4);
mySet1.add(5);
mySet1.add(5);
mySet1.add(5);
mySet1.add(5);

console.log(mySet1.forEach((a) => console.log(a)));

// Use to remove duplicate elements from the array

const numbers = [2, 3, 4, 4, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 5, 32, 3, 4, 5];

const set = new Set(numbers);

const nuovoArray = [...set];

console.log(nuovoArray);

// [2, 3, 4, 5, 6, 7, 32]
