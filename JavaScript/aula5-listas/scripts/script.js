// var fruta1='Melancia'
// var fruta2='Uva'
// var fruta3='Melão'
// var fruta4='Lichia'

// vetor

fruta= ['Melancia','Uva','Lichia','Melão']

//criar ou converter array
teste=Array()
teste[0]= 'Item'
teste[1]='Adicionado'

console.log(fruta)
console.log(fruta[1])

// Push 'empurrar'-adicionar na lista
fruta.push('Morango')
console.log(fruta)

// Unshift- adicionar ao começo da lista
fruta.unshift('Ciriguela')
console.log(fruta)

//Pop- Remove o último
fruta.pop()
console.log(fruta)

//Shift- remove o primeiro
fruta.shift()
console.log(fruta)

//Splice- remove (1), adiciona e atualiza
//Onde??(indice) /Quantos vou deletar??
//Se nenhum o que será adicionado??
fruta.splice(2,1)
fruta.splice(1,0,'Jabuticaba')
fruta.splice(1,1,'Manga')
console.log(fruta)

for(var i=0; i< fruta.length;i++){
    document.getElementById('resposta').
    innerHTML += `
    ${fruta[i]} <br>
    `
}

// fruta.forEach(cadaFruta => {
//     document.getElementById('resposta').
//     innerHTML += `
//     ${cadaFruta} <br>
//     `
// })

