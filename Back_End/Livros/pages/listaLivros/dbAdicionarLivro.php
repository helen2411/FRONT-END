<?php 

//defende de comandos para o drop database
$modelo= mysqli_real_escape_string($conexao,$_POST['nome']);
$valor= mysqli_real_escape_string($conexao,$_POST['descricao']);
$ano= mysqli_real_escape_string($conexao,$_POST['avaliacao']);

$sql = "INSERT INTO livros (
    nome,
    descricao,
    avaliacao

) VALUES (
    '{$nome}',
    '{$descricao}',
    '{$avaliacao}'
)";

mysqli_query($conexao,$sql) or die("Erro ao adicionar Livro".mysqli_error(($conexao)));

echo "O Livro {$nome} foi adicionado com sucesso!";
?>