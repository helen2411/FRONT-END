document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.querySelector('.register-form');
    registerForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Impede o envio padrão do formulário

        // Coleta os valores dos campos
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const address = document.getElementById('address').value;
        const zipcode = document.getElementById('zipcode').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Validação básica (apenas verifica se os campos não estão vazios)
        if (name && phone && address && zipcode && email && password) {
            console.log('Dados de Cadastro:');
            console.log('Nome:', name);
            console.log('Telefone:', phone);
            console.log('Endereço:', address);
            console.log('CEP:', zipcode);
            console.log('Email:', email);
            console.log('Senha:', password);

            alert('Cadastro simulado realizado com sucesso! (Verifique o console para os dados)');
            // Aqui você enviaria os dados para um servidor (API)
            // Ex: fetch('/api/register', { method: 'POST', body: JSON.stringify({ name, email, password, ... }) })
            // Redirecionar após o cadastro (ex: para a página de login ou para o dashboard)
            // window.location.href = 'login.html';
        } else {
            alert('Por favor, preencha todos os campos do formulário.');
        }
    });

    // Evento para o ícone de acessibilidade (mesmo do login)
    const accessibilityIcon = document.querySelector('.accessibility-icon');
    accessibilityIcon.addEventListener('click', (event) => {
        event.preventDefault();
        alert('Funcionalidades de Acessibilidade seriam ativadas aqui!');
    });
});