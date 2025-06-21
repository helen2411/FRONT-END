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

    // Exemplo de evento para o ícone de acessibilidade (apenas um alerta simples)
    const accessibilityIcon = document.querySelector('.accessibility-icon');
    accessibilityIcon.addEventListener('click', (event) => {
        event.preventDefault(); // Impede o comportamento padrão de link
        alert('Funcionalidades de Acessibilidade seriam ativadas aqui!');
        // Poderia abrir um modal de acessibilidade, mudar contraste, etc.
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
    document.querySelector('.register-link').addEventListener('click', (event) => {
        event.preventDefault();
        alert('Redirecionando para a página de Cadastro!');
        // window.location.href = 'register.html';
    });
});