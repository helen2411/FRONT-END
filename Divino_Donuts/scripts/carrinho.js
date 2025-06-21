document.addEventListener('DOMContentLoaded', () => {
    // Referências aos elementos HTML
    const subtotalValueElement = document.getElementById('subtotal-value');
    const deliveryValueElement = document.getElementById('delivery-value');
    const totalValueElement = document.getElementById('total-value');
    const cartItems = document.querySelectorAll('.cart-item');
    const checkoutButton = document.querySelector('.checkout-button');
    const accessibilityIcon = document.querySelector('.accessibility-icon');
    const menuToggle = document.querySelector('.menu-toggle');

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

    // Inicializa os totais quando a página carrega
    updateCartTotals();
});