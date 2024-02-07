
document.getElementById('button').addEventListener('click',function() {

    const taskTesto = document.getElementById('task').value;        // mi creo il valore task  tramite l'id creato in precedenza
    if ( taskTesto !== "") {                                        
        const taskItem = document.createElement('li');              // allora mi creo l'elemento 
        taskItem.innerText = taskTesto;                           // aggiungo il testo all'elemento (lo popolo)
        document.getElementById('taskList').appendChild(taskItem);  // riempio la lista, che prima li ho affibiato l'id, di item

        document.getElementById('task').value = "";
    }
    
 });