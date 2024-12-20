// Seleciona todos os links do menu
const links = document.querySelectorAll('nav ul li a');

// Adiciona um evento de clique a cada link
links.forEach(link => {
  link.addEventListener('click', () => {
    // Remove a classe 'active' de todos os links
    links.forEach(link => link.classList.remove('active'));

    // Adiciona a classe 'active' ao link clicado
    link.classList.add('active');
  });
});