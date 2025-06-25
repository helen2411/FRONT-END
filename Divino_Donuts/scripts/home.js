document.addEventListener('DOMContentLoaded', () => {
    // Exemplo de evento para o ícone de acessibilidade (mesmo dos anteriores)
    const accessibilityIcon = document.querySelector('.accessibility-icon');
    accessibilityIcon.addEventListener('click', (event) => {
        event.preventDefault();
        // alert('Funcionalidades de Acessibilidade seriam ativadas aqui!');
         window.location.href = 'http://127.0.0.1:5501/P%C3%A1ginas/acessibilidade.html'; // Substitua 'accessibility.html' pelo nome real da sua página
    });

    // Exemplo de evento para os cards de categoria
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', () => {
            const categoryTitle = card.querySelector('.category-title').textContent;
            alert(`Você clicou na categoria: ${categoryTitle}`);
            // Aqui você redirecionaria para uma página de produtos filtrada
            // window.location.href = `produtos.html?categoria=${encodeURIComponent(categoryTitle)}`;
        });
    });

    // Exemplo de evento para os pequenos indicadores (simulando um carrossel ou navegação)
    document.querySelectorAll('.small-indicator').forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            // Remove a classe 'pink' de todos os indicadores
            document.querySelectorAll('.small-indicator').forEach(i => i.classList.remove('pink'));
            // Adiciona 'pink' ao indicador clicado
            indicator.classList.add('pink');
            alert(`Indicador ${index + 1} clicado!`);
            // Aqui você atualizaria o conteúdo do main-content-box, talvez um carrossel
        });
    });

    // Se houver alguma funcionalidade dinâmica para os main-content-box, seria adicionada aqui.
});