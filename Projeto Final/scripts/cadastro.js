// Seu JavaScript
// Selecionando os elementos pelo ID
const inputNome = document.getElementById('nome');
const inputDatadeNascimento = document.getElementById('nascimento');
const inputEndereço = document.getElementById('endereco');
const inputCep = document.getElementById('cep');
const inputCidade = document.getElementById('cidade');
const inputNúmerodeTelefone = document.getElementById('telefone');
const inputEmail = document.getElementById('email');
const inputSenha = document.getElementById('senha');

const button=document.getElementById('cadastrar')

const cadastroForm=document.getElementById('cadastro')

// Acessando o valor dos inputs
console.log('Nome', inputNome.value);
console.log('Data de nascimento', inputDatadeNascimento.value);
console.log('Endereço', inputEndereço.value);
console.log('Cep', inputCep.value);
console.log('Cidade', inputCidade.value);
console.log('Número de Telefone', inputNúmerodeTelefone.value);
console.log('Email', inputEmail.value);
console.log('Senha', inputSenha.value);



// Adicionando um evento de mudança
inputNome.addEventListener('change', () => {
  console.log('Novo valor do nome:', inputNome.value);
});

inputDatadeNascimento.addEventListener('change', () => {
    console.log('Novo valor da data de Nascimento:', inputDatadeNascimento.value);
  });

inputEndereço.addEventListener('change', () => {
    console.log('Novo valor do Endereço:', inputEndereço.value);
  });

inputCep.addEventListener('change', () => {
    console.log('Novo valor do Cep:', inputCep.value);
  });

inputCidade.addEventListener('change', () => {
    console.log('Novo valor da Cidade:', inputCidade.value);
  });

inputNúmerodeTelefone.addEventListener('change', () => {
    console.log('Novo valor do numero de Telefone:', inputNúmerodeTelefone.value);
  });

inputEmail.addEventListener('change', () => {
    console.log('Novo valor do email:', inputEmail.value);
  });

inputSenha.addEventListener('change', () => {
    console.log('Novo valor da senha:', inputSenha.value);
  });

  cadastroForm.addEventListener("submit", (evento) => {
    evento.preventDefault()
    alert('Dados Cadastrados com Sucesso!')
    window.location = '../pages/sobreNos.html' 
  })
  

// button.addEventListener('click', () => {
//     alert('Dados Cadastrados com Sucesso!')
//   });