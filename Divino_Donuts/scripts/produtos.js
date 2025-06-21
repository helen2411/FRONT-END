document.addEventListener('DOMContentLoaded', () => {
    // Evento para o ícone de acessibilidade
    const accessibilityIcon = document.querySelector('.accessibility-icon');
    accessibilityIcon.addEventListener('click', (event) => {
        event.preventDefault();
        alert('Funcionalidades de Acessibilidade seriam ativadas aqui!');
    });

    // Evento para o botão de menu (apenas um placeholder)
    const menuToggle = document.querySelector('.menu-toggle');
    menuToggle.addEventListener('click', () => {
        alert('Menu lateral seria aberto aqui!');
        // Implementar lógica para abrir/fechar um menu lateral (off-canvas)
    });

    // Evento para o ícone do carrinho
    const cartIcon = document.querySelector('.cart-icon');
    cartIcon.addEventListener('click', (event) => {
        event.preventDefault();
        alert('Redirecionando para a página do Carrinho!');
        // window.location.href = 'cart.html'; // Se tiver uma página de carrinho
    });

    // Evento para a barra de busca (simples log)
    const searchButton = document.querySelector('.search-button');
    const searchInput = document.querySelector('.search-bar-container input');
    searchButton.addEventListener('click', () => {
        const searchTerm = searchInput.value;
        if (searchTerm) {
            alert(`Buscando por: "${searchTerm}"`);
            console.log(`Buscando produtos por: ${searchTerm}`);
            // Lógica para filtrar produtos na grade
        } else {
            alert('Por favor, digite algo para buscar.');
        }
    });

    // Evento para os botões de filtro de categoria
    document.querySelectorAll('.filter-button').forEach(button => {
        button.addEventListener('click', () => {
            const category = button.dataset.category; // Pega o valor do atributo data-category
            alert(`Filtrando por categoria: ${category.charAt(0).toUpperCase() + category.slice(1)}`);
            console.log(`Filtrando produtos pela categoria: ${category}`);
            // Lógica para filtrar os produtos visíveis na grade com base na categoria
            // Ex: adicionar/remover classes nos product-card ou recarregar produtos via API
        });
    });

    // Evento para os botões "Adicionar ao Carrinho"
    document.querySelectorAll('.add-to-cart-button').forEach(button => {
        button.addEventListener('click', (event) => {
            event.stopPropagation(); // Impede que o clique no botão ative o clique no card inteiro
            const productCard = button.closest('.product-card');
            // Idealmente, você teria um ID ou nome do produto no HTML para identificá-lo
            const productId = productCard.dataset.productId || 'Produto Desconhecido';
            alert(`"${productId}" adicionado ao carrinho!`);
            console.log(`Produto ${productId} adicionado ao carrinho.`);
            // Lógica para adicionar o produto ao carrinho (pode ser no localStorage, ou via API)
        });
    });

    // Evento para o clique no card do produto (para ver detalhes)
    document.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('click', () => {
            const productId = card.dataset.productId || 'Produto Detalhes';
            alert(`Abrir detalhes do ${productId}`);
            // window.location.href = `product-details.html?id=${productId}`;
        });
    });
});
