$(document).ready(function () {
    const $buttons = $('[data-tab-button]');

    $buttons.on('click', function () {
        const abaAlvo = $(this).data('tab-button');
        const $aba = $(`[data-tab-id=${abaAlvo}]`);

        escondeTodasAbas();
        $aba.addClass('shows__list--is-active');

        removeBotaoAtivo();
        $(this).addClass('shows__tabs__button--is-active');
    });

    function removeBotaoAtivo() {
        $buttons.removeClass('shows__tabs__button--is-active');
    }

    function escondeTodasAbas() {
        const $tabsContainer = $('[data-tab-id]');
        $tabsContainer.removeClass('shows__list--is-active');
        console.log('removendo');
        console.log($tabsContainer);
    }
});