function testes(){
    //enquanto condicao fac
    //para de x ate y faca

    contador = 0
    
    // while (contador < 3){
    //     alert(`Item adicionado' fiz ${contador+1} vezes`)
    //     contador++ }

    for(var i=0;i < 3; i++){
        alert(`Item Adicionado!' ${i+1} `)
    }
}

// testes()

function carregarcatalogo(){
    for (let i = 0; i < 4;i++){
        document.getElementById('catalogo').innerHTML += `
        <div class="livro">

                <img src="images/livros/operegrino.jpg" alt="">
                <h4>O peregrino</h4>

                <button>
                    Adicionar
                    <img src="images/icons/plus.svg" alt="">
                </button>
            </div>

        `
    }
}

carregarcatalogo()

