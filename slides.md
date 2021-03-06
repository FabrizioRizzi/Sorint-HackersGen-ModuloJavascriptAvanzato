---
theme: default
fonts:
  sans: Montserrat
  serif: Roboto Slab
  mono: Fira Code
highlighter: shiki
lineNumbers: false
drawings:
  persist: true
---

<!---------------------------- SLIDE 1 ----------------------------->
<img class="w-200px m-auto" src="/images/JS.png" />

<div class="m-16 font-black text-center text-6xl">Corso avanzato</div>

<p class="flex items-center justify-center">
  <span class="m-2">Fabrizio Rizzi e</span>
  <img class="w-120px" src="/images/SORINT2.png" />
</p>
---

<!---------------------------- SLIDE 2 ----------------------------->

# About me

<div class="text-center text-3xl">Ciao, mi chiamo Fabrizio e sono uno sviluppatore web, specializzato in tecnologie front-end.</div>
<br />
<div class="text-center text-3xl leading-relaxed mb-12">Sorintian dal 2017.</div>

<div class="relative w-100px h-110px m-auto">
  <div id="head" class="head"></div>
  <div class="ear-left">
    <div class="inner-ear"></div>
  </div>
  <div class="ear-right">
    <div class="inner-ear"></div>
  </div>
  <div class="eye-left">
    <div id="pupil-left" class="pupil"></div>
  </div>
  <div class="eye-right">
    <div id="pupil-right" class="pupil"></div>
  </div>
  <div class="nose"></div>
  <div class="hair"></div>
  <div class="hair-hover"></div>
  <div class="beard"></div>
  <div class="mouth"></div>
</div>

<!--
Mi occuppo di IT da pù di 10 anni, 2009 laurea in economia che strizza l'occhio all'informatica. Usato tecnologie web sia per front-end che back-end. Lavoro principalmente con Angular.
-->

---

<!---------------------------- SLIDE 3 ----------------------------->

# Programma del corso

- Oggetti e Prototype
- Array e metodi per l’iterazione
- Principali novità introdotte con ES6
- Javascript asincrono: Callback, Promise e Async / Await
- AJAX: connettersi a servizi remoti (XMLHttpRequest e Fetch API)
- Moduli: dividiamo il codice in più files
- Node, NPM e introduzione ai framework JS
---

<!---------------------------- SLIDE 4 ----------------------------->

# Veloce ripasso

 <div class="flex justify-around mb-12 text-center">
   <div>
     <h2>Primitive data types</h2>
     <ul>
       <li class="list-none">Boolean</li>
       <li class="list-none">Null</li>
       <li class="list-none">Undefined</li>
       <li class="list-none">Number</li>
       <li class="list-none">BigInt</li>
       <li class="list-none">String</li>
       <li class="list-none">Symbol</li>
     </ul>
   </div>
   <div>
     <h2>Reference data types</h2>
     <ul >
       <li class="list-none">Objects</li>
       <li class="list-none">Arrays</li>
       <li class="list-none">Functions</li>
       <li class="list-none">Dates</li>
     </ul>
   </div>
 </div>
 <div>
  <p class="text-center">MDN JavaScript data types and data structures</p>
  <p class="text-center">
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures">
      https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures
    </a>
  </p>
 </div>
---

<!------------------------------- SLIDE 5 ------------------------------>

# typeof

L'operatore typeof ritorna una stringa che indica il tipo dell'operando.

```js
console.log(typeof 42);
// expected output: "number"

console.log(typeof 'blubber');
// expected output: "string"

console.log(typeof true);
// expected output: "boolean"

console.log(typeof undeclaredVariable);
// expected output: "undefined"
```

<br />

[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)

<!--
Stackblitz typeof

PS altri operatori javascript
aritmetici + * / - ++ --
logici && ||
confronto == ===
assegnazione =
-->

---

<!------------------------------- SLIDE 6 ------------------------------>

