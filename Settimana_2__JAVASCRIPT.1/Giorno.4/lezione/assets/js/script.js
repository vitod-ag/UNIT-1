function scrivi(){
    document.getElementById('titolo').innerText='JavaScript';
}

scrivi();

//---------------FUNZIONE SOMMA--------------------

let num1=9;
let num2=7;

function somma(num1,num2){
    if(num1>num2){
        document.getElementById('risultato').innerText=
        'La funzione restituisce un risultato negativo: ';
    return;
    }
    document.getElementById('risultato').innerText=
     'Il risultato della funzione è ' + (num1-num2);
}

somma(num1,num2);

//----------------------------------------------------
//---FUNZIONE CHE CHIAMA UN'ALTRA FUNZIONE CON I NUMERI DEI PASSAGGI-----------

let numero1=10 //1
let numero2=7 //2

function somma(num1,num2) { //6
return num1+num2;           //7
}

function aggiungi(num1){  //4
     document.getElementById('risultato2').innerText=
     num1 + somma(numero1,numero2); //5 legge il numero  e chiama somma
     //8 il flusso ritorna al punto 5 e stampa il risultato
}

aggiungi(12); // 3

//-----------------------------------------------------------------------------