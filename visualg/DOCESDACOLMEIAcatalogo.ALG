Algoritmo "DocesDaColmeia"

//Compra por quilo- Bolo
//Desconto (Desconto por situação)
//Quantidade de Unidades- Docinho


Var

opcao :  caractere
valorTotal : real


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
     escreval("Item TRUFA adicionado!")
     valorTotal <- valorTotal + 8
     escreval("Valor total do carrinho R$:", valorTotal)
     
   caso "2"
     escreval("Item BOLO NO POTE adicionado!")
     valorTotal <- valorTotal + 10
     escreval("Valor total do carrinho R$:", valorTotal)
     
   caso "3"
     escreval("Item COPO DA FELICIDADE adicionado!")
     valorTotal <- valorTotal + 15
     escreval("Valor total do carrinho R$:", valorTotal)
     
   caso "4"
     escreval("Item DOCINHO adicionado!")
     valorTotal <- valorTotal + 3
     escreval("Valor total do carrinho R$:", valorTotal)
     
   caso "5"
     escreval("Item PUDIM adicionado!")
     valorTotal <- valorTotal + 25
     escreval("Valor total do carrinho R$:", valorTotal)
     
   caso "6"
      escreval("Compra cancelada!")
     

fimEscolha


Fimalgoritmo