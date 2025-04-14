<h1>Lista de Carros</h1>

<a href="index.php?menu=adicionarCarro">
    <button type="button">Adicionar carro</button>
</a>

<form action="index.php?menu=lista" method="post">
    <input type= "text" name="pesquisa" id="pesquisa">
    <button type="submit">Pesquisar</button>
</form>

<table>
    <tr>
        <th>Modelo</th>
        <th>Marca</th>
        <th>Valor</th>
        <th>Ano</th>
        <th>Cor</th>
    </tr>
    <?php
        if(isset($_POST['pesquisa'])){
            $termoPesquisado=$_POST['pesquisa'];
        }else{
            $termoPesquisado="";
        }


        // $sql ="SELECT * FROM carros";
        $sql ="SELECT idCarro,
        upper(modeloCarro) AS modeloCarro,
        upper(marcaCarro) AS marcaCarro,
        upper(valorCarro) AS valorCarro,
        DATE_FORMAT(anoCarro,'%d/%m/%y') AS anoCarro,
        upper(corCarro) AS corCarro
        FROM carros WHERE
        idCarro='$termoPesquisado' OR
        modeloCarro LIKE '%$termoPesquisado%' 
        ORDER BY modeloCarro  ASC
        ";
        // pedido
        $query = mysqli_query($conexao,$sql) or die("Erro na requisição!".mysqli_error($conexao));

        //fetch_asso = vai acessar um query, e contar os resultados
        while($dados = mysqli_fetch_assoc($query)){
            ?>
                <tr>
                    <td><?= $dados['modeloCarro'] ?></td>
                    <td><?= $dados['marcaCarro'] ?></td>
                    <td><?= $dados['valorCarro'] ?></td>
                    <td><?= $dados['anoCarro'] ?></td>
                    <td><?= $dados['corCarro'] ?></td>
                    <td><a href="index.php?menu=editarCarro&idCarro=<?=$dados['idCarro']?>" class="btn btn-primary">Editar</a></td>
                    <td><a href="index.php?menu=deletarCarro&idCarro=<?=$dados['idCarro']?>" class="btn btn-danger">Deletar</a></td>
                </tr>
            <?php
        }

    ?>

</table>