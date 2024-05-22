document.addEventListener('DOMContentLoaded', function () {

    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question]');

    const heroSection = document.querySelector('.hero');
    const alturaHeroSection  = heroSection.clientHeight;

    window.addEventListener('scroll', function(){
        const posicaoAtual = this.window.scrollY;
        
        if (posicaoAtual < alturaHeroSection){
            ocultaEleemntosDoHeader();
        }
        else{

            exibeElementosDoHeader();
        }
    })

    // Seção de Atrações - program,ação das abas
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function (botao) {
            const abaAlvo = botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`)
            escondeTodasAbas();
            aba.classList.add('shows__list--is-active');
            removeBotaoAtivo();
            botao.target.classList.add('shows__tabs__button--is-active');
        })
    }

    // Seção FAQ ACCORDION
    for (let i = 0; i < questions.length; i++){

        questions[i].addEventListener('click', abreOuFechaResposta);
    }
})

function ocultaEleemntosDoHeader(){
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden');
}

function exibeElementosDoHeader(){

    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden');
}

function abreOuFechaResposta(elemento){

    const classe = 'faq__questions__item--is-open'
    const elementoPai =  elemento.target.parentNode;

    console.log(elementoPai);

    elementoPai.classList.toggle(classe);
}

function removeBotaoAtivo() {

    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is-active')
    }
}

function escondeTodasAbas() {

    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i < tabsContainer.length; i++) {

        tabsContainer[i].classList.remove('shows__list--is-active')

    }
}