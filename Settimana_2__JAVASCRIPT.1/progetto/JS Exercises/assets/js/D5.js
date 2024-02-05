/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
console.log('\n');
console.log('*********ESERCIZIO 1*****************')
const pets = ['dog', 'cat', 'hamster', 'redfish']
function stampaArray(pets){
  for (let i = 0; i < pets.length; i++) {
    console.log(pets[i]);
  }
}
stampaArray(pets);
console.log(pets);
console.log('\n');
/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
console.log('\n');
console.log('*********ESERCIZIO 2*****************')
pets.sort();
console.log('L\'array pets è così ordinato alfabeticamente: ' + pets);
console.log('\n');

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

console.log('\n');
console.log('*********ESERCIZIO 3*****************')
pets.sort();
pets.reverse();
console.log('L\'array pets è così ordinato alfabeticamente in modo invertito: ' + pets);
console.log('\n');

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

console.log('\n');
console.log('*********ESERCIZIO 4*****************')
pets.reverse();
console.log(pets);
pets.sort();
let primoElemento = pets.shift();
pets.push(primoElemento);
console.log('Adesso l\'array è così composto: ' + pets);
console.log('\n');



/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]

console.log('\n');
console.log('*********ESERCIZIO 5*****************')
let valoreLicensePlate = 'DJFJSAJAND';
for (let i = 0; i < cars.length; i++) {
  cars[i].licensePlate = valoreLicensePlate;
}

console.log(cars);
console.log('\n');

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
console.log('\n');
console.log('*********ESERCIZIO 6*****************')
const newCars =
{
  brand: 'Fiat',
  model: 'Punto',
  color: 'black',
  trims: ['berlin', 'lnl', 'slowly'],
};

cars.push(newCars);

for (let i = 0; i < cars.length; i++) {
  cars[i].trims.pop();
}

console.log(cars);
console.log('\n');

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
console.log('\n');
console.log('*********ESERCIZIO 7*****************')
const justTrims = [];
for (let i = 0; i < cars.length; i++) {
  justTrims.push(cars[i].trims[0]);
}

console.log(justTrims);
console.log('\n');
/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
console.log('\n');
console.log('*********ESERCIZIO 8*****************')

for (let i = 0; i < cars.length; i++) {
  if (cars[i].color.charAt(0) === 'b')
    console.log('Fizz');
  else {
    console.log('Buzz');
  }
}

console.log('\n');

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/

console.log('\n');
console.log('*********ESERCIZIO 9*****************')
console.log('\n');
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]
let i = 0;
while (i <= 32) {
  console.log(numericArray);
  i++;
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
console.log('\n');
console.log('*********ESERCIZIO 10*****************')
console.log('\n');
const charactersArray = ['g', 'n', 'u', 'z', 'd']

let arrayPosizioni=[];
let alfabeto = ['a','b','c','d','e','f','g','h','i','l','m','n','o','p','q','r','s','t','u','v','z'];

for(let i=0; i<charactersArray.length; i++){
  for (let j=0; j<alfabeto.length; j++){
    switch(true){
      case(charactersArray[i]===alfabeto[j]):
      arrayPosizioni.push(j+1);
      break;
    }
  }
}

console.log(arrayPosizioni);
console.log('\n');