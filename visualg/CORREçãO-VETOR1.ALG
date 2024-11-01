Algoritmo "Correção-Vetor1"


Var

nomeProduto: vetor[1..3] de caractere
valorProduto: vetor[1..3] de real
i: inteiro
valorTotal, media:real

Inicio

para  i de 1 ate 3 faca
   escreval("Digite o produto", i, ":")
   leia(nomeProduto[i])
   
   escreval ("Valor do Produto ",nomeProduto[i], ":R$")
   leia(valorProduto[i])
   limpaTela()

    valorTotal<- valorTotal + valorProduto[i]

fimPara

media<- valorTotal/3

escreval("-------------")
escreval("----Lojinha----")
escreval()
escreval(" O Valor Total é de: R$ ", valorTotal)
escreval()
escreval(" Média dos produtos: R$ ", media:2:2)
escreval()

para i de 1 ate 3 faca
   escreval(i, "º - ",nomeProduto[i], "R$", valorProduto[1])
   
fimPara

escreval("-------------")
   


Fimalgoritmo