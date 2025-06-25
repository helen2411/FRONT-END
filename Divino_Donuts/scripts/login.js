document.addEventListener('DOMContentLoaded', () => {
    // Exemplo de como você pode adicionar um evento ao botão de login
    const loginForm = document.querySelector('.login-form');
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Impede o envio padrão do formulário

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        console.log('Tentativa de Login:');
        console.log('Email:', email);
        console.log('Senha:', password);

        // Aqui você adicionaria a lógica real de autenticação (ex: enviar para um servidor)
        if (email && password) {
            alert('Login simulado realizado com sucesso! (Verifique o console para os dados)');
            // window.location.href = 'dashboard.html'; // Redirecionar após o login
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    });

    // Botão Login

     // Seleciona o botão pelo seu ID
        const loginButton = document.getElementById('loginButton');

        // Adiciona um ouvinte de evento para 'click'
        loginButton.addEventListener('click', function() {
            // Redireciona para a página 'dashboard.html'
            // Substitua 'dashboard.html' pela URL da sua página de destino
            window.location.href = 'http://127.0.0.1:5500/P%C3%A1ginas/home.html';
            // Ou para uma URL externa: window.location.href = 'https://www.seusite.com/dashboard';
        });

    // Exemplo de evento para o ícone de acessibilidade (apenas um alerta simples)
    const accessibilityIcon = document.querySelector('.accessibility-icon');
    accessibilityIcon.addEventListener('click', (event) => {
        event.preventDefault(); // Impede o comportamento padrão de link
        // alert('Funcionalidades de Acessibilidade seriam ativadas aqui!');
         window.location.href = 'http://127.0.0.1:5501/P%C3%A1ginas/acessibilidade.html'; // Substitua 'accessibility.html' pelo nome real da sua página
       
    });

    // Exemplo para botões sociais (apenas logs)
    document.querySelectorAll('.social-icon').forEach(icon => {
        icon.addEventListener('click', (event) => {
            event.preventDefault();
            console.log(`Login com ${icon.classList[1]} clicado!`);
            // Aqui você integraria com SDKs de login social
        });
    });

    // Exemplo para o link de cadastro
    document.querySelector('C:\Users\helen\AppData\Local\GitHubDesktop\app-3.4.1\FRONT-END\Divino_Donuts\Páginas\cadastro.html').addEventListener('click', (event) => {
        event.preventDefault();
        alert('Redirecionando para a página de Cadastro!');
        // window.location.href = 'register.html';
    });
});