# Values VS. References

  Ogni volta che assegnamo un valore ad una variabile, viene creata una copia di quel valore.
  Quando creiamo un oggetto, al contrario, stiamo creando una referenza a quell'oggetto. Se a due variabili viene assegnata la stessa referenza, i cambiamenti all'oggetto si rifletteranno su entrambe le variabili.
  
  <div style="display: flex; justify-content: space-around; margin-bottom: 20px">
    <img class="w-400px" src="/images/Values.png" />
    <img class="w-400px" src="/images/References.png" />
  </div>

<!--
If a primitive type is assigned to a variable, we can think of that variable as containing the primitive value.
When we assign these variables to other variables using =, we copy the value to the new variable. They are copied by value.

Variables that are assigned a non-primitive value are given a reference to that value. That reference points to the object’s location in memory. The variables don’t actually contain the value.

However, if you use the assignment operator for a reference value, it will not copy the value. Instead, both variables will reference the same object in the memory.
Stackblitz 2 values vs. references
-->

---

<!------------------------------- SLIDE 7 ------------------------------>

# Oggetti

## Creare un oggetto

### Object literal

```js
const person = {
  name: ['Bob', 'Smith'],
  introduceSelf: function() {
    console.log(`Hi! I'm ${this.name[0]}.`);
  }
}
```

### Constructor function

```js
function Person(name) {
  this.name = name;
  this.introduceSelf = function() {
    console.log(`Hi! I'm ${this.name}.`);
  }
}
const frankie = new Person('Frankie');
```

<!--
An object is a collection of related data and/or functionality.

It is considered good practice to name constructor functions with an upper-case first letter.

The this keyword refers to the current object the code is being written inside — so in this case this is equivalent to person. So why not just write person instead?

Well, when you only have to create a single object literal, it's not so useful. But if you create more than one, this enables you to use the same method definition for every object you create.

Note: The new keyword in front of any function turns function call into a constructor call.
-->

---

<!------------------------------- SLIDE 8 ------------------------------>

# Oggetti

## Accedere alle proprietà

### Dot Notation
```js
person.name
person.introduceSelf()

person.address?.city // Optional chaining
```


### Bracket Notation

```js
person['name']
person['introduceSelf']()

const nome = 'name';
person[nome];
```

https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining


---

<!------------------------------- SLIDE 9 ------------------------------>

# Prototype
<p></p>

Il prototype è un oggetto associato di default in Javascript a tutte le funzioni e oggetti ed è il meccanismo tramite il quale gli oggetti Javascript ereditano le loro funzionalità.

È possibile aggiungere metodi e proprietà all'oggetto prototype. Questo permette agli altri oggetti creati dallo stesso costruttore di ereditare i metodi e le proprietà aggiunte.

<p></p>

https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes

<!--
This is an object with one data property, city, and one method, greet(). If you type the object's name followed by a period into the console, like myObject., then the console will pop up a list of all the properties available to this object. You'll see that as well as city and greet, there are lots of other properties!

Stackblitz 3 Objects aggiungere a mano esempio indirizzo con ? e prove di bracket notation e prove di aggiungere proprietà
-->

---

<!------------------------------- SLIDE 10 ------------------------------>

# Oggetti e Es6

## Destructuring

Il destructuring è un'espressione JavaScript che consente di separare le proprietà di un oggetto (o i valori di un array) in variabili distinte.

```js
const user = {
    id: 42,
    isVerified: true
};

const {id, isVerified} = user;

console.log(id); // 42
console.log(isVerified); // true
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

<!--
Stackblitz 4
-->

---

<!------------------------------- SLIDE 11 ------------------------------>

# Copiare un'oggetto

```js
const originalObject = { original: 'original'}
```

## Shallow copy

-  Spread operator or Object.assign()
```js
const copiedObject = {...originalObject};
const copiedObject = Object.assing({}, originalObject);
```

## Deep copy

- JSON.parse(JSON.stringify())

```js
const copiedObject = JSON.parse(JSON.stringify(originalObject));
```

- structuredClone (recentemente implementato, https://developer.mozilla.org/en-US/docs/Web/API/structuredClone)
- librerie (es. cloneDeep di Lodash https://lodash.com/)


<!--
The Object.assign() method copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object.

https://developer.mozilla.org/en-US/docs/Web/API/structuredClone

Fare esempio che clonando oggetto il valore non cambia
-->

---

<!------------------------------- SLIDE 12 ------------------------------>

# JSON (JavaScript Object Notation)

JSON è un formato di serializzazione di oggetti, array, numeri, stringhe, booleani e null. Utilizzato per lo scambio di dati, principalmente tra server e applicazione web, utilizza l'estensione .json

```js
{
	"name": "Mario",
	"surname": "Rossi",
	"active": true,
	"favoriteNumber": 42,
	"birthday": {
		"day": 1,
		"month": 1,
		"year": 2000
	},
	"languages": [ "it", "en" ]
}
```

<!--
API è l'abbreviazione di interfaccia di programmazione delle applicazioni (application programming interface), ovvero un insieme di definizioni e protocolli per la creazione e l'integrazione di software applicativi.

https://jsonplaceholder.typicode.com/posts/

https://jsonplaceholder.typicode.com/posts/1
-->

---

<!------------------------------- SLIDE 13 ------------------------------>

# Funzioni e Es6 

## Default parameters

I  default parameters consentono di inizializzare i parametri della funzione con dei valori di default se non viene passato nessun valore oppure undefined.

```js
function multiply(a, b = 1) {
  return a * b;
}
```

## Rest parameters

Questa sintassi consente alla funzione di accettare un numero indefinito di argomenti sotto forma di array.

```js
function logItems(...theArgs) {
  console.log(theArgs);
}
logItems(1, 2, 3); // expected output: [1, 2, 3]
```

<!--
Funzioni ok,vediamo come funzionano queste cose nuove di Es6
-->

---

<!------------------------------- SLIDE 14 ------------------------------>

# Arrow function
Una arrow function è un'alternativa compatta alle tradizionali funzioni. Si tratta di una funzione anonima che non ha un binding del this, e non dovrebbe essere utilizzata come metodo, oltre a non poter essere utilizzata come costruttore.

```js
param => expression

(param1, paramN) => expression

(param1, paramN) => {
   let a = 1;
   return a + param1 + paramN;
}

const somma = (x, y) => x + y;
```
- Se è presente un solo parametro non necessitano delle parentesi tonde
- Se di una sola riga non necessitano di parentesi graffe e prevedono il return implicito

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

<!--
Parallelira function e arrow (no bindingdel this)
-->

---

<!------------------------------- SLIDE 15 ------------------------------>

# Array 

## Creare un array

```js
const array = new Array();  // By using the new keyword

const arrayLiteral = [value1, value2,....valueN];  // By using Array literals
```

<br/>
<br/>

## Accedere agli elementi

```js
array[indice];
```

NB. L'indice del primo elemento è 0!


<br/>

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

<!--
Esempietti nello stackblitz
-->

---

<!------------------------------- SLIDE 16 ------------------------------>

# Array e Es6

## Destructuring

Il destructuring è un'espressione JavaScript che consente di separare i valori di un array (o le proprietà di un oggetto) in variabili distinte.

```js
const foo = ['one', 'two', 'three'];
const [red, yellow, green] = foo;
console.log(red); // "one"
console.log(yellow); // "two"
console.log(green); // "three"
```

## Spread operator

La spread syntax consente di "espandere" gli elementi di un array.
Nella pratica è utilizzata per aggiungere elementi ad un array o oggetto, combinare array o oggetti e copiare array o oggetti (shallow copy). 

```js
...array
```

---


<!------------------------------- SLIDE 17 ------------------------------>

# Array.prototype.forEach()

Il metodo forEach esegue la funzione passata come parametro per ciascun elemento dell'array.

```js
const array1 = ['a', 'b', 'c'];


for (i = 0; i < array1.length; i++) {
  console.log(array1[i]);
}


array1.forEach((element) => console.log(element));
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

---

<!------------------------------- SLIDE 18 ------------------------------>

# Array.prototype.map()

Il metodo map crea un nuovo array popolato con i valori ritornati dalla funzione passata come parametro. Questa funzione viene chiamata per ogni elemento dell'array originale.

```js
const map = [1, 2, 3, 4, 5].map((number) => number * 2);

console.log(map);
// [2, 4, 6, 8, 10]
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

---

<!------------------------------- SLIDE 19 ------------------------------>

# Array.prototype.filter()
Il metodo filter crea un nuovo array contenente tutti gli elementi che passano il test implementato nella funziona passata come parametro.

```js
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

<!--
https://jscodebox.com/challenge/4

https://jsonplaceholder.typicode.com/posts/
-->

---

<!------------------------------- SLIDE 20 ------------------------------>

# Array.prototype.reduce()
Il metodo reduce esegue la funzione passata come argomento per ciascun elemento dell'array. Questa funzione, ad ogni iterazione avrà due parametri, il primo sarà il valore ritornato dal calcolo precedente mentre il secondo l'attuale elemento dell'array. Il risultato finale è un singolo valore.

```js
const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);

console.log(sumWithInitial);
// expected output: 10
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

<!-- 
https://www.codewars.com/kata/5715eaedb436cf5606000381/solutions/javascript
 -->

---

<!------------------------------- SLIDE 21 ------------------------------>

# Classes

Le classi, introdotte con ES6, formalizzano il pattern di ereditarietà basato sulle classi che veniva simulato tramite funzioni e prototypes.

```js
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

const rect = new Rectangle(20, 30);
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes

---

<!------------------------------- SLIDE 22 ------------------------------>

# Maps

L'oggetto Map contiene delle coppie di chiave-valore. Qualsiasi valore (sia oggetti che primitivi) possono essere utilizzati sia come chiavi che valori.

```js
const map1 = new Map();

map1.set('a', 1);
map1.set('b', 2);
map1.set('c', 3);

console.log(map1.get('a')); // expected output: 1

map1.set('a', 97);

console.log(map1.get('a')); // expected output: 97

console.log(map1.size); // expected output: 3
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

---


<!------------------------------- SLIDE 23 ------------------------------>

# Sets

Gli oggetti Set sono collezioni di valori. Ogni valore può essere presente una sola volta, ciò rende il Set una collezioni di valori univoci.

```js
const mySet1 = new Set()

mySet1.add(1)           // Set [ 1 ]
mySet1.add(5)           // Set [ 1, 5 ]
mySet1.add(5)           // Set [ 1, 5 ]
mySet1.add('some text') // Set [ 1, 5, 'some text' ]

mySet1.has(1)              // true
mySet1.has(3)              // false, since 3 has not been added to the set

mySet1.size         // 5
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set

<!-- Esempio rendere unique values dell'array -->

---


<!------------------------------- SLIDE 24 ------------------------------>

# Bonus track: Ternary operator

L'operatore ternario è l'unico operatore Javascript che accetta tre operandi: una condizione seguita dal punto esclamativo (?), un'espressione da eseguire se la condizione è truthy seguita da due punti (:), e infine l'espressione da eseguire se la condizione è falsy. Questo operatore è frequentemente utilizzato come alternativa a if.

```js
const risultato = condizione ? espressioneTrue : espressioneFalse;
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator?retiredLocale=it

---

<!------------------------------- SLIDE 25 ------------------------------>

# Synchronous vs Asynchronous

La programmazione sincrona esegue un task alla volta e solamente quando il task precedente è completato viene eseguito il task successivo.

## Execution Context

L' Execution Context è un concetto astratto dell' ambiente in cui il codice JavaScript code viene interpretato ed eseguito. Ogni volta che del codice JavaScript viene eseguito, ciò avviene all'interno dell'execution context.
Il codice di una funzione viene eseguito all'interno del function execution context, mentre il codice globale dentro il global execution context. Ciascuna funzione ha il suo execution context.

## Call stack
Il call stack è uno stack con una struttura LIFO (Last in, First out), utilizzato per memorizzare tutti gli execution context creati durante l'esecuzione del codice.

---

<!------------------------------- SLIDE 25 ------------------------------>

# Synchronous vs Asynchronous

La programmazione asincrona è una tecnica che consente al programma di iniziare un potenziale task di lunga durata e, invece che attendere l'esecuzione del task, continuare ad eserguire altri task mentre il precedente è in esecuzione.

<br />
<br />

https://www.freecodecamp.org/news/synchronous-vs-asynchronous-in-javascript/

<br />

https://blog.bitsrc.io/understanding-asynchronous-javascript-the-event-loop-74cd408419ff

## setTimeout()
setTimeout() è una funzione asincrona che esegue un blocco di codice o una callback con un ritardo impostato in millisecondi.

<!-- Stackblitz Call stack -->

---

<!------------------------------- SLIDE 26 ------------------------------>

# Event handlers e callbacks

Gli Event handlers sono a tutti gli effetti una forma di programmazione asincrona.
Non è possibile sapere in anticpio quando l'utente cliccherà un certo elemento, quindi definiamo un event handler per l'evento click. Questo event handler accetta una funzione che verrà chiamata al manifestarsi dell'evento.

## Callbacks
Una callback non è altro che una funzione che viene passata ad un'altra funzione, che la eseguirà al momento opportuno. Le callbacks sono state il principale modo in cui la programmazione asincrona è stata implementata in JavaScript.

<br />

https://nodejs.dev/learn/javascript-asynchronous-programming-and-callbacks

https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Introducing

<!-- Javascript nasce all'interno del browser ed il suo scopo principale, inizialmente, era quello di rispondere alle azioni dell'utente come il click del mouse, l'input in un campo di testo, ecc... Come è possibile eseguire queste azioni con un modello di programmazione sincrona?

The answer was in its environment. The browser provides a way to do it by providing a set of APIs that can handle this kind of functionality.

higher-order functions

-->

---

<!------------------------------- SLIDE 27 ------------------------------>

# Promises

Le Promises sono la base della programmazione asincrona del moderno JavaScript.

Una promise è un oggetto ritornato da una funzione asincrona che rappresenta lo stato attuale dell'operazione. Nel momento in cui la promise viene tornata, l'operazione non è ancora stata ultimata ma fornisce dei metodi che consentono di gestire l'eventuale successo o fallimento dell'operazione.

Una promise può essere in uno dei tre seguenti stati: pending, resolved, o rejected.
```js
const promise = new Promise((resolve, reject) => {
  const res = true; // An asynchronous operation.
  if (res) {
    resolve('Resolved!');
  }
  else {
    reject(Error('Error'));
  }
});
```
https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises

---

<!------------------------------- SLIDE 28 ------------------------------>

# Promises

## .then() 

Il metodo .then() viene utilizzato per ricevere l'eventuale risultato (o errore) dell'operazione asincrona. then() accetta due funzioni come argomenti. La prima viene chiamata nel caso in cui la promise viene risolta, la seconda se la promise viene rigettata.

```js
promise.then((res) => {
  console.log(value);
});
```

## .catch()

Se viene aggiunto catch() alla catena della promise, verrà chiamato nel caso in cui l'operazione asincrona fallisce. Risulta utile nel caso in cui si intenda concatenare più operazioni asincrone.

```js
promise.catch((err) => {
  alert(err);
});
```

---

<!------------------------------- SLIDE 29 ----------------------------->

# Promises

## .finally()

Se viene aggiunto il metodo finally() alla catena della promise, verrà chiamato in seguito al completamento della promise sia nel caso in cui venga risolta che nel caso in cui fallisca.

## .all

Alle volte è necessario combinare delle promise, invece che eseguirle una dopo l'altra. Per questo esistono degli helpers. Ad esempio, a volte, è necessario che più promise vengano risolte ma non dipendono una dall'altra. In un caso del genere è possibile lanciarle tutte contemporaneamente ed essere poi notificati quando tutte le promises vengono risolte. Promise.all() consente proprio questo, accetta un array di promises, e ritorna una singola promise con un array di valori nel metodo then.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

---

<!------------------------------- SLIDE 30 ------------------------------>

# Async / Await

La sintassi async...await offre un nuovo modo più leggibile e scalabile di gestire le promises.

Una funzione asincrona può essere creata con la keyword async prima del nome della funzione o delle parentesi () nel caso di arrow function.
L'operando await è una promise. Quando il codice incontra la keyword await, l'esecuzione della funzione async è messa in pausa ed attende la risoluzione della promise. Await può essere utilizzato solamente in una funzione con async.
```js
function resolveAfter2Seconds() {
  return new Promise(resolve => setTimeout(() => resolve('resolved'), 2000));
}

async function asyncCall() {
  console.log('calling');
  const result = await resolveAfter2Seconds();
  console.log(result); // expected output: "resolved"
}

asyncCall();
```

Le funzioni async utilizzano try...catch per gestire gli errori.

---

<!------------------------------- SLIDE 31 ------------------------------>

# AJAX


Asynchronous JavaScript and XML, è un acronimo coniato nel 2005 da Jesse James Garrett, che descrive un "nuovo" approccio all'utilizzo di tecnologie esistenti insieme che includono HTML or XHTML, CSS, JavaScript, DOM, XML, XSLT, ed il più importante, l'oggetto XMLHttpRequest object. Tramite queste tecnologie le web applications sono in grado di eseguire rapidi ed incrementali aggiornamenti dell'interfaccia utente, senza ricaricare l'intera pagina.

XMLHttpRequest può inviare e ricevere informazioni in diversi formati (tra cui JSON, XML, HTML, and text files).

Le due principali funzionalità di AJAX sono:
- Effettuare richieste ad un server senza ricaricare la pagina
- Ricevere e gestire dati da un server

<br />

https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX

---

<!------------------------------- SLIDE 32 ------------------------------>

# XMLHttpRequest

Per inviare una richiesta HTTP ad un server utilizzando JavaScript, è necessario creare un oggetto XMLHttpRequest, "aprire" un url ed inviare la richiesta. XMLHttpRequest mette a disposizione una serie di eventi per "seguire" il processo della richiesta.

```js
const xhr = new XMLHttpRequest();

xhr.onload = function(){
    // Process the server response here.
};

xhr.open("GET", "mysite.com/api/getjson");
xhr.send();
```

https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest

---

<!------------------------------- SLIDE 33 ------------------------------>

# Fetch API

L'API Fetch è utilizzata per effettuare richieste HTTP requests utilizzando le Promises. La funzione principale fetch() accetta un parametro URL e ritorna una promise che può essere risolta con i risultati della nostra chiamata o rigettata (ad esempio in caso di errori di rete).

```js
fetch('http://example.com/movies.json')
  .then(response => response.json())
  .then(data => console.log(data));
```

La funziona fetch() accetta un secondo argomento opzionale, un oggetto contenente delle opzioni per customizzare la request. Può essere utilizzato per modificare la request type, gli headers, specificare un request body, e molto altro.

<br />

https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API

https://jsonplaceholder.typicode.com/

https://github.com/public-apis/public-apis

<!--
Axios
https://axios-http.com/docs/intro
PUBLIC API 
-->

---

<!------------------------------- SLIDE 34 ------------------------------>

# Moduli

Con l'evolversi di Javascript, le applicazioni sono diventate sempre più complesse richiedendo sempre più codice, per questo si è reso necessario pensare a dei modi per dividere il codice in più moduli che possono essere importati all'occorrenza. Node.js consente di utilizzare i moduli e tante altre librerie hanno permesso nel corso degli anni agli sviluppatori di sfruttare questa caratteristica (ad esempio CommonJS e le librerie basate su AMD come RequireJS, e più recentemente Webpack and Babel).

I browser moderni hanno iniziato a supportare questa funzionalità in maniera nativa.

```js
// index.html
<script type="module" src="main.js"></script>

// main.js
import { name } from './modules/name.js';

// modules/name.js
export const name = 'square';
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

<!--
- Task runners (Gulp, Grunt)
- Webpack e vite
-->

---

<!------------------------------- SLIDE 35 ------------------------------>

# Node.js

Node.js è un runtime Javascript open-source costruito sul motore V8 di Chrome. Consente di eseguire codice Javascirpt fuori dal browser.

Può essere utilizzato per scrivere applicazioni server-side con accesso al sistema operativo ed al file system.

Quando le nuove funzionalià di Javascript vengono supportate da V8, possono essere utilizzate anche con Node.

<img class="w-200px m-auto" src="/images/Node.png" />

https://nodejs.org/

<!--
fare una prova con node
-->

---

<!------------------------------- SLIDE 36 ------------------------------>

# NPM

NPM – o "Node Package Manager" – è il package manager di default di Node.js.

NPM consiste principalmente in:

- una CLI (command-line interface) utilizzata per pubblicare e scaricare librerie;
- un repository online di librerie Javascript

<img class="w-200px m-auto" src="/images/Npm.png" />

Per inizializzare un progetto tramite npm utilizzare il comando `npm init` che creerà un file `package.json`, contente una descrizione del progetto.

Per maggiori informazioni: https://docs.npmjs.com/cli/v8/configuring-npm/package-json

Il comando principale per installare una libreria tramite npm è: `npm install <nome libreria>`

https://www.npmjs.com/

<!--
fare una prova con node e npm e express
-->

---

<!------------------------------- SLIDE 37 ------------------------------>

# Frameworks JavaScript

I frameworks JavaScript sono una parte essenziale del moderno sviluppo web che forniscono agli sviluppatori strumenti per creare applicazioni web interattive e scalabili.

I principali framework front-end:

- React
- Angular
- Vue
- Svelte

Back-end:
- Express

https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks

https://roadmap.sh/frontend

<!--
https://stateofjs.com/
-->

---

<!------------------------------- SLIDE 38 ------------------------------>

# Vue

*Vue (pronounced /vjuː/, like view) is a JavaScript framework for building user interfaces. It builds on top of standard HTML, CSS and JavaScript, and provides a declarative and component-based programming model that helps you efficiently develop user interfaces, be it simple or complex.*

Versione attuale: 3. Per iniziare un progetto con Vue:

```js
npm init vue@latest
```

e seguire le istruzioni della CLI.

<img class="w-140px m-auto" src="/images/vue.png" />

https://vuejs.org/

<!--Fare una build-->

---

<!------------------------------- SLIDE 39 ------------------------------>

# React

*Una libreria JavaScript per creare interfacce utente*

Versione attuale: 17.0.2. Per iniziare un progetto con React utilizzare la CLI ufficiale create-react-app (https://create-react-app.dev/):

```js
npm init react-app my-app
```

e seguire le istruzioni della CLI.

<img class="w-160px m-auto" src="/images/react.png" />

https://it.reactjs.org/

---

<!------------------------------- SLIDE 40 ------------------------------>

# Angular

*The modern web developer's platform*

Versione attuale: 13.3.0. Per iniziare un progetto con React utilizzare la CLI ufficiale @angular/cli (https://angular.io/cli):

```js
npm install -g @angular/cli
ng new my-first-project
```

e seguire le istruzioni della CLI. La CLI di Angular consente anche di generare componenti, moduli, servizi, direttive, ecc..

<img class="w-140px m-auto" src="/images/angular.png" />

https://angular.io/

<!--
Stackblitz consente di provare tutti i framework
-->

---

<!------------------------------- SLIDE 41 ------------------------------>

# Deployare la vostra applicazione

- Netlify (https://www.netlify.com/)
- GitHub Pages (https://pages.github.com/)
- Firebase Hosting (https://firebase.google.com/)
- Heroku (https://www.heroku.com/)
- ...
