function prima() {
  debugger;
  console.log('prima');
}

function seconda() {
  debugger;
  prima();
  console.log('seconda');
}

function terza() {
  debugger;
  seconda();
  console.log('terza');
}

terza();
