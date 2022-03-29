const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce((a, b) => {
  console.log(a, b);
  return a + b;
}, initialValue);
console.log(sumWithInitial);
// expected output: 10

// esempio rest parameters

function sum(...theArgs) {
  return theArgs.reduce((previous, current) => {
    return previous + current;
  });
}

console.log(sum(1, 2, 3, 2, 21, 42, 12, 4, 42, 1, 214));
// expected output: 344

console.log(sum(1, 2, 3, 4));
// expected output: 10
