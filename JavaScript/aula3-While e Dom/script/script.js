//DOM
//Url-Location
//"Botão de voltar"-History
//"Site/Conteúdo"-Document

// window.location.reload()- deixa a pág em carregamento infinito
// window.location= "https://google.com"-sobrepõe a url de origem

//document-documento
//getElementById-busca o sujeito pelo id
//inner..- coloca o elemento dentro
//se innerText-apenas texto
//se innerHtml- texto e código`
//crase=`` concatena strings

document.getElementById('catalogo').innerHTML = '<h3>Olá</h3>'
document.querySelector('#catalogo').innerHTML = 'Oi'

function registrarNome(){
    nome = document.querySelector('#inputNome').value
    // alert ('O seu nome é '+nome)
    document.querySelector('#catalogo').innerHTML=`
    <div id="nomeDiv">
        Eu ${nome} estou aprendendo a programar!
    </div>
    `
}