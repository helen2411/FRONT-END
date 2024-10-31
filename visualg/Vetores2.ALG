Algoritmo "semnome"


Var

numeros:vetor[1..5] de inteiro
i: inteiro


Inicio

 para i de 1 ate 5 faca
        escreval("Digite o ", i,"º número")
        leia(numeros[i])
        limpaTela
 fimPara
 
 escreval("Ordem inversa dos números:")
 
    para i de 5 ate 1 passo -1 faca
        escreval(numeros[i], " ")
    fimpara


Fimalgoritmo