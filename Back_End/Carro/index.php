<?php 
    include('db/conexao.php')
?>


<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> Carros </title>
    <link rel="stylesheet" href="style/index.css">
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
                include("pages/listaCarros/listaCarros.php");
                break;
            case 'adicionarCarro':
                include("pages/listaCarros/adicionarCarro.php");
                break;
            case 'dbAdicionarCarro':
                include("pages/listaCarros/dbAdicionarCarro.php");
                break;
            case 'editarCarro':
                include("pages/listaCarros/editarCarro.php");
                break;
            case 'dbEditarCarro':
                include("pages/listaCarros/dbEditarCarro.php");
                break;
            default:
                include("pages/Home/home.php");
                break;
         }
               
        ?>
    </main>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/js/bootstrap.bundle.min.js" integrity="sha384-k6d4wzSIapyDyv1kpU366/PK5hCdSbCRGRCMv+eplOQJWyd1fbcAu9OCUj5zNLiq" crossorigin="anonymous"></script>
</body>
</html>