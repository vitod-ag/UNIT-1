
/* ESERCIZIO 1
 Scrivi una funzione per cambiare il titolo della pagina in qualcos'altro
*/

const changeTitle = function () {
    document.getElementsByTagName('h1')[0].innerText = 'Titolo principale modificato';
}
changeTitle();



/* ESERCIZIO 2
 Scrivi una funzione per aggiungere al titolo della pagina una classe "myHeading"
*/

const addClassToTitle = () => { 
    document.getElementsByTagName('h1')[0].setAttribute('class','myHeading');
}
addClassToTitle();


/* ESERCIZIO 3
 Scrivi una funzione che cambi il testo dei p figli di un div
*/

const changePcontent = function () { 
    let lunghezzaParagrafi= document.querySelectorAll('div p');
    for (let i = 0; i<lunghezzaParagrafi.length; i++){                  // FACCIO IL FOR PERCHE MI SERVE CAMBIARE OGNI P E QUINDI CICLO
        lunghezzaParagrafi[i].innerText = ' p cambiato';
    } 
}
changePcontent();

/* ESERCIZIO 4
 Scrivi una funzione che cambi la proprietà href di ogni link (tranne quello nel footer) con il valore https://www.google.com
*/

const changeUrls = function () { 
    let link = document.querySelectorAll('a');
    for ( let i=0; i<link.length; i++ ){
        const footer = link[i].closest('footer');
        if (!footer){
            link[i].href='https://www.google.com';
        }
    }
}

changeUrls();

/* ESERCIZIO 5
 Scrivi una funzione che aggiunga un nuovo elemento lista alla seconda lista non ordinata
*/

const addToTheSecond = function () { 
    let li = document.createElement('li');                         // mi devo creare necessariamente un nuovo elemento
    li.innerText = 'Nuovo Elemento';
    document.getElementById('secondList').appendChild(li);
}

addToTheSecond();


/* ESERCIZIO 6
 Scrivi una funzione che aggiunga un paragrafo al primo div
*/

const addParagraph = function () {
    const newParagraph = document.createElement('p');           // CREO
    newParagraph.innerText = 'Questo è un nuovo paragrafo';     // INSERISCO TESO IN QUESTO CASO
    document.querySelector('div').appendChild(newParagraph);    // LO AGGIUNGO AL PRIMO DIV POICHE QUERYSELECTOR AGISCE SUL PRIMO SELETTORE IN QUESTIONE
 }

 addParagraph();

/* ESERCIZIO 7
 Scrivi una funzione che faccia scomparire la prima lista non ordinata
*/

const hideFirstUl = function () { 
    
}

/* ESERCIZIO 8 
 Scrivi una funzione che renda verde il background di ogni lista non ordinata
*/

const paintItGreen = function () { }

/* ESERCIZIO 9
 Scrivi una funzione che rimuova l'ultima lettera dall'h1 ogni volta che l'utente lo clicca
*/

const makeItClickable = function () { }

/* ESERCIZIO 10
 Crea una funzione che, al click sul footer, riveli l'URL del link interno come contenuto di un alert()
*/

const revealFooterLink = function () { }

/* ESERCIZIO 11
 Crea una funzione che crei una tabella nell'elemento con id "tableArea". 
 La tabella avrà 5 elementi e questa struttura: immagine, nome prodotto, quantità, prezzo
*/

const generateTable = function () { }

/* ESERCIZIO 12
 Crea una funzione che aggiunga una riga alla tabella precedentemente creata e fornisca i dati necessari come parametri
*/

const addRow = function () { }

/* ESERCIZIO 14
Crea una funzione che nasconda le immagini della tabella quando eseguita
*/

const hideAllImages = function () { }

/* EXTRA ESERCIZIO 15
Crea una funzione che cambi il colore del h2 con id "changeMyColor" con un colore random ad ogni click ricevuto
*/

const changeColorWithRandom = function () { }
