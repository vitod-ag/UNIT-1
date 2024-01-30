/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let numero1 = 12;
let numero2 = 25;

if(numero1>numero2){
  document.getElementById('max').innerHTML='Il numero più grande tra i due è ' + numero1;
}else{
  document.getElementById('max').innerHTML='Il numero più grande tra i due è ' + numero2;
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let numero3 = 7;

if(!(numero3===5)){
  console.log('not equal');
  document.getElementById('not_equal').innerHTML= 'Il ' + numero3 + ' non è uguale a 5';
}else{
  console.log('is equal');
  document.getElementById('not_equal').innerHTML= 'Il ' + numero3 + ' è uguale a 5';
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5
   (suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let numero4 = 27;
let divisibile = false;

if((numero4 %5==0)){
  divisibile=true;
  console.log(divisibile);
  document.getElementById('divisibile').innerHTML= 'Il ' + numero4 + ' è divisibile per 5';
}else{  
  console.log(divisibile);
  document.getElementById('divisibile').innerHTML= 'Il ' + numero4 + ' non è divisibile per 5';
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8
   oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let numero5 = 10;
let numero6 = 2;
let otto = false;

if(((numero5===8)||(numero6===8)||((numero5+numero6)===8)||(numero5-numero6)===8)||(numero6-numero5===8)){
  otto = true;
  console.log(otto);
  document.getElementById('otto').innerHTML= 'almeno un caso ha valore 8';
}else{
  console.log(otto);
  document.getElementById('otto').innerHTML= 'nessun caso ha valore 8';
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita 
  (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let totalShoppingCart = 49;
let spedizione_gratuita = false;

if(totalShoppingCart>50){
  spedizione_gratuita=true;
  console.log(totalShoppingCart);
  document.getElementById('e-commerce').innerHTML= 'Il cliente deve pagare ' + totalShoppingCart;
}else{
  spedizione_gratuita=false;
  totalShoppingCart= totalShoppingCart+10;
  console.log(totalShoppingCart);
  document.getElementById('e-commerce').innerHTML= 'Il cliente deve pagare ' + totalShoppingCart;
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni
   sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let totalShoppingCart1 = 56;
let spedizione_gratuita1 = false;

if(totalShoppingCart1>50){
  spedizione_gratuita=true;
  totalShoppingCart1=(totalShoppingCart1-(totalShoppingCart1*20)/100);
  console.log(totalShoppingCart1);
  document.getElementById('Black_Friday').innerHTML= 'Il cliente deve pagare ' + totalShoppingCart1;
}else{
  spedizione_gratuita=false;
  totalShoppingCart1= totalShoppingCart1+10;
  totalShoppingCart1=(totalShoppingCart1-(totalShoppingCart1*20)/100);
  console.log(totalShoppingCart1);
  document.getElementById('Black_Friday').innerHTML= 'Il cliente deve pagare ' + totalShoppingCart1;
}


/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let numbers = [99,21,5];
numbers.sort();
console.log(numbers);
document.getElementById('sort').innerHTML= numbers;

 

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let valore_fornito='amen';
let check=false;
if(typeof valore_fornito=='number'){
  check=true;
  console.log('is a number');
  document.getElementById('typeof').innerHTML= valore_fornito + ' è un numero';
}else{
  console.log('not a number');
  document.getElementById('typeof').innerHTML= valore_fornito + ' non è un numero';
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let numero7=20;
if(numero7%2==0){
  console.log('pari');
  document.getElementById('pari').innerHTML= numero7 + ' è pari';
}else{
  console.log('dispari');
  document.getElementById('pari').innerHTML= numero7 + ' è dispari';
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let val = 7
  if (val < 10) {
      console.log("Meno di 10");
      document.getElementById('circostanza').innerHTML= val + ' è meno di dieci';
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */