// mi porto nello script gli id HTML
const task = document.getElementById('taskList');
const btnAdd = document.getElementById('inserisci');
const lista = document.getElementById('lista');

// scrivermi da qualche parte il valore degli input e in questo caso un array dove memorizzarlo
let singleTask;
let tasks = [];

// inizio con un la cosa che mi faccia partire il tutto ovvero un click
btnAdd.addEventListener('click', function(e){
    e.preventDefault();     // resetto ad ogni inserimento
    // CONTROLLO SE L'UTENTE HA INSERITO QUALCOSA
    if (task.value === ''){
        alert('Inserire un task!');
        return;  
      }
    aggiungi();             /* pusho il nuovo task all'array */
    scriviLista();          /* dopo aver pushato l'elemento, scrivo l'elemento nella lista*/
    cancellaForm();         /* cancello */
}) 

const aggiungi = () => {
    singleTask = task.value;   
    tasks.push(singleTask);
    console.log(tasks);
}

const scriviLista = () => {    // forEach() per iterare su tutti gli elementi nell'array tasks e mi creo un <li> che contiene il cestino 
    lista.innerHTML = ''; // LA SVUOTO PRIMA DI INIZIARE QUALSIASI COSA
    tasks.forEach((element, index) => {
        lista.innerHTML += `<li> ${element}&nbsp;<button type='button' onclick='elimina(${index});'>🗑️</li>`;
    })
}

const cancellaForm = () => {
    task.value = '';
}

const elimina = (index) => {
    tasks.splice(index,1);               //lo splice(da quale indice devo partire a eliminare, quanti ne devo eliminare)
    scriviLista();
}
