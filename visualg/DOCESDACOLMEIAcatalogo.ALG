Algoritmo "DocesDaColmeia"

//Compra por quilo- Bolo
//Desconto (Desconto por situação)
//Quantidade de Unidades- Docinho


Var

opcao :  caractere
valorTotal : real


//Inicio adicionar ao carrinho

procedimento  adicionarAoCarrinho(vp:real)

   VAR
   
      nomep:caractere

   INICIO
   
       escreval("Digite o nome do produto:")
       leia(nomep)
       escreval("Item adicionado!")
       valorTotal <- valorTotal + vp
       escreval("Valor total do carrinho R$:", valorTotal)

fimprocedimento

//Fim adicionar ao Carrinho

Inicio

escreval("~~~~~~~catalogo~~~~~~~")
escreval("1- Trufas.............R$ 8,00")
escreval("2- Bolo no Pote.......R$ 10,00")
escreval("3- Copo da felicidade.R$ 15,00")
escreval("4- Docinho............R$ 3,00")
escreval("5- Pudim..............R$ 25,00")
escreval("6- Cancelar")
escreval("7- Carrinho")

leia(opcao)

//switch / case

escolha(opcao)

   caso "1"
   
       adicionarAoCarrinho(8)
     
   caso "2"

       adicionarAoCarrinho(10)
     
   caso "3"
   
       adicionarAoCarrinho(15)

   caso "4"

       adicionarAoCarrinho(3)
     
   caso "5"
   
       adicionarAoCarrinho(25)

   caso "6"
      escreval( "Compra cancelada!")

   outrocaso
     escreval("Opção Inválida")
      

fimEscolha


Fimalgoritmo