document.addEventListener('DOMContentLoaded', function (){
    const label = document.querySelectorAll('[data-label]')
    const buttonTitle = document.querySelectorAll('[data-title]')
  

    for (let i = 0; i < label.length; i++) {
        label[i].addEventListener('click', abreOuFechaTexto);
    }

    for (let i = 0; i < buttonTitle.length; i++) {
        buttonTitle[i].addEventListener('click', function(botao){
            const retorno = botao.target.dataset.title;
            const aba = document.querySelector(`[data-id=${retorno}]`);
            escondeAba();
            aba.classList.add('hero__content__branding__text--is-active');     
            removeBotaoAtivo();
            botao.target.classList.add('hero__content__item__button--is-active');
        })       
    }

function removeBotaoAtivo() {
    const buttonTitle = document.querySelectorAll('[data-title]')
    
    for (let i = 0; i < buttonTitle.length; i++) {
        buttonTitle[i].classList.remove ('hero__content__item__button--is-active')
}
}

function escondeAba() {
    const esconde = document.querySelectorAll('[data-id]');

    for (let i = 0; i < esconde.length; i++) {
        esconde[i].classList.remove('hero__content__branding__text--is-active')
    }
}
        


function abreOuFechaTexto (elemento){
    const classe = 'menu__toggle__label__item--is-open';
    const elementoPai = elemento.target.parentNode;

    elementoPai.classList.toggle(classe);
    }
})