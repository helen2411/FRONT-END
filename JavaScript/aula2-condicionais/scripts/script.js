function explicacao1(){

   //SE CONDICAO / SENAO

    escolha=confirm('Deseja rodar true ou false?')
    alert(escolha)

   if (escolha){

         alert('Você escolheu true')
        // console.log('FIZ O SE')

   }else{

         alert('Você escolheu false')
        // console.log('SENAO')
   }
}

function explicacao2(){
    alert('Seja Bem Vindo a Loja')
    escolha = prompt('A) Bolo no Pote : R$10, B)Açai: R$ 20, C)Torta: R$ 15')

    switch(escolha){
        case 'A': 
            alert('Você escolheu bolo no pote')
            break

        case 'B': 
            alert('Você escolheu açai')
            break

        case 'C': 
            alert('Você escolheu torta')
            break
    }
}

function explicacao3(){
    // idade = parseInt(somente numeros inteiros)  
    idade = Number(prompt('Digite a sua idade: '))

    if(idade >= 18){
        alert('Seja bem vindo(a) ao Website')
        // Document-Documento Html
        // Queryselector- Buscador
        //Innerhtml-Dentro do elemento
        document.querySelector('body').innerHTML= "Logado com sucesso!"
    }else{
        alert('Idade inválida!')
        // Window-Janela
        //Location-"URL"
        window.location = 'https://www.google.com'
    }
}