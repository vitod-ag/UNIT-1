/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
console.log("\n");
console.log('************ESERCIZIO A********************')
let sum = 10 + 20;
console.log(sum);
console.log("\n");

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/


console.log('************ESERCIZIO B********************')
let random = Math.floor(Math.random() * 21);
console.log(random);
console.log("\n");

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/


console.log('************ESERCIZIO C********************')
let me = {
  name: 'Vito',
  surname: 'Dagnello',
  age: 27
}
console.log(me);
console.log("\n");


/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/

console.log('************ESERCIZIO D********************')
delete me.age;
console.log(me);
console.log("\n");

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/

console.log('************ESERCIZIO E********************')
me.skills = ['JS', 'HTML', 'CSS'];
console.log(me);
console.log("\n");

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/

console.log('************ESERCIZIO F********************')
me.skills.push('C');
console.log(me);
console.log("\n");



/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/

console.log('************ESERCIZIO G********************')
me.skills.pop(2);
console.log(me);
console.log("\n");


// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/

console.log('************Funzioni********************');
console.log("\n");
console.log('************ESERCIZIO 1********************');
const dice = () => {
  let numeroCasuale = (Math.floor(Math.random() * 6) + 1);
  return numeroCasuale;
}

let result = dice();
console.log(dice());
console.log("\n");

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/

console.log('************ESERCIZIO 2********************');
const whoIsBigger = (num1, num2) => {
  if (num1 > num2) {
    return num1;
  } else if (num1 < num2) {
    return num2;
  } else {
    return 'I due numeri sono uguali';
  }
}

let greatest = whoIsBigger(10, 10);
console.log(greatest);
console.log("\n");

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/

console.log('************ESERCIZIO 3********************');
const splitMe = (stringa) => {
  let splittato = stringa.split("");
  return splittato;
}

let splittato = splitMe('Caro Babbo Natale');
console.log(splittato);
console.log("\n");

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/

console.log('************ESERCIZIO 4********************');
const deleteOne = (stringa, boolean) => {
  if (boolean) {
    return stringa.slice(1);
  } else {
    return stringa.slice(0, -1);
  }
}

let eliminato = deleteOne('Mamma', 0);
console.log(eliminato);
console.log("\n");

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/

console.log('************ESERCIZIO 5********************');
const onlyLetters = (stringa) => {
  return stringa = stringa.replace(/[0-9]/g, '');
}

let onlyLettera = onlyLetters("I have 4 dogs");
console.log(onlyLettera);
console.log("\n");

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/

console.log('************ESERCIZIO 6********************');
const isThisAnEmail = (stringa) => {
  let emailCorretta = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailCorretta.test(stringa);
}

let email = isThisAnEmail("manuel");
console.log(email);
console.log("\n");

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/

console.log('************ESERCIZIO 7********************');
const whatDayIsIt = () => {

  let giorno = new Date();                      //creo il giorno di oggi
  let giornoInNumero = giorno.getDay();        //ottengo il giorno di oggi in numeri (docchio che domenica parte da 0)
  let giornoDiOggi;                             //dico testualmente che giorno è oggi

  switch (giornoInNumero) {
    case 0:
      giornoDiOggi = 'Domenica';
      break;
    case 1:
      giornoDiOggi = 'Lunedi';
      break;
    case 2:
      giornoDiOggi = 'Martedi';
      break;
    case 3:
      giornoDiOggi = 'Mercoledi';
      break;
    case 4:
      giornoDiOggi = 'Giovedi';
      break;
    case 5:
      giornoDiOggi = 'Venerdi';
      break;
    case 6:
      giornoDiOggi = 'Sabato';
      break;

    default:
      giornoDiOggi = 'Non esiste questo giorno della settimana';
  }
  return giornoDiOggi;
}

let giornoDellaSettimana = whatDayIsIt();
console.log(giornoDellaSettimana);
console.log("\n");

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/

console.log('************ESERCIZIO 8********************');
const rollTheDices = (number) => {
  let sum = 0;           //mi creo le due proprietà che ci saranno nell'oggetto
  let value = [];
  for (let i = 1; i <= number; i++) {
    let valoreDaDice = dice();    //genero il numero casuale da dice()
    sum = sum + valoreDaDice;     //sommo i numeri casuali
    value.push(valoreDaDice);     //inserisco ogni valore di dice() nell'array
  }
  return {
    sum: sum,
    value: value
  };
}

let result2 = rollTheDices(3);
console.log(result2);
console.log("\n");




/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/

console.log('************ESERCIZIO 9********************');
const howManyDays = (date) => {

  let currentDate = new Date();                                                        // salvo la data di di oggi    
  let differenza = currentDate - date;                                                // mi calcolo oggi - la data del parametro
  let dataMillisecondiConvertita = Math.floor(differenza / (1000 * 60 * 60 * 24));   // Convertiamo la differenza in giorni (1 giorno = 24 ore = 86400 secondi = 86400000 millisecondi)

  return dataMillisecondiConvertita;
}


let date = new Date('2024-02-08'); // Data di inizio
let dataMillisecondiConvertita = howManyDays(date);
console.log(dataMillisecondiConvertita);
console.log("\n");

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/

console.log('************ESERCIZIO 10********************');
const isTodayMyBirthday = (mese, giorno) => {
  const giornataOdierna = new Date();                // mi serve per avere la giornata di oggi e salvarla in una variabile
  const meseAttuale = giornataOdierna.getMonth() + 1;     // mi popolo la variabile mese del mese che ricevo (ovviamente faccio +1 perche parte da 0)
  const giornoAttuale = giornataOdierna.getDate();         //// mi popolo la variabile giorno del para

  if (mese === meseAttuale && giorno == giornoAttuale) {
    return true;
  } else {
    return false;
  }
}

const ilMeseDelMioCompleanno = 11;
const ilGiornoDelMioCompleanno = 9;
const compleanno = isTodayMyBirthday(ilMeseDelMioCompleanno, ilGiornoDelMioCompleanno);
console.log(compleanno);
console.log("\n");

// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file
const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTYbc1qk55vk7wjgzg3pmxlh59rv5dlgewd9jem5nrt4w@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWEbc1qk55vk7wjgzg3pmxlh59rv5dlgewd9jem5nrt4wI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjMbc1qk55vk7wjgzg3pmxlh59rv5dlgewd9jem5nrt4wODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0Mbc1qk55vk7wjgzg3pmxlh59rv5dlgewd9jem5nrt4w@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTkbc1qk55vk7wjgzg3pmxlh59rv5dlgewd9jem5nrt4w4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]


/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/

console.log('************ESERCIZIO 11********************');
const deleteProp = (oggetto, stringa) => {
  delete oggetto[stringa];
  return oggetto;
}


const oggetto = {                                               // ho bisogno di un oggetto nuovo per svolgere l'esercizio
  Title: 'Avengers: Endgame',
  Year: '2019',
  imdbID: 'tt4154796',
  Type: 'movie',
  Poster:
    'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
}
const oggettoModificato = deleteProp(oggetto, "Type");
console.log(oggettoModificato);
console.log("\n");

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/


console.log('************ESERCIZIO 12********************');

const newestMovie = () => {
  let recently = 1900;                              // anno x che significa "a pertire da.."
  let filmInQuestione;                              // film esaminato e poi man mano salvato
  for (let i = 0; i < movies.length; i++) {
    let annoConvertito = parseInt(movies[i].Year);
    if (annoConvertito > recently) {
      recently = annoConvertito;
      filmInQuestione = movies[i].Title;
    }
  }
  return filmInQuestione;
};

console.log(newestMovie());
console.log("\n");





/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/

console.log('************ESERCIZIO 13********************');

const countMovies = () => {
  let conteggio = 0;
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].Type === "movie") {
      conteggio++;
    }
  }
  return conteggio;
}

console.log(countMovies());
console.log("\n");


/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/

console.log('************ESERCIZIO 14********************');

const onlyTheYears = () => {
  let anniUscita = [];
  for (let i = 0; i < movies.length; i++) {
    anniUscita.push(movies[i].Year)
  }
  return anniUscita;
}

console.log(onlyTheYears());
console.log("\n");



/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/

console.log('************ESERCIZIO 15********************');

const onlyInLastMillennium = () => {
  let millennio = [];
  for (let i = 0; i < movies.length; i++) {
    if (parseInt(movies[i].Year) > 2000) {                      // se il film è stato prodotto dopo il 2000 quindi il millennio scorso
      millennio.push(movies[i]);
    }
  }
  return millennio;
}

console.log(onlyInLastMillennium());
console.log("\n");

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/

console.log('************ESERCIZIO 16********************');

const sumAllTheYears = () => {
  let millennioSomma = 0;
  for (let i = 0; i < movies.length; i++) {
    let anni = parseInt(movies[i].Year);
    millennioSomma += anni;
  }
  return millennioSomma;
}

console.log(sumAllTheYears());
console.log("\n");

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/

console.log('************ESERCIZIO 17********************');

const searchByTitle = (stringa) => {
  const trovato = movies.filter((film) =>
    film.Title.toLowerCase().includes(stringa.toLowerCase())
  );
  return trovato;
};

console.log(searchByTitle("lo"));
console.log("\n");

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/

console.log('************ESERCIZIO 18********************');

const searchAndDivide = (stringa) => {
  const oggetto = {
    match: [],
    unmatch: []
  };

  for (let i = 0; i < movies.length; i++) {
    if (movies[i].Title.toLowerCase().includes(stringa.toLowerCase())) {
      oggetto.match.push(movies[i]);
    } else {
      oggetto.unmatch.push(movies[i]);
    }
  }
  return oggetto;
}

console.log(searchAndDivide("aven"));
console.log("\n");

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/

console.log('************ESERCIZIO 19********************');

const removeIndex = (num) => {
  const copia = [...movies];
  copia.splice(num, 1);
  return copia;
};

console.log(removeIndex(5));
console.log("\n");


// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/

console.log('************ESERCIZIO 20********************');

const selezionoElementoId = () => {
  const container = document.getElementById('container');   // metto l'id container in una variabile
  console.log(container.innerText);                         // restituisco il testo contenuto all'interno dell'elemento, escludendo il markup HTML.
}
selezionoElementoId();
console.log("\n");



/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/

console.log('************ESERCIZIO 21********************');

const selezionaTagTd = (tag) => {
  const tableData = document.getElementsByTagName(tag);  // selezionare dinamicamente gli elementi in base al tag specificato
  return tableData;                                      // perché vogliamo che la funzione restituisca i risultati della selezione degli elementi HTML
}
console.log(selezionaTagTd("td"));
console.log("\n");


/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/

console.log('************ESERCIZIO 22********************');

const stampaContenutoTag = () => {
  const tableData = document.getElementsByTagName('td');  // seleziono tutti gli elementi <td> presenti nella pagina HTML e li assegno alla variabile tableData
  for (let i = 0; i < tableData.length; i++) {
    console.log(tableData[i].innerText);
  }
}

stampaContenutoTag();
console.log("\n");



/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/

console.log('************ESERCIZIO 23********************');

const aggiungiBackground = () => {
  const coloreAlLink = document.querySelectorAll('a');      // uso query Selector All che mi selezionerà tutti gli elementi <a> presenti nella pagina
  coloreAlLink.forEach(coloreAlLink => {                    // uso forEach così da dare ad ogni link il background
    coloreAlLink.style.backgroundColor = 'red';
  });
}

aggiungiBackground();
console.log("\n");

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/

console.log('************ESERCIZIO 24********************');

const aggiungiElementoAllaLista = () => {
  let newElementList = document.createElement('li');
  const listaNonOrdinata = document.getElementById('myList');
  listaNonOrdinata.appendChild(newElementList);
}

aggiungiElementoAllaLista();
console.log("\n");

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/

console.log('************ESERCIZIO 25********************');

const svuotaLista = () => {
  const listaNonOrdinata = document.getElementById('myList');
  listaNonOrdinata.innerHTML = '';    // usiamo innerHTML su una stringa vuota, tutti gli elementi figlio dell'elemento verranno rimossi.
}

svuotaLista();
console.log("\n");



/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/

console.log('************ESERCIZIO 26********************');

const aggiungiClasse = () => {
  const tagTr = document.getElementsByTagName('tr');
  for (let i = 0; i < tagTr.length; i++) {                       //mi serve il for poichè devo aggiungere la classe ad ogni tag <tr>
    tagTr[i].classList.add('test');
  }

}

aggiungiClasse();
console.log("\n");

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro
   e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

console.log('************ESERCIZIO 27********************');
console.log("\n");

const halfTree = (numero) => {
  // prima mossa: vedo se il numero che mi ha inserito è positivo
  if (numero <= 0) {
    return 'L\'albero è vuoto';
  }
  let albero = '';   // mi creo una stringa e non un oggetto poiche' più semplice e modificabile


  for (let i = 0; i < numero; i++) {
    albero += '*'.repeat(i + 1) + '\n'; // il repeat mi serve per non fare due cicli annidati, mentre il \n mi fa andare a capo ad ogni asterisco
  }

  return albero;
}

let alberoSenzaSpazi = halfTree(2);
console.log(alberoSenzaSpazi);
console.log("\n");



/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero
   come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

console.log('************ESERCIZIO 28********************');
console.log("\n");

const tree = (numero) => {
  // Verifica se il numero è minore o uguale a 0
  if (numero <= 0) {
    return 'L\'albero è vuoto';
  }

  // Costruisci l'albero di asterischi
  for (let i = 1; i <= numero; i++) {
    const spazi = " ".repeat(numero - i);                //metto gli spazi tante vole quante sono (numero-i)--> es. numero=3 quindi 3 righe di albero, al primo giro sono 2 spazi vuoti, al secondo uno e al terzo zero
    let asterischi = "*".repeat(2 * (i - 1) + 1);        //metto gli asterischi grazie a  repeat(2*i-1)---> es numero=3 quindi al primo giro è 2*(1-1)+1 ovvero 1 e via via gli altri
    console.log(spazi + asterischi);
  }
};

let alberoConSpazi = tree(2);
console.log(alberoConSpazi);
console.log("\n");

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

console.log('************ESERCIZIO 29********************');

const isItPrime = (numero) => {
  // controllo prima se il numero è maggiore di uno, altrimenti è falso che sia primo
  if (numero <= 1) {
    return false;
  }  
  for (let i = 0; i < numero; i++) {  // il for mi serve poiche devo trovare due divisori e non solo uno, fino al numero inserito
    if (numero % i === 0) {
      return false;     // ritorna falso perchè al massimo ne ha trovato solo uno e non due
    }
  }
  return true;        // ciclo finito, ne ha trovati due
}

console.log(isItPrime(67));
console.log("\n");





