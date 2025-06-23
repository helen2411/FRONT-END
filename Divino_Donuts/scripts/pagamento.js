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
        alert('Funcionalidades de Acessibilidade seriam ativadas aqui!');
    });

    // Evento para o botão de menu (mesmo das outras páginas)
    menuToggle.addEventListener('click', () => {
        alert('Menu lateral seria aberto aqui!');
        // Implementar lógica para abrir/fechar um menu lateral (off-canvas)
    });

    // Você pode querer inicializar a seleção para garantir que um rádio esteja sempre marcado
    // if (!document.querySelector('input[name="payment_method"]:checked')) {
    //     document.querySelector('input[name="payment_method"][value="pix"]').checked = true;
    // }
});

