<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP Introdução</title>
</head>
<body>

    <h1> Hello World!</h1>
    
    <!-- <script langage="php"></script> -->
    
    <?php

    // Imprimir na tela
    //Comandos não são case sensitive somente as variáveis
        echo " Helen Laís <br>" ;
        echo "Aprendendo PHP";
    
    //Variável

        $palavra= "PHP";
        $PALAVRA= "Teste";
        echo $palavra;
        echo $PALAVRA;

    // Comando para mostrar todas informações do seu servidor só deve ser usado a quesito de testes
        // phpinfo();


    // imprimir
        echo date("d/m/y");
        echo "Todos os direitos reservados @".date("Y");
        echo "<br>";
    // retorna localização e horário do local escolhido 
        date_default_timezone_set("America/Sao_Paulo");
        echo date_default_timezone_get();
        echo date("G:i:s T")
    ?>

    
</body>
</html>