<?php 
    include('db/conexao.php')
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> Cantinho do sabor </title>
    <link rel="stylesheet" href="estilo.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-SgOJa3DmI69IUzQ2PVdRZhwQ+dy64/BUtbMJw1MZ8t5HZApcHrRKUc4W0kG879m7" crossorigin="anonymous">
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
            case 'dbAdicionarReceita':
                include("pages/listaReceitas/dbAdicionarReceita.php");
                break;
            case 'editarReceita':
                include("pages/listaReceitas/editarReceita.php");
                break;    
            case 'dbEditarReceita':
                include("pages/listaReceitas/dbEditarReceita.php");
                break;    
            case 'deletarReceita':
                include("pages/listaReceitas/deletarReceita.php");
                break;          
            default:
                include("pages/Home/home.php");
                break;
         }
               
        ?>
    </main>
</body>
</html>