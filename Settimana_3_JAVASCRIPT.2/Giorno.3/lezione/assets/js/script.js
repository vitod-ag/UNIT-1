const form = document.getElementById('form');
const nome = document.getElementById('nome');
const cognome = document.getElementById('cognome');
const email = document.getElementById('email');
const password = document.getElementById('password');
const eta = document.getElementById('eta');
const telefono = document.getElementById('telefono');
const btnSubmit = document.getElementById('invia');
let valid = false;

const persona = {
    nome: '',
}

window.addEventListener('load', init());

function init() {       // non permetto il click su INVIA se il form on è completo
    if(!valid) {

    }
}