document.addEventListener('DOMContentLoaded', () => {
    // Referências aos elementos HTML
    const subtotalValueElement = document.getElementById('subtotal-value');
    const deliveryValueElement = document.getElementById('delivery-value');
    const totalValueElement = document.getElementById('total-value');
    const cartItems = document.querySelectorAll('.cart-item');
    const checkoutButton = document.querySelector('.checkout-button');
    const accessibilityIcon = document.querySelector('.accessibility-icon');
    const menuToggle = document.querySelector('.menu-toggle');
    // const carticonheader = document.querySelector ('cart-icon-header') ;

    // Custo de entrega (exemplo)
    const DELIVERY_COST = 5.00; // R$ 5,00 de entrega

    // Função para calcular e atualizar o total do carrinho
    function updateCartTotals() {
        let currentSubtotal = 0;

        cartItems.forEach(item => {
            const price = parseFloat(item.dataset.price); // Preço unitário do item
            const quantity = parseInt(item.querySelector('.quantity-value').textContent);
            currentSubtotal += price * quantity;
        });

        const currentTotal = currentSubtotal + DELIVERY_COST;

        subtotalValueElement.textContent = `R$ ${currentSubtotal.toFixed(2).replace('.', ',')}`;
        deliveryValueElement.textContent = `R$ ${DELIVERY_COST.toFixed(2).replace('.', ',')}`;
        totalValueElement.textContent = `R$ ${currentTotal.toFixed(2).replace('.', ',')}`;
    }

    // Adiciona event listeners para os botões de quantidade
    cartItems.forEach(item => {
        const minusBtn = item.querySelector('.minus-btn');
        const plusBtn = item.querySelector('.plus-btn');
        const quantityValue = item.querySelector('.quantity-value');

        minusBtn.addEventListener('click', () => {
            let currentQuantity = parseInt(quantityValue.textContent);
            if (currentQuantity > 1) { // Garante que a quantidade não seja menor que 1
                currentQuantity--;
                quantityValue.textContent = currentQuantity;
                updateCartTotals();
            }
        });

        plusBtn.addEventListener('click', () => {
            let currentQuantity = parseInt(quantityValue.textContent);
            currentQuantity++;
            quantityValue.textContent = currentQuantity;
            updateCartTotals();
        });
    });

    // Evento para o botão "Finalizar Pedido"
    checkoutButton.addEventListener('click', () => {
        const subtotal = parseFloat(subtotalValueElement.textContent.replace('R$ ', '').replace(',', '.'));
        const delivery = parseFloat(deliveryValueElement.textContent.replace('R$ ', '').replace(',', '.'));
        const total = parseFloat(totalValueElement.textContent.replace('R$ ', '').replace(',', '.'));

        alert(`Pedido Finalizado!
        Subtotal: ${subtotalValueElement.textContent}
        Entrega: ${deliveryValueElement.textContent}
        Total: ${totalValueElement.textContent}`);

        console.log({
            subtotal,
            delivery,
            total,
            items: Array.from(cartItems).map(item => ({
                // Em um cenário real, você teria um ID de produto e outros detalhes aqui
                quantity: parseInt(item.querySelector('.quantity-value').textContent),
                price: parseFloat(item.dataset.price)
            }))
        });

    // Aqui você enviaria os dados do pedido para o backend
    // window.location.href = 'confirmation.html'; // Redirecionar para página de confirmação
    });

    document.addEventListener('DOMContentLoaded', function() {
    const paymentButton = document.querySelector('.btn-payment-options');

    if (paymentButton) {
        paymentButton.addEventListener('click', function() {
            // Lógica para validar ou fazer algo antes
            // ...

            // Redireciona para a página de formas de pagamento
            window.location.href = '/formas-de-pagamento';
        });
    }
});

    // Evento para o ícone de acessibilidade (mesmo das outras páginas)
    accessibilityIcon.addEventListener('click', (event) => {
        event.preventDefault();
        // alert('Funcionalidades de Acessibilidade seriam ativadas aqui!');
         window.location.href = 'http://127.0.0.1:5501/P%C3%A1ginas/acessibilidade.html'; 
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


    // Inicializa os totais quando a página carrega
    updateCartTotals();

});