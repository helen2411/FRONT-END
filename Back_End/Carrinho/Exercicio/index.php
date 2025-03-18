<?php

//Inícia sessão
    session_start();

//verifica se algo está null

    if(!isset($_SESSION['carrinho'])){
        $_SESSION['carrinho']=[];
    }

// Adicionar produto
    if(isset($_GET['produto'])){
        // nomevariavel[][indicevazio]=Produto -> Pode ser adicionado , substitui +=
        $_SESSION['carrinho'][] = $_GET['produto'];    
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

    <a href="?produto= Notebook "><img src="images/notebook.jpg" alt="Notebook"  width="200" height="150"><br>Adicionar Notebook</a> <br>
    <a href="?produto= Celular "><img src="images/celular.jpg" alt="Celular"  width="200" height="150"><br>Adicionar Celular</a> <br>
    <a href="?produto= Tablet "><img src="images/tablet.jpg" alt="Tablet"  width="200" height="150"><br>Adicionar Tablet</a> <br>
    <a href="?produto= Rádio "><img src="images/radio.jpg" alt="Rádio"  width="200" height="150"><br>Adicionar Rádio</a> <br>
    
    <!-- Deletar -->
    <!-- <a href="?deletarCarrinho= True ">Deletar  Carrinho</a> <br> -->

    <ol>
    <?php 

        //foreah(array as alias){ }
        // foreach(filmes as silme) {filme.nome, filme.desc }
        foreach($_SESSION['carrinho'] as $produto){
            echo "<li> $produto </li>";
        }
    
    ?>
    </ol>

    <a href="?deletarCarrinho=True" class="delete-button">Limpar Carrinho</a>
    
    <!-- ul lista não numerada 
     ol lista numerada -->
     </div>
</body>
</html>