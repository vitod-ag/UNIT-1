
const tombola = document.getElementById('tombola');
const tombolaArray = [];
const numeriUsciti = [];


const creaTombola = () => {
    for ( let i=0; i<90; i++ ) {
        const div = document.createElement('div');
        const span = document.createElement('span'); // meglio span come piccolo blocco per contenere  il numero
        span.innerText = i + 1;
        div.setAttribute("id", "numero" + i);
        div.classList.add("cella");
        div.appendChild(span);
        tombola.appendChild(div);
        tombolaArray.push(i);
    }
}

const bottone = document.getElementById('button');

const generaNumero = () => {
    let numero = Math.floor(Math.random()*tombolaArray.length)+1;
    let find = numeriUsciti.indexOf(numero);
    if (find === -1) {
        numeriUsciti.push(numero);
        const num = document.getElementById('numero'+(i-1));
        num.classList.add('numeroUscito');
    }else {
        if (numeriUsciti.length < tombolaArray.length ){
            generaNumero();
        }
    }
}

bottone.addEventListener('click', function(e){
    e.preventDefault();
    generaNumero();
})


window.addEventListener('load', function() {
    creaTombola();
});