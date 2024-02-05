/////////////////////////////////////////////////////////////////////
//****************ESERCIZIO DURANTE LA LEZIONE********************* */

//simulo il lancio di due dadi
//mi servono due variabili random da 1 a 6
//confronto somma(pari o dispari) tra variabili
//stampare a condizione= PARI->VITTORIA , DISPARI->SCONFITTA

//FUNZIONI
//funzione lancio
//funzione somma e verifica
//funzione stampa


let num1=0;
let num2=0;

document.addEventListener('load',init());

function init(){
    lancio();
    stampa();
}


function lancio(){
    num1=Math.floor((Math.random() * 6) + 1);
    num2=Math.floor((Math.random() * 6) + 1);

    document.getElementById('lancio1').innerText = num1;
    document.getElementById('lancio2').innerText = num2; 
}

function verifica(){
    let somma = num1 + num2;
    document.getElementById('somma').innerText = somma;
    if (somma%2===0){
        return true;
    }else {
        return false;
    }
}

function stampa() {
    let risultato = document.getElementById('risultato');
    let riga = document.createElement('h4');
    if(verifica()){
        riga.setAttribute('id','vittoria');
        riga.innerText = ' HAI VINTO ';
        risultato.appendChild(riga);
    }else{
        riga.setAttribute('id','sconfitta');
        riga.innerText = ' HAI PERSO ';
        risultato.appendChild(riga);
    }
}
