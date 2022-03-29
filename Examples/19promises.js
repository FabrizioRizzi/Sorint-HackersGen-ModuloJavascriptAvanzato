const promise = new Promise((resolve, reject) => {
  const res = false;
  setTimeout(() => {
    // An asynchronous operation.
    if (res) {
      resolve('Resolved!');
    } else {
      reject(Error('Error'));
    }
  }, 1000);
});

promise
  .then((res) => console.log(res))
  .catch((err) => console.log(err.message))
  .finally(() => console.log('finito'));

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(3);
  }, 3000);
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(2);
  }, 5000);
});

Promise.all([promise1, promise2]).then((res) => {
  console.log(res[0]);
  console.log(res[1]);
});
