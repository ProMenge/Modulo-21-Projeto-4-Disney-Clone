$(document).ready(function () {
    const $buttons = $('[data-tab-button]');
    const classeAccordion = 'faq__questions__item--is-open';
    const alturaHeroSection = $(".hero").outerHeight();

    // Tabs
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
        $('[data-tab-id]').removeClass('shows__list--is-active');
    }

    // Accordion
    $('[data-faq-question]').on('click', function () {
        const $parent = $(this).parent();

        if ($parent.hasClass(classeAccordion)) {
            $parent.find('.faq__questions__item__answer').slideUp(300, function () {
                $parent.removeClass(classeAccordion);
            });
        } else {
            $parent.find('.faq__questions__item__answer').slideDown(300, function () {
                $parent.addClass(classeAccordion);
            });
        }
    });

    // Hero Section Height
    console.log(alturaHeroSection);

    // Header visibility based on scroll
    $(window).scroll(function () {
        const posicaoAtual = $(window).scrollTop();

        if (posicaoAtual < alturaHeroSection) {
            ocultaElementosDoHeader();
        } else {
            exibeElementosDoHeader();
        }
    });

    function ocultaElementosDoHeader() {
        $('.header').addClass('header--is-hidden');
    }

    function exibeElementosDoHeader() {
        $('.header').removeClass('header--is-hidden');
    }
});
