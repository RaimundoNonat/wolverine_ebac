document.addEventListener('DOMContentLoaded', function (){
    const label = document.querySelectorAll('[data-label]')

    for (let i = 0; i < label.length; i++) {
        label[i].addEventListener('click', abreOuFechaTexto);
    }

function abreOuFechaTexto (elemento){
    const classe = 'menu__toggle__label__item--is-open';
    const elementoPai = elemento.target.parentNode;

    elementoPai.classList.toggle(classe);
   
}

})