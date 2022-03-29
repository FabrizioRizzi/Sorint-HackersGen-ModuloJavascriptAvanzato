const array1 = ['a', 'b', 'c'];

for (let i = 0; i < array1.length; i++) {
  console.log('passaggio ciclo for:' + array1[i]);
}

for (const element of array1) {
  console.log('passaggio for of:' + element);
}

array1.forEach((element) => console.log(element));
