//Promise é uma promessa!
//Resolve - Cumprimos a promessa
//Reject- 'Rejeitamos' a promessa, ou não cumpriu!
//Promisestate - Estado da Promessa!
//Fullfilled - 'Promessa Cumpriida!'
// Rejected - 'Promessa Quebrada!'
//Promiseresult - o motivo do status

const promessa = new Promise((resolve,reject) => {
    let nome='Helen'

    if(nome == 'Helen') {

        //resolve('Usuario é Helen')
        //function alerta(){
            //alert('olá')
        //}
        // resole(alerta())

        resolve({'adm':'Helen'})
    }else{
        reject('O usuário não é Helen!')
    }

})

//Then- espera o resolve e retorna o que o resolve tiver, caso reject acuse um erro
//'Then espera que dê certo'
promessa.then((dadosDoResolve) => {
    console.log(dadosDoResolve)
})

//Catch- espera o reject e retorna o que o reject correspondente tiver, caso resolve ele não executa
//'Catch espera que dê errado!'
promessa.catch((infoDoErro) => {
    console.log(infoDoErro)
})

function sujeitoDemorado(){
    return new Promise((resolve) =>{
        setTimeout(() =>{
            console.log('rodando')
            resolve()
         }, 2000)
    })
}

async function carregandoConteudo(){
    console.log('oi')
    await sujeitoDemorado()
    console.log('Terminei')
}

carregandoConteudo()

