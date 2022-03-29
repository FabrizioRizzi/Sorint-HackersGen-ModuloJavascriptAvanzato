function helloWorld() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Hello World!');
    }, 2000);
  });
}

const msg = async () => {
  //Async Function Expression
  console.log('calling');
  const msg = await helloWorld();
  console.log('Message:', msg);
};

msg(); // Message: Hello World! <-- after 2 seconds
