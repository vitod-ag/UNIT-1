
/* ESERCIZIO 1
 Scrivi una funzione per cambiare il titolo della pagina in qualcos'altro
*/

const titolo = document.querySelector('h1'); //messa fuori dalla funzione perché globale, la userò in altre funzioni
const changeTitle = function () {
    titolo.innerText = "Epicode";
};
changeTitle();



// /* ESERCIZIO 2
//  Scrivi una funzione per aggiungere al titolo della pagina una classe "myHeading"
// */

const addClassToTitle = () => {
    titolo.classList.add('myHeading');
}
    
addClassToTitle();


// /* ESERCIZIO 3
//  Scrivi una funzione che cambi il testo dei p figli di un div
// */

const changePcontent = function () { 
    const testoParagrafi = document.querySelectorAll('div p');     //CERCHIAMO E INSERIAMO IN UNA VARIABILE
    for(let i=0; i<testoParagrafi.length;i++){
        testoParagrafi[i].innerText='dfvhfvdkjhbdajb';
    }
}
changePcontent();

// /* ESERCIZIO 4
//  Scrivi una funzione che cambi la proprietà href di ogni link (tranne quello nel footer) con il valore https://www.google.com
// */

const changeUrls = function () { 
    const link = document.querySelectorAll('a:not(footer a)');    // perché gli href li trovo solo nelle <a>______significa= PRENDI LE <a> MA NON LE <a> CHE STANNO NEL <footer>
    for(let i=0; i<link.length; i++){
        link[i].setAttribute('href','https://www.google.com');   //setAttribute = prima cosa voglio modificare, poi la cosa che ci devo mettere
        link[i].setAttribute('target','_blank');
    }

}
changeUrls();

// /* ESERCIZIO 5
//  Scrivi una funzione che aggiunga un nuovo elemento lista alla seconda lista non ordinata
// */

const addToTheSecond = function () { 
    const secondaLista = document.getElementById('secondList');  // mi vado a prendere e selezionare la lista che qui abbiamo grazie all'id
    const newElement = document.createElement('li');             // mi creo il nuovo elemento di tipo list item
    newElement.innerText='56';
    secondaLista.appendChild(newElement);
}

addToTheSecond();


// /* ESERCIZIO 6
//  Scrivi una funzione che aggiunga un paragrafo al primo div
// */

const addParagraph = function () {
    const primoDiv=document.querySelector('div');
    const newParagrafo=document.createElement('p');        // prima dico che esiste
    newParagrafo.innerText='Paragrafoooooo';               // qui riempio il contenuto della variabile
    primoDiv.appendChild(newParagrafo);
}

addParagraph();

// /* ESERCIZIO 7
//  Scrivi una funzione che faccia scomparire la prima lista non ordinata
// */

const hideFirstUl = function () { 
    const primaLista = document.getElementById('firstList');
    primaLista.style.display='none';        // PER FAR SPARIRE IL DATO
}

hideFirstUl();

// /* ESERCIZIO 8 
//  Scrivi una funzione che renda verde il background di ogni lista non ordinata
// */

const paintItGreen = function () { 
    const liste = document.querySelectorAll('ul');
    for(let i=0; i<liste.length; i++ ){
        liste[i].style.backgroundColor='green';
    }
}

paintItGreen();


// /* ESERCIZIO 9
//  Scrivi una funzione che rimuova l'ultima lettera dall'h1 ogni volta che l'utente lo clicca
// */

const makeItClickable = function () { 
        titolo.style.cursor='pointer';                  //CAMBIO LO STILE DEL TITOLO QUANDO CI PASSO CON IL MOUSE
        titolo.addEventListener('click',function() {    //FUNZIONE CHE RISPONDE ALL'IMPULSO OVVERO AL CLICK
            let scritta=titolo.innerText.split('');     // CON SPLIT DIVIDO LA STRINGA IN UN ARRAY DI SOTTOSTRINGHE
            console.log(scritta);
            scritta.pop();                              // CON POP ELIMINO L'ULTIMA OCCORRENZA
            let nuovoTesto= scritta.join('');           // CON JOIN LE UNISCO
            console.log(nuovoTesto);
            titolo.innerText = nuovoTesto;
        })
}

makeItClickable();

// /* ESERCIZIO 10
//  Crea una funzione che, al click sul footer, riveli l'URL del link interno come contenuto di un alert()
// */

const revealFooterLink = function () { 
    const findFooter=document.querySelector('footer');
    findFooter.style.cursor='pointer';
    findFooter.addEventListener('click', function() {
        const footerLink = document.querySelector('footer a');    // VISTO CHE l'URL SI TROVA NELLA <a>         //QUI RICERCA           
        const linkFooter = footerLink.getAttribute('href');       // DOVENDO RIVELARE, FACCIO getAttribute      //QUI DIAMO ALL'ELEMENTO
        alert(linkFooter);
    })
}

revealFooterLink();

// /* ESERCIZIO 11
//  Crea una funzione che crei una tabella nell'elemento con id "tableArea". 
//  La tabella avrà 5 elementi e questa struttura: immagine, nome prodotto, quantità, prezzo
// */

const generateTable = function () { 
        const tableContainer = document.getElementById('tableArea'); // RICERCA E MESSA IN VARIABILE
        const tabella = document.createElement('table');             // CREO ELEMENTO IN QUESTA VAR

        // CREO RIGA
        const intestazione = document.createElement('tr');
        
        // CREO HEADING 
        const thId = document.createElement('th');
        thId.innerText = 'ID';
        const thImmagine = document.createElement('th');
        thImmagine.innerText = 'Immagine';
        const thNome = document.createElement('th');
        thNome.innerText = 'Nome Prodotto';
        const thQuantita = document.createElement('th');
        thQuantita.innerText = 'Quantita';
        const thPrezzo = document.createElement('th');
        thPrezzo.innerText = 'Prezzo';

        // RIEMPIO IL CONTENUTO DELLE RIGHE
        intestazione.appendChild(thId);   // FACCIO APPENCHILD POICHE LE RIGA HEADING STA GIA' CREATA E POPOLATA
        intestazione.appendChild(thImmagine);
        intestazione.appendChild(thNome);
        intestazione.appendChild(thQuantita);
        intestazione.appendChild(thPrezzo); 

}

generateTable();

// /* ESERCIZIO 12
//  Crea una funzione che aggiunga una riga alla tabella precedentemente creata e fornisca i dati necessari come parametri
// */

// const addRow = function () { }

// /* ESERCIZIO 14
// Crea una funzione che nasconda le immagini della tabella quando eseguita
// */

// const hideAllImages = function () { }

// /* EXTRA ESERCIZIO 15
// Crea una funzione che cambi il colore del h2 con id "changeMyColor" con un colore random ad ogni click ricevuto
// */

// const changeColorWithRandom = function () { 
//     const newLook = document.get

// }

// changeColorWithRandom();