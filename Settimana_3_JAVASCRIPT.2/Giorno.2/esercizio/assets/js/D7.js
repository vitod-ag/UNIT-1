/* ESERCIZIO 1
  Scrivi una funzione per concatenare due stringhe ricevute come parametri,
   selezionando solamente i primi 2 caratteri della
  prima e gli ultimi 3 della seconda. Converti la stringa risultante
   in maiuscolo e mostrala con un console.log().
*/

console.log("\n");
console.log('*******ESERCIZIO 1***********');

function concateno(stringa1, stringa2) {
  let primiDueCaratteri = stringa1.substring(0, 2);
  let ultimiTreCaratteri = stringa2.slice(-3);
  let stringaConcatenata = primiDueCaratteri.concat(ultimiTreCaratteri);
  stringaConcatenata = stringaConcatenata.toUpperCase();
  console.log(stringaConcatenata);
}

concateno("ciao", "mondo");

/* ESERCIZIO 2 (for)
  Scrivi una funzione che torni un array di 10 elementi;
   ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).
*/
console.log("\n");
console.log('*******ESERCIZIO 2***********');


function finoA100() {
  const array = [];
  for (let i = 0; i < 10; i++) {
    let numCasuale = Math.floor(Math.random() * 101);  // MOLTIPLICO DI UNO OLTRE
    array.push(numCasuale);
  }
  return array;
}

const arrayNumCasuali = finoA100();
console.log(arrayNumCasuali);

/* ESERCIZIO 3 (filter)
  Scrivi una funzione per ricavare solamente i valori PARI da un array 
  composto da soli valori numerici
*/

console.log("\n");
console.log('*******ESERCIZIO 3***********');

function pari() {
  let filtro = array.filter(valore => valore % 2 === 0);
  return filtro;
}

const array = [2, 45, 44, 95, 66, 24, 25];
let elementiPari = pari(array);
console.log(elementiPari);

/* ESERCIZIO 4 (forEach)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/

console.log("\n");
console.log('*******ESERCIZIO 4***********');

function somma(array){
    let somma = 0;
    array.forEach(numero => {
      somma += numero;
    });
    return somma;
}

let arrayUsato = [1,2,4,5,8];
let risultato = somma(arrayUsato);
console.log(risultato);

/* ESERCIZIO 5 (reduce)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/

console.log("\n");
console.log('*******ESERCIZIO 5***********');

const numeriSommati = (array) => {
  return array.reduce((totale, valoreCorrente) => totale + valoreCorrente,0);
}

const arrayReduce = [5,22,3,6,9];
let result = numeriSommati(arrayReduce);
console.log(result);

/* ESERCIZIO 6 (map)
  Scrivi una funzione che, dato un array di soli numeri e un numero n come parametri, ritorni un secondo array con tutti i valori del precedente incrementati di n
*/

console.log("\n");
console.log('*******ESERCIZIO 6***********');

const fibonacci = (primoArray,n) => {
    return primoArray.map( elemento => elemento + n );
}
const primoArray = [6,11,32,64,90];
let n = 5;
let risultato2 = fibonacci(primoArray,n);
console.log(risultato2);


/* ESERCIZIO 7 (map)
  Scrivi una funzione che, dato un array di stringhe, ritorni un nuovo array contenente le lunghezze delle rispettive stringhe dell'array di partenza
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/

console.log("\n");
console.log('*******ESERCIZIO 7***********');

const lunghezze = (array) => {
    return array.map( arrayPosizioni => arrayPosizioni.length);
}

let stringa3 = ["FAMOSO", "GRANDE","VITO"];
let lunghezzaStringhe = lunghezze(stringa3);
console.log(lunghezzaStringhe);

/* ESERCIZIO 8 (forEach o for)
  Scrivi una funzione per creare un array contenente tutti i valori DISPARI da 1 a 99.
*/
console.log("\n");
console.log('*******ESERCIZIO 8***********');


function dispari(array){
  let valoriDispari = [];
  for (let i=0; i<=99; i++){
    if((i%2) !== 0){
      valoriDispari.push(i);
    }
    
  }
  return valoriDispari;
}

const arrayDispari = dispari();
console.log(arrayDispari);

/* Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */
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
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
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
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
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
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
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
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
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

/* ESERCIZIO 9 (forEach)
  Scrivi una funzione per trovare il film più vecchio nell'array fornito.
*/

console.log("\n");
console.log('*******ESERCIZIO 9***********');

function trovaFilmPiuVecchio(films) {
  // Inizializziamo una variabile per memorizzare il film più vecchio
  var filmPiuVecchio = null;

  // Iteriamo su ciascun film nell'array utilizzando forEach
  films.forEach(function(film) {
    // Controlliamo se filmPiuVecchio è ancora null o se il film corrente è più vecchio di quello memorizzato
    if (filmPiuVecchio === null || film.annoPubblicazione < filmPiuVecchio.annoPubblicazione) {
      // Se è così, assegniamo il film corrente a filmPiuVecchio
      filmPiuVecchio = film;
    }
  });
  return filmPiuVecchio;
}

let olderThan = trovaFilmPiuVecchio(movies);
console.log(olderThan);


/* ESERCIZIO 10
  Scrivi una funzione per ottenere il numero di film contenuti nell'array fornito.
*/

console.log("\n");
console.log('*******ESERCIZIO 10***********');

function quantiFilm(film){
  return film.length;
}

let numeroFilm = quantiFilm(movies);
console.log(numeroFilm);



/* ESERCIZIO 11 (map)
  Scrivi una funzione per creare un array con solamente i titoli dei film contenuti nell'array fornito.
*/

// console.log("\n");
// console.log('*******ESERCIZIO 11***********');

// const arrayTitoli = (arrayFilm)  => {
//   const arrayTitle = arrayFilm.map(function(film))
  
//   return arrayTitle;
// }

// let arrayTitle = arrayTitoli(movies);
// console.log(arrayTitle);

/* ESERCIZIO 12 (filter)
  Scrivi una funzione per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
*/

/* ESERCIZIO 13 (reduce)
  Scrivi una funzione per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
*/







/* ESERCIZIO 14 (find)
  Scrivi una funzione per ottenere dall'array fornito uno specifico film (la funzione riceve un imdbID come parametro).*/
          

console.log("\n");
console.log('*******ESERCIZIO 14***********');

function cercaFilm(id) {
  return movies.find(element => element.imdbID===id)    // cerco il film tramite ID grazie al find()
}

const filmTrovato = cercaFilm('tt4154796');
console.log('Film trovato: ', filmTrovato)


//**********************NETFLIX***************************/
//const elenco = document.getElementById('elenco');

// movies.forEach(element => {
// 	let option = document.createElement('option');
// 	option.setAttribute('value', element.imdbID);
// 	option.innerText = element.Title;
// 	elenco.appendChild(option);
// });

// document.getElementById('scegli').addEventListener('click', function() {
// 	let imdbID = elenco.value;
// 	const filmScelto = movies.find((element) => {
// 		return element.imdbID === imdbID;
// 	});
// 	console.log(filmScelto);
// 	document.getElementById('titolo').innerText = filmScelto.Title;
// 	document.getElementById('anno').innerText = `Anno di produzione: ${filmScelto.Year}`;
// 	document.getElementById('locandina').innerHTML = `<img src="${filmScelto.Poster}" alt="locandina ${filmScelto.Title}" />`;
// });

// /* ESERCIZIO 15 (findIndex)
//   Scrivi una funzione per ottenere dall'array fornito l'indice del primo film uscito nell'anno fornito come parametro.
// */
