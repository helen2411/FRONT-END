<?php 

//defende de comandos para o drop database
$titulo= mysqli_real_escape_string($conexao,$_POST['titulo']);
$descricao= mysqli_real_escape_string($conexao,$_POST['descricao']);
$receitatexto= mysqli_real_escape_string($conexao,$_POST['receitatexto']);
$autor= mysqli_real_escape_string($conexao,$_POST['autor']);
$tipo_receita= mysqli_real_escape_string($conexao,$_POST['tipo_receita']);
$imagem_url= mysqli_real_escape_string($conexao,$_POST['imagem_url']);

$sql = "INSERT INTO receitas (
    titulo,
    descricao,
    receitatexto,
    autor,
    tipo_receita,
    imagem_url

) VALUES (
    '{$titulo}',
    '{$descricao}',
    '{$receitatexto}',
    '{$autor}',
    '{$tipo_receita}',
    '{$imagem_url}'
)";

mysqli_query($conexao,$sql) or die("Erro ao adicionar receita".mysqli_error(($conexao)));

echo "A receita {$titulo} foi adicionada com sucesso!";
?>