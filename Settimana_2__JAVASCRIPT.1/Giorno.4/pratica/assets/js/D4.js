/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve
  due parametri (l1, l2)
   e calcola l'area del rettangolo associato.
*/



/* SCRIVI QUI LA TUA RISPOSTA */
function area(l1, l2) {
    return (l1 * l2);
}
console.log("\n");
console.log("\n");
console.log('*********ESERCIZIO 1***********');
console.log('L\'area del rettangolo è ' + area(2, 5));
console.log("\n");
console.log("\n");


/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/



/* SCRIVI QUI LA TUA RISPOSTA */

function crazySum(a,b){
    if(a===b){
        return ((a+b)*3);
    }else{
        return a+b;
    }
}
console.log('*********ESERCIZIO 2***********');
console.log('La funzione particolare crazySum ci dà come risultato: ' + crazySum(2, 2));
console.log("\n");
console.log("\n");


/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/



/* SCRIVI QUI LA TUA RISPOSTA */

function crazyDiff(a){
    let diff=Math.abs(a-19);
    if (a>19){
        return Math.abs(diff)*3;
    }else{
        return Math.abs(diff);
    }
}

console.log('*********ESERCIZIO 3***********');
console.log('La funzione particolare crazyDiff ci dà come risultato: ' + crazyDiff(40));
console.log("\n");
console.log("\n");

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function boundary(n){
    if((n>=20)&&(n<=100)||(n===400)){
        return true;
    }else{
        return false;
    }
}

console.log('*********ESERCIZIO 4***********');
console.log('La funzione particolare boundary ci dà come risultato: ' + boundary(400));
console.log("\n");
console.log("\n");

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function epify(stringa){
    if (stringa.startsWith('EPICODE ')) {
        return stringa;
    }else {
        return 'EPICODE' + stringa;
    }
}

console.log('*********ESERCIZIO 5***********');
console.log(epify(" IL NATALE "));
console.log("\n");
console.log("\n");

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function check3and7(num){
    if((num%3===0)||(num%7===0)){
    return true;
    }else{
    return false;
    }
}

console.log('*********ESERCIZIO 6***********');
console.log('Il numero  è divisibile per 3 o per 7?'  + ' ' + check3and7(5));
console.log("\n");
console.log("\n");

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function reverseString(a){
    let stringaInvertita="";
    for(let i = a.length-1; i>=0; i--){
        stringaInvertita += a[i];
    }
    return stringaInvertita;
}


console.log('*********ESERCIZIO 7***********');
console.log('La stringa fornita ora è '  +  reverseString("palesemente"));
console.log("\n");
console.log("\n");

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// function upperFirst(a){
//     let nuovaStringa='';
//     for(let i=0; i<a.length; i++){
//         nuovaStringa=a.toLoweCase();
//     }
//     return nuovaStringa.toUpperCase();
// }

// console.log('*********ESERCIZIO 8***********');
// console.log('La stringa fornita ora è '  +  upperFirst("TgtyYr"));
// console.log("\n");
// console.log("\n");

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// function cutString(a){


// }

// console.log('*********ESERCIZIO 9***********');
// console.log('La stringa fornita ora è '  +  upperFirst("TgtyYr"));
// console.log("\n");
// console.log("\n");


/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function cutgiveMeRandomString(n){
    let array=[];
    for(let i=0; i<n; i++){
        let numCasuale = Math.floor(Math.random() * 11);
        array.push(numCasuale);
    }
    return array;
}

console.log('*********ESERCIZIO 10***********');
console.log(cutgiveMeRandomString(6));
console.log("\n");
console.log("\n");