Algoritmo "login"


Var

senha, senhaC, email, emailC: caractere


Inicio

senhaC <- "4321"
emailC <- "helen@gmail.com"

escreval("Qual � o seu email?")
leia (email)
escreval("Qual � a sua senha?")
leia (senha)

se(senha =senhaC) e (email = emailC)entao
   escreval("Login efetuado com sucesso!")
   
senao
   escreval("Usu�rio ou senha incorretos! Tente novamente")

fimSe



Fimalgoritmo