<?php
   session_start();
   
   if (!isset($_SESSION['carrinho'])) {
       $_SESSION['carrinho'] = [];
   }
   
   if (isset($_GET['acao'])) {
       if ($_GET['acao'] == 'adicionar' && isset($_GET['produto'])) {
           $produto = $_GET['produto'];
           $_SESSION['carrinho'][] = $produto;
       } elseif ($_GET['acao'] == 'limpar') {
           $_SESSION['carrinho'] = [];
           echo "<p>Carrinho limpo.</p>";
       }
   }
   
   echo "<h2>Carrinho de Compras</h2>";
   if (empty($_SESSION['carrinho'])) {
       echo "<p>Carrinho vazio.</p>";
   } else {
       echo "<ul>";
       foreach ($_SESSION['carrinho'] as $item) {
           echo "<li>$item</li>";
       }
       echo "</ul>";
   }
   
    echo "<a href='carrinho.php?acao=limpar'>Limpar Carrinho</a><br>";
    
    echo "<a href='carrinho.php?acao=adicionar&produto=Notebook'>Adicionar Produto A</a><br>";
    echo "<a href='carrinho.php?acao=adicionar&produto=Produto B'>Adicionar Produto B</a><br>";
    echo "<a href='carrinho.php?acao=adicionar&produto=Produto C'>Adicionar Produto C</a><br>";

    
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

    <a href="carrinho.php?acao=adicionar&produto=Notebook">Adicionar Notebook</a><br>
    <a href="carrinho.php?acao=adicionar&produto=Celular">Adicionar Celular</a><br>
    <a href="carrinho.php?acao=adicionar&produto=Televisão">Adicionar Televisão</a><br>
    <a href="carrinho.php?acao=adicionar&produto=Rádio">Adicionar Rádio</a><br>

  
</body>
</html>

