Algoritmo "Corre��o time"



Var

time1, time2:caractere
golsTime1, golsTime2: inteiro

Inicio

//entrada=nome dos 2 times e gols
//processamento= comparar o n�mero de gols, se a quantidade for igual
//sa�da= escrever nome do vencedor ou empate caso haja

escreval("----Brasileir�o----")
escreval("Digite o nome do primeiro time:")
leia(time1)
escreval("Qual a quantidade de gols desse time??")
leia(golsTime1)

limpaTela()

escreval("----Brasileir�o----")
escreval("Digite o nome do segundo time:")
leia(time2)
escreval("Qual a quantidade de gols desse time??")
leia(golsTime2)

se(golsTime1>golsTime2) entao
   escreval("O time",time1,"� vencedor! Saldo de gols", golsTime1)
   
senao
     se(golsTime1<golsTime2) entao
        escreval("O time",time2,"� vencedor! Saldo de gols", golsTime2)
        
limpaTela()

     senao
        escreval("EMPATE!")

  fimSe
fimSe

Fimalgoritmo