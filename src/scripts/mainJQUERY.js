$(document).ready(function () {
    const $buttons = $('[data-tab-button]');
    console.log($buttons)

    $buttons.on('click', function () {

        // Aqui, $(this) refere-se ao botão que foi clicado. 
        // O método .data('tab-button') é usado para obter o valor do atributo data-tab-button do botão clicado.
        const abaAlvo = $(this).data('tab-button');

        // Seleciona o elemento que tem o atributo data-tab-id igual ao valor de abaAlvo.
        const $aba = $(`[data-tab-id=${abaAlvo}]`);

        escondeTodasAbas();

        // Adiciona a classe shows__list--is-active à aba selecionada, tornando-a visível.
        $aba.addClass('shows__list--is-active');

        removeBotaoAtivo();
        // Adiciona a classe shows__tabs__button--is-active ao botão clicado, destacando-o como o botão ativo.
        $(this).addClass('shows__tabs__button--is-active');
    });

    function removeBotaoAtivo() {
        $buttons.removeClass('shows__tabs__button--is-active');
    }

    function escondeTodasAbas() {
        const $tabsContainer = $('[data-tab-id]');
        $tabsContainer.removeClass('shows__list--is-active');

    }
});