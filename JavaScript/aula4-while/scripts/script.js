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
    var livros = [
        ['images/livros/operegrino.jpg','O peregrino'],
        ['images/livros/OSenhorDosAneis.jpg','O Senhor dos Anéis'],
        ['images/livros/OHobit.jpg','O Hobbit'],
        ['images/livros/AsCronicasDeNarnia.jpg','As Crônicas de Nárnia'],
        ['images/livros/1984.jpg','1984'],
        ['images/livros/Paulo.jpg','Paulo'],
        ['images/livros/Apocrifos.jpg','Apócrifos Vol 1'],
        ['images/livros/Apiocrifos2.jpg','Apócrifos Vol 2'],
        ['images/livros/Apocrifos3.jpeg','Apócrifos Vol 3']

    ]

    livros.forEach(cadaLivro =>{
        document.getElementById('catalogo').innerHTML += `
            <div class="livro">
    
                   <img src="${cadaLivro[0]}" alt="">
                  <h4>${cadaLivro[1]}</h4>
    
                  <button>
                        Adicionar
                        <img src="images/icons/plus.svg" alt="">
                   </button>
                </div>
    
             `
    })


    // livros (let i = 0; i < 4;i++){
    //     document.getElementById('catalogo').innerHTML += `
    //     <div class="livro">

    //             <img src="" alt="">
    //             <h4></h4>

    //             <button>
    //                 Adicionar
    //                 <img src="images/icons/plus.svg" alt="">
    //             </button>
    //         </div>

    //     `
    // }
}

carregarcatalogo()

