
const main = document.getElementById('main');
const chevron = document.getElementsByClassName('gg-chevron-down')[0];

function abrirCard(){
    main.style.color = 'black';
}

chevron.addEventListener(onclick, abrirCard);