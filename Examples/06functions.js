// Default parameters

function convertiEuroDollari(quantità, valoreAttuale = 1.2) {
  return valoreAttuale * quantità;
}

console.log(convertiEuroDollari(2));

// Rest parameters

function prova(...argomenti) {
  console.log(argomenti);
}

prova(1, 2, 'safasf')