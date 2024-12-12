//Object entries

const filmes ={
    'Nome' : 'Sociedade da Neve' ,
    'Desc' : 'Lorem' ,
    'Gênero' : 'Drama'
}

console.log(filmes)
console.log(filmes.Nome)
//keys- mretorna os atributos (chave)
const filmesKey = Object.keys(filmes)
console.log(filmesKey)

//entries- retorna em listas os valores (valor)
const filmesEntries= Object.entries(filmes)
console.log(filmesEntries)

//map
const nomesFilmes = ['Matrix','Interestelar','Velozes e furiosos', 'Ilha do medo']

const listaFilmes ={
   'filmes' : [
        {
            'nome' : 'Matrix',
            'Desc' : 'Lorem'
        },
        {
            'nome' : 'Interestelar',
            'Desc' : 'Lorem'
        },
    ],
    'jogos' : [
        {
            'nome' : 'Sniper 3D',
            'Desc' : 'Lorem'
        },
        {
            'nome' : 'Uno',
            'Desc' : 'Lorem'
        },
    ],
}

const resultado = listaFilmes.filmes.map((cadaFilme) => {
    console.log(cadaFilme)
}) 

// const resultado = listaFilmes.filmes.map((cadaFilme) => {
//     document.querySelector('body').innerHTML += `
//          <h3> ${elemento.nome} </h3>
// `
// }) 

// const resultado = lista.jogos.map((elemento) => {
//     console.log(cadaFilme)
// }) 