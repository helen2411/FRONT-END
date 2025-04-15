<?php 
    include('db/conexao.php')
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> Cantinho do sabor </title>
    <link rel="stylesheet" href="style/estilo.css">
</head>
<body>
    <header>
        <nav>
            <a href="index.php?menu=home">Home</a>
            <a href="index.php?menu=lista">Lista</a>
        </nav>
    </header>
    
    <main>
        <?php
        if(isset($_GET['menu'])){
            $pagina = $_GET['menu'];
        }else{
            $pagina = "home";
        }    

       switch($pagina){
            case 'home':
                include("pages/Home/home.php");
                break;
            case 'lista':
                include("pages/listaReceitas/listaReceitas.php");
                break;
            case 'adicionarReceita':
                include("pages/listaReceitas/adicionarReceita.php");
                break;
            case 'dbAdicionarLivro':
                include("pages/listaReceitas/dbAdicionarReceita.php");
                break;
            default:
                include("pages/Home/home.php");
                break;
         }
               
        ?>
    </main>
</body>
</html>