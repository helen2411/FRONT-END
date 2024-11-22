filmes= ['A paixão de Cristo','As Crônicas de Nárnia','Paulo Apóstolo de Cristo','Deus não Está Morto','Matrix','Os batutinhas']

for(var i=0; i< filmes.length;i++){
    document.getElementById('resposta').
    innerHTML += `
    ${filmes[i]} <br>
    `
}