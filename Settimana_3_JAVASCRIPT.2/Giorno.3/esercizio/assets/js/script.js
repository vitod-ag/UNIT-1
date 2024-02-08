const task = document.getElementById('task');
const btnAggiungi = document.getElementById('inserisci');
const lista = document.getElementById('lista');
// mi sono portato tutti gli elementi id dell'HTML 

let singleTask;
let tasks = [];
// variabili globali che userò nel proseguo

function init() {
    if (localStorage.getItem('tasks')){  // SE LA MEMORIA HA UN TASK
        tasks = (localStorage.getItem('tasks').split(','));
        console.log(tasks);
        scriviLista();   // PRIMA FUNZIONE
    }
}

btnAggiungi.addEventListener('click', function(e){
    e.preventDefault();  // a campo vuoto blocca altre funzioni
    if (task.value == '') {
        alert('Inserire un task');
        return;
    }else {
        aggiungi();     // SECONDA FUNZIONE
        scriviLista();      // TERZA FUNZIONE
        cancellaForm();     // QUARTA FUNZIONE
    }
})

// iniziamo a scrivere le funzioni

const aggiungi = () => {
    singleTask = task.value;
    tasks.push(singleTask);
    console.log(tasks);
    localStorage.setItem('tasks', tasks);
}

