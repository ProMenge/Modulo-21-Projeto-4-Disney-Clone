document.addEventListener('DOMContentLoaded', function () {

    const buttons = document.querySelectorAll('[data-tab-button]');


    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function (botao) {
            const abaAlvo = botao.target.dataset.tabButton;

        })
    }
})

function escondeTodasAbas() {

    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i < tabsContainer.length; i++) {

        tabsContainer
    }
}