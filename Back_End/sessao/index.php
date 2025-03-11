<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <a href="teste.php">2</a>

    <?php 
        $nome = "Helen";
        //iniciando uma sessão
        session_start();
        $_SESSION['nome'] = $nome;

        //para testar se uma informação foi salva
        var_dump($_SESSION['nome']);

        $_SESSION['produto'] = [
            'nome' => 'Coca Cola',
            'valor' => 12.00
        ]
    ?>
    
</body>
</html>