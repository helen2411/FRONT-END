<h3>Atualizações</h3>

<?php
    //defende de comandos para o drop database
    $id= mysqli_real_escape_string($conexao,$_POST['id']);
    $titulo= mysqli_real_escape_string($conexao,$_POST['titulo']);
    $descricao=mysqli_real_escape_string($conexao,$_POST['descricao']);
    $receitatexto=mysqli_real_escape_string($conexao,$_POST['receitatexto']);
    $autor= mysqli_real_escape_string($conexao,$_POST['autor']);
    $tipo_receita=mysqli_real_escape_string($conexao,$_POST['tipo_receita']);
    $imagem_url= mysqli_real_escape_string($conexao,$_POST['imagem_url']);
    

    //Update tabela set name= name where id
    $sql= "UPDATE receitas SET 
    titulo='{$titulo}',
    descricao='{$descricao}', 
    receitatexto='{$receitatexto}',
    autor='{$autor}',
    tipo_receita='{$tipo_receita}',
    imagem_url='{$imagem_url}' 
    WHERE id= '{$id}'    
    ";

mysqli_query($conexao,$sql) or die ("Erro  ao atualizar");

echo "As informações foram atualizadas!";
?>