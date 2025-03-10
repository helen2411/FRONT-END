<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=
    , initial-scale=1.0">
    <title>Document</title>
</head>
<body>

    <form method="post" action="seu_arquivo.php"> <label for="idade">Digite a sua idade:</label>
        <input type="number" name="idade" id="idade">
        <button type="submit">Enviar</button>
    </form>

    <?php 
        include "../scripts/script.php";
    ?>
    
</body>
</html>