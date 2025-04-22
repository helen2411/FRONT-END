<?php
    $id= $_GET['id'];

    echo "Essa é a receita de n° $id ";

    $sql="SELECT*FROM receitas WHERE id={$id}";

    $query=mysqli_query($conexao,$sql) or die("erro ao efetuar a consulta".mysqli_error($conexao));

    $dados=mysqli_fetch_assoc($query);
?>

<h1> Editar Receitas</h1>

<form action="index.php?menu=dbEditarReceita" method="post">
    <div class="form-group">
        <label for="id">N° Receita:</label>
        <input desabled value="<?=$dados['id']?>" type="number" id="id" name="id">
    </div>
    <div class="form-group">
        <label for="titulo">Titulo:</label>
        <input value="<?=$dados['titulo']?>" type="text" id="titulo" name="titulo">
    </div>
    <div class="form-group">
        <label for="descricao">Descrição:</label>
        <input value="<?=$dados['descricao']?>" type="text" id="descricao" name="descricao">
    </div>
    <div class="form-group">
        <label for="receitatexto">Receita:</label>
        <input value="<?=$dados['receitatexto']?>" type="longtext" id="receitatexto" name="receitatexto">
    </div>
    <div class="form-group">
        <label for="autor">Autor:</label>
        <input value="<?=$dados['autor']?>" type="text" id="autor" name="autor">
    </div>
    <div class="form-group">
        <label for="tipo_receita">Tipo:</label>
        <input value="<?=$dados['tipo_receita']?>" type="text" id="tipo_receita" name="tipo_receita">
    </div>
    <div class="form-group">
        <label for="imagem_url">Imagem:</label>
        <input value="<?=$dados['imagem_url']?>" type="url" id="imagem_url" name="imagem_url">
    </div>
    <button type="submit">Editar</button>
</form>