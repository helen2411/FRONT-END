api = "https://pokeapi.co/api/v2/";
endpoint= "pokemon?limit=200";

consulta = api + endpoint;

//  lista pokemons
fetch(consulta).then((resposta) => resposta.json()).then((dados) =>{
    // {console.log(dados); 
    dados.results.map((infoPokemon) => {
        // console.log(infoPokemon);
        // listar informações de cada poKemon
        fetch(infoPokemon.url).then((resposta) => resposta.json()).then((dadosDeCadaPoke)=>{
            console.log(dadosDeCadaPoke);
            document.querySelector("#pokemons").innerHTML += `
                <div class="pokemon card d-flex align-items-center">
                <img src="${dadosDeCadaPoke.sprites.front_default}"
                    <h4>${dadosDeCadaPoke.name}</h4>
                </div>
            `;
        })

    })
})

// fetch(consulta).then((resposta) => {
//     console.log(resposta);
// })