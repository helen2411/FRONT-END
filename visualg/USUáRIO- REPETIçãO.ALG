Algoritmo "usuário- repetição"

Var

usuarioC, senhaC,usuario, senha,login:caractere

Inicio

usuarioC <- "adm"
senhaC <- "senha123"


//while

enquanto (login = "") faca
   escreval("Digite usuario :" )
   leia (usuario)
   escreval("Digite senha:")
   leia (senha)
   limpaTela()

//controller

se(senha=senhaC) e (usuario=usuarioC) entao
  login <- "correto"
//interrompa- break

fimSe
fimEnquanto

escreval("Login efetuado com Sucesso!")

Fimalgoritmo