//Crud
//Create- Criar 
//Read- Ler
//Update-Atualizar
//De lete-Deletar

//site com os possíveis erros de código: https://http.cat

document.querySelector('#logar').addEventListener('click',logar)

function logar(){
    // alert('')
    let nome_digitado = document.querySelector ('#nome').value
    let nome_salvo = ''
    let senha_digitada = document.querySelector ('#senha').value
    let senha_salva = ''
    let login = false


fetch('dados.json').then((response) => {
    return response.json()
   
}).then((dados) => {
    dados.usuarios.map((informacoes) => {
        nome_salvo=informacoes.nome
        senha_salva=informacoes.senha

        if(nome_digitado == nome_salvo && senha_digitada == senha_salva){
            login = true
        }

        if(login){
            alert('Login Efetuado')
            localStorage.setItem('nome', nome_digitado)

            window.location = './home.html'
        }else{
            document.querySelector("#resposta").innerHTML= "Usuário e Senha incorreto"
        }


    })
})

}

