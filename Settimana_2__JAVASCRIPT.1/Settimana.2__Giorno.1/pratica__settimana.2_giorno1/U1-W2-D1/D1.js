/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let persona= "Mauro";  // 1.tipo di dato --> stringa 
console.log(persona);  // con le virgolette(singole o doppie), assegniamo ad una variabile un insieme o una combinazione di testo che sia numerico o caratteri

let number=10; // 2.tipo di dato --> number
let float=1.6; // con il tipo number dichiariamo una variabile che sia un numero: assegnandoci float otteniamo un numero decimale
let int=12;    // assegniandoci int li diamo un numero intero(anche negativo quindi)
console.log(number);
console.log(float);
console.log(int);

let bool1=true;   // 3.tipo di dato --> boolean
let bool2=false;  // un tipo di dato booleano che in poche parole può avere il valore di true(1) oppure false(0)
console.log(bool1);
console.log(bool2);

let senzaValore=null;   // 4.tipo di dato --> null, che viene messo dal programmatore se intenzionalmente una variabile non ha valore oppure come nei form, il campo che doveva essere compilato, rimane vuoto
let indefinito;          // 5.tipo di dato -->undefined, un dato non definito da nessuno, che il browser lo considera senza un valore           
console.log(senzaValore);
console.log(indefinito);


/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const myName="Vito";
console.log(myName);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let primoNumero=12;
let secondoNumero=20;

console.log(primoNumero+secondoNumero);


/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.*/

/* SCRIVI QUI LA TUA RISPOSTA */

var x=12;
console.log(x);

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

//myName = "Dagnello"; //sopra avendo assegnato const myName ora non posso riassegnargli un valore diverso
console.log(myName);  

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let terzoNumero=4;
console.log(terzoNumero-x);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).

*/


/* SCRIVI QUI LA TUA RISPOSTA */

let name1="john";
let name2="John";
console.log(!(name1===name2));

//EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).

name1=name1.toLowerCase();
name2=name2.toLowerCase();
console.log(name1===name2);