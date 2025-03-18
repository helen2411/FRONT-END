<?php

//Inícia sessão
    session_start();

    // Private só pode inserir dentro do class
    //Public pode inserir em qualquer área do código

    class Produto{
        public $id;
        public $nome;
        public $valor;
        public $desc;

    // Toda function deve iniciar com 2 underlines "__"
        public function __construct($id,$nome,$valor,$desc){
            $this->id = $id;
            $this->nome = $nome;
            $this->valor = $valor;
            $this->desc = $desc;
            
        }

    }


//verifica se algo está null

    if(!isset($_SESSION['carrinho'])){
        $_SESSION['carrinho']=[];
    }

// Adicionar produto
    if(isset($_GET['produto'])){
        // nomevariavel[][indicevazio]=Produto -> Pode ser adicionado , substitui +=
        $produtosDados = new Produto($_GET['id'],$_GET['produto'],$_GET['valor'],$_GET['desc']);
        $_SESSION['carrinho'][] = $produtosDados;    
    }

    if(isset($_GET['deletarCarrinho'])){
        // sessioon_destroy();
        $_SESSION['carrinho'] = [];    
    }

    // var_dump($_SESSION['carrinho']);
?>

<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Carrinho de Compra</title>
    <link rel="stylesheet" href="styles/carrinho.css">
</head>

<body>

    <div class="container">

    <h1>Carrinho de Compras</h1>

    <a href="?id=1&produto=Notebook&valor=4.999&desc='Acer Nitro 5 512GB'"><img src="images/notebook.jpg" alt="Notebook"  width="200" height="150"><br>Adicionar Notebook</a> <br>
    <a href="?id=2&produto=Celular&valor=1.300&desc='Redmi Note 12'"><img src="images/celular.jpg" alt="Celular"  width="200" height="150.00"><br>Adicionar Celular</a> <br>
    <a href="?id=3&produto=Tablet&valor=2.500&desc='Tablet Samsung com Caneta'"><img src="images/tablet.jpg" alt="Tablet"  width="200" height="150"><br>Adicionar Tablet</a> <br>
    <a href="?id=4&produto=Rádio&valor=150&desc='Rádio retrô'"><img src="images/radio.jpg" alt="Rádio"  width="200" height="150"><br>Adicionar Rádio</a> <br>
    
    <!-- Deletar -->
    <!-- <a href="?deletarCarrinho= True ">Deletar  Carrinho</a> <br> -->

    <?php
        $valorTotal= 0;

        foreach($_SESSION['carrinho'] as $produto){
            $valorTotal += $produto->valor;
        }
        if($valorTotal == 0){
            echo "O carrinho está vazio";
        }else{
            echo "O valor total é R$ $valorTotal";
        }
     ?>


    <ol>
    <?php 

        //foreah(array as alias){ }
        // foreach(filmes as silme) {filme.nome, filme.desc }
        foreach($_SESSION['carrinho'] as $produto){
            echo "<li> 
                    <h1> $produto->nome</h1> 
                    <p> R$ $produto->valor </p>
                    <p>  $produto->desc </p>
                </li>";
        }
    
    ?>
    </ol>

    <a href="?deletarCarrinho=True" class="delete-button">Limpar Carrinho</a>
    
    <!-- ul lista não numerada 
     ol lista numerada -->
     </div>
</body>
</html>