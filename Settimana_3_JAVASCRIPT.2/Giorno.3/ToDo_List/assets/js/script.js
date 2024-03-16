//mi porto dietro gli id
const todo = document.getElementById('todo');
const itemList = document.getElementById('itemList');
const oggettiLista = [];

const aggiungiLista = (valore) => {
    if ( valore.trim() === '') return;  // controllo se sono stati messi spazi vuoti

    const row = document.createElement('div');
    row.classList.add('row');

    const col9 = document.createElement('div');
    col9.classList.add('col-9', 'gx-2', 'd-flex', 'align-items-center');

    const form = document.createElement('div');
    form.classList.add('form-check');

    const input = document.createElement('input');
    input.classList.add('form-check-input', 'border-secondary', 'bg-transparent', 'shadow-none');
    input.type = 'checkbox';

    const label = document.createElement('label');
    label.classList.add('form-check-label');
    label.innerText = valore;

    form.appendChild(input);
    form.appendChild(label);
    col9.appendChild(form);

    const col3 = document.createElement('div');
    col3.classList.add('col-3', 'gx-2');

    const button = document.createElement('button');
    button.type = 'button';
    button.classList.add('btn', 'btn-outline-danger', 'float-end');
    button.innerHTML = '<i class="bi bi-trash"></i>';

    button.addEventListener('click', function() {
        row.remove();
    });

    col3.appendChild(button);
    row.appendChild(col9);
    row.appendChild(col3);
    itemList.appendChild(row);

    todo.value = ''; // Resetta il campo di input
};

document.getElementById('aggiungi').addEventListener('click', function() {
    aggiungiLista(todo.value);
});