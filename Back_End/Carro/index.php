<?php 
    include('db/conexao.php')
?>


<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> Concessionária </title>
    <link rel="stylesheet" href="style/index.css">
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
                include("pages/listaCarros/listaCarros.php");
                break;
            case 'adicionarCarro':
                include("pages/listaCarros/adicionarCarro.php");
                break;
            case 'dbAdicionarCarro':
                include("pages/listaCarros/dbAdicionarCarro.php");
                break;
            default:
                include("pages/Home/home.php");
                break;
         }
               
        ?>
    </main>
</body>
</html>