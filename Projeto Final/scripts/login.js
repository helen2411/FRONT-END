
// Selecionando os elementos pelo ID
const inputEmail = document.getElementById('usuario');
const inputSenha = document.getElementById('senha');
const button=document.getElementById('logar')
const loginForm=document.getElementById('login')


// Acessando o valor dos inputs
console.log('Usuário:', inputEmail.value);
console.log('Senha:', inputSenha.value);

// Adicionando um evento de mudança
inputEmail.addEventListener('change', () => {
  console.log('Novo valor do e-mail:', inputEmail.value);
});

inputSenha.addEventListener('change', () => {
  console.log('Novo valor da senha:', inputSenha.value);
});


loginForm.addEventListener("submit", (evento) => {
  evento.preventDefault()
  alert('Login Efetuado!')
  window.location = '../Páginas/produtos.html' 
})