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
        ['images/livros/operegrino.jpg','O peregrino', 'O peregrino é uma narrativa cheia de emoção e suspense. Bunyan relata a viagem de Cristão, um peregrino espiritualmente abatido que viaja rumo à Cidade Celestial. No decorrer da aventura, ele se encontra com personagens de carne e osso, mas que possuem nomes alegóricos, tais como Evangelista, Adulação, Malícia, Apoliom e Vigilância. Passa por lugares sombrios e medonhos, como o Desfiladeiro do Desespero, o Pântano da Desconfiança, a Feira das Vaidades e o Rio da Morte. Surge em cada encruzilhada um novo desafio que ameaça sua chegada ao destino final. O enredo mescla-se à interpretação simbólica, e o resultado é uma incrível experiência literária e espiritual.'],
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
                  <p>${cadaLivro[2]}</p>
    
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

