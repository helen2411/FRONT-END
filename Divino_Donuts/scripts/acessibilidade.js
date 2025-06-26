document.addEventListener('DOMContentLoaded', () => {
    const accessibilityButtons = document.querySelectorAll('.option-button');
    const accessibilityIcon = document.querySelector('.accessibility-icon');
    const menuToggle = document.querySelector('.menu-toggle');

    // Evento para cada botão de acessibilidade
    accessibilityButtons.forEach(button => {
        button.addEventListener('click', () => {
            const feature = button.dataset.feature; // Pega o valor do atributo data-feature
            let message = '';

            // Lógica para cada funcionalidade
            switch (feature) {
                case 'libras':
                    message = 'Modo Libras ativado/desativado!';
                    // Aqui você integraria uma biblioteca ou ferramenta de Libras
                    break;
                case 'tamanho-fonte':
                    message = 'Ajustar tamanho da fonte!';
                    // Implementar lógica para aumentar/diminuir font-size no body ou elementos específicos
                    break;
                case 'espacamento-letras':
                    message = 'Ajustar espaçamento de letras!';
                    // Implementar letter-spacing
                    break;
                case 'estilo-letra':
                    message = 'Mudar estilo de letra!';
                    // Implementar font-family
                    break;
                case 'negrito':
                    message = 'Ativar/desativar negrito!';
                    // Implementar font-weight
                    break;
                case 'espacamento-linhas':
                    message = 'Ajustar espaçamento de linhas!';
                    // Implementar line-height
                    break;
                case 'leitor-site':
                    message = 'Leitor de site ativado/desativado!';
                    // Integrar API de texto para fala
                    break;
                case 'modo-escuro-claro':
                    document.body.classList.toggle('dark-mode'); // Exemplo: alterna uma classe no body
                    message = document.body.classList.contains('dark-mode') ? 'Modo Escuro ativado!' : 'Modo Claro ativado!';
                    // Você precisaria de CSS adicional para .dark-mode {}
                    break;
                case 'pausar-animacoes':
                    message = 'Pausar/Reproduzir animações!';
                    // Implementar controle de CSS animations
                    break;
                case 'guia-leitura':
                    message = 'Guia de leitura ativado/desativado!';
                    // Implementar um overlay ou highlight de linha
                    break;
                case 'destaque-links':
                    message = 'Destaque de links ativado/desativado!';
                    // Implementar highlight em <a> tags
                    break;
                case 'estrutura-pagina':
                    message = 'Estrutura da página destacada!';
                    // Implementar outlines para elementos de seção/nav/main
                    break;
                case 'lupa-conteudo':
                    message = 'Lupa de conteúdo ativada/desativada!';
                    // Implementar zoom ou lupa JS
                    break;
                case 'ocultar-imagens':
                    message = 'Imagens ocultas/visíveis!';
                    // Implementar display: none para <img>
                    break;
                case 'destacar-cabecalho':
                    message = 'Cabeçalho destacado/normal!';
                    // Adicionar uma borda ou fundo ao cabeçalho
                    break;
                case 'contraste-cores':
                    message = 'Ajustar contraste de cores!';
                    // Implementar filtros CSS (filter: contrast())
                    break;
                case 'intensidade-cores':
                    message = 'Ajustar intensidade de cores!';
                    // Implementar filtros CSS (filter: saturate())
                    break;
                case 'cores-pagina':
                    message = 'Cores da página alteradas!';
                    // Implementar temas de cores customizados
                    break;
                default:
                    message = `Funcionalidade "${feature}" clicada!`;
            }
            alert(message);
            console.log(message);
        });
    });

    // Evento para o ícone de acessibilidade 
    accessibilityIcon.addEventListener('click', (event) => {
        event.preventDefault();
        // alert('Você já está na página de Acessibilidade!');
        // Se a página de acessibilidade fosse um modal, aqui fecharia/abriria o modal.
         window.location.href = 'http://127.0.0.1:5501/P%C3%A1ginas/acessibilidade.html'; // Substitua 'accessibility.html' pelo nome real da sua página
    });


    // Evento para o botão de menu (no cabeçalho)
    menuToggle.addEventListener('click', () => {
        alert('Menu lateral seria aberto aqui!');
        // Implementar lógica para abrir/fechar um menu lateral (off-canvas)
    });
});