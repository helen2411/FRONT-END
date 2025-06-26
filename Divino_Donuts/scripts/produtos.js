document.addEventListener('DOMContentLoaded', () => {
    // Evento para o ícone de acessibilidade
    const accessibilityIcon = document.querySelector('.accessibility-icon');
    accessibilityIcon.addEventListener('click', (event) => {
        event.preventDefault();
        // alert('Funcionalidades de Acessibilidade seriam ativadas aqui!');
        // Redireciona o usuário para a página de acessibilidade
        window.location.href = 'http://127.0.0.1:5501/P%C3%A1ginas/acessibilidade.html'; // Substitua 'accessibility.html' pelo nome real da sua página
    });

     // JavaScript para ativar o menu
        const menuToggle = document.querySelector('.menu-toggle');
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

    // Evento para o ícone do carrinho
    const cartIcon = document.querySelector('.cart-icon');
    cartIcon.addEventListener('click', (event) => {
        event.preventDefault();
        // alert('Redirecionando para a página do Carrinho!');
        // window.location.href = 'cart.html'; // Se tiver uma página de carrinho
        window.location.href = 'http://127.0.0.1:5501/P%C3%A1ginas/carrinho.html'; 
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

