<h1>Lista Receitas</h1>

<a href="index.php?menu=adicionarReceita">
    <button type="button">Adicionar Receita</button>
</a>

<form action="index.php?menu=lista" method="post">
    <input type= "text" name="pesquisa" id="pesquisa">
    <button type="submit">Pesquisar</button>
</form>

<div>
    <!-- <tr>
        <th>Título</th>
        <th>Descrição</th>
        <th>Receita</th>
        <th>Autor</th>        
        <th>Tipo</th>        
        <th>Imagem</th>                 
    </tr> -->


    <?php
        if(isset($_POST['pesquisa'])){
            $termoPesquisado=$_POST['pesquisa'];
        }else{
            $termoPesquisado="";
        }


        // $sql ="SELECT * FROM carros";
        $sql ="SELECT id,
        upper(titulo) AS titulo,
        upper(descricao) AS descricao,
        upper(receitatexto) AS receitatexto,
        upper(autor) AS autor,
        upper(tipo_receita) AS tipo_receita,
        upper(imagem_url) AS imagem_url
        FROM receitas WHERE
        id='$termoPesquisado' OR
        titulo LIKE '%$termoPesquisado%' 
        ORDER BY titulo  ASC
        ";
        // pedido
        $query = mysqli_query($conexao,$sql) or die("Erro na requisição!".mysqli_error($conexao));

        //fetch_asso = vai acessar um query, e contar os resultados
        while($dados = mysqli_fetch_assoc($query)){
            ?>
                <div class="container">
                <img src="<?= $dados['imagem_url']?>" alt="">
                    <p><?= $dados['titulo'] ?></p>
                    <p><?= $dados['descricao'] ?></p>
                    <p><?= $dados['receitatexto'] ?></p>
                    <p><?= $dados['autor'] ?></p>
                    <p><?= $dados['tipo_receita'] ?></p>
                    <td><a href="index.php?menu=editarReceita&id=<?=$dados['id']?>" class="btn btn-primary">Editar</a></td>
                    <td><a href="index.php?menu=deletarReceita&id=<?=$dados['id']?>" class="btn btn-danger">Deletar</a></td>
                </div>
            <?php
        }


    ?>
</div>


