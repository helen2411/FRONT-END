<?php
    $id= $_GET['idCarro'];

    echo "Esse é o carro de n° $id ";

    $sql="SELECT*FROM carros WHERE idCarro={$id}";

    $query=mysqli_query($conexao,$sql) or die("erro ao executar a consulta".mysqli_error($conexao));

    $dados=mysqli_fetch_assoc($query);
?>

<h1> Editar informações do Carro</h1>

<form action="index.php?menu=dbEditarCarro" method="post">
    <div class="form-group">
        <label for="id">N°:</label>
        <input desabled value="<?=$dados['idCarro']?>" type="number" id="idCarro" name="idCarro">
    </div>
    <div class="form-group">
        <label for="modelo">Modelo:</label>
        <input value="<?=$dados['modeloCarro']?>" type="text" id="modelo" name="modelo">
    </div>
    <div class="form-group">
        <label for="marca">Marca:</label>
        <input value="<?=$dados['marcaCarro']?>" type="text" id="marca" name="marca">
    </div>
    <div class="form-group">
        <label for="valor">Valor:</label>
        <input value="<?=$dados['valorCarro']?>" type="number" id="valor" name="valor">
    </div>
    <div class="form-group">
        <label for="modelo">Ano:</label>
        <input value="<?=$dados['anoCarro']?>" type="date" id="ano" name="ano">
    </div>
    <div class="form-group">
        <label for="modelo">Cor:</label>
        <input value="<?=$dados['corCarro']?>" type="color" id="cor" name="cor">
    </div>
    <button type="submit">Editar</button>
</form>