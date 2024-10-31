Algoritmo "Mercadorias"
Var

 nomeProduto: vetor[1..3] de caractere
 valorProduto: vetor[1..3] de real
 i: inteiro
 valorTotal, media: real

Inicio

 para i de 1 ate 3 faca
        escreval("Digite o nome do produto ", i, ": ")
        leia(nomeProduto[i])
        escreval("Digite o valor do produto ", i, ": ")
        leia(valorProduto[i])
        limpaTela()
        valorTotal <- valorTotal + valorProduto[i]

fimpara
 
   media <- valorTotal / 3

    escreval("Valor total: R$", valorTotal)
    escreval("Média do valor das mercadorias: R$", media)


Fimalgoritmo