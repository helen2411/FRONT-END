<?php 
    include("config.php");

    //mysqli_con= conecta o projeto com o banco
    $conexao= mysqli_connect(Servidor,Usuario,Senha,Banco) or die("Erro de conexão com o serviço!".mysqli_connect_error());
?>