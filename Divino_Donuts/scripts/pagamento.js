document.addEventListener('DOMContentLoaded', () => {
    const paymentForm = document.querySelector('.payment-options-form');
    const otherPaymentButton = document.querySelector('.other-payment-button');
    const accessibilityIcon = document.querySelector('.accessibility-icon');
    const menuToggle = document.querySelector('.menu-toggle');

    // Evento para seleção das formas de pagamento (apenas loga a seleção)
    paymentForm.addEventListener('change', (event) => {
        if (event.target.name === 'payment_method') {
            const selectedMethod = event.target.value;
            alert(`Método de pagamento selecionado: ${selectedMethod.toUpperCase()}`);
            console.log('Forma de pagamento selecionada:', selectedMethod);
            // Em um aplicativo real, aqui você atualizaria o resumo do pedido
            // ou habilitaria/desabilitaria campos adicionais (ex: dados do cartão)
        }
    });

    // Evento para o botão "Outras formas de pagamento"
    otherPaymentButton.addEventListener('click', () => {
        alert('Funcionalidade de "Outras formas de pagamento" seria ativada aqui!');
        console.log('Botão "Outras formas de pagamento" clicado.');
        // Aqui você poderia redirecionar para uma nova página, abrir um modal, etc.
        // window.location.href = 'other-payment-options.html';
    });

    // Evento para o ícone de acessibilidade (mesmo das outras páginas)
    accessibilityIcon.addEventListener('click', (event) => {
        event.preventDefault();
        // alert('Funcionalidades de Acessibilidade seriam ativadas aqui!');
         window.location.href = 'http://127.0.0.1:5501/P%C3%A1ginas/acessibilidade.html'; // Substitua 'accessibility.html' pelo nome real da sua página
    });

    // JavaScript para ativar o menu
        const menutoggle = document.querySelector('.menu-toggle');
        const mainNavigation = document.getElementById('mainNavigation');

        menuToggle.addEventListener('click', () => {
            // Alterna a classe 'is-open' no menu de navegação
            mainNavigation.classList.toggle('is-open');

            // Alterna o atributo aria-expanded para acessibilidade
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
            menuToggle.setAttribute('aria-expanded', !isExpanded);
        });

        // Opcional: Fechar o menu quando um link é clicado (útil para SPAs ou links âncora)
        mainNavigation.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (mainNavigation.classList.contains('is-open')) {
                    mainNavigation.classList.remove('is-open');
                    menuToggle.setAttribute('aria-expanded', 'false');
                }
            });
        });

        // Opcional: Fechar o menu se a janela for redimensionada para desktop
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) { // Se for maior que o breakpoint mobile
                if (mainNavigation.classList.contains('is-open')) {
                    mainNavigation.classList.remove('is-open');
                    menuToggle.setAttribute('aria-expanded', 'false');
                }
            }
        });



    // Você pode querer inicializar a seleção para garantir que um rádio esteja sempre marcado
    // if (!document.querySelector('input[name="payment_method"]:checked')) {
    //     document.querySelector('input[name="payment_method"][value="pix"]').checked = true;
    // }
});

