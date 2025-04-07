<h1>Lista de Livros</h1>

<a href="index.php?menu=adicionarLivro">
    <button type="button">Adicionar Livro</button>
</a>

    <?php
        $sql ="SELECT * FROM livros";
        // pedido
        $query = mysqli_query($conexao,$sql) or die("Erro na requisição!".mysqli_error($conexao));

        //fetch_asso = vai acessar um query, e contar os resultados
        while($dados = mysqli_fetch_assoc($query)){
            ?>
        <div>
                    <img src="<?= $dados['imagem'] ?>" alt="">
                    <p><?= $dados['nome'] ?></p>
                    <p><?= $dados['descricao'] ?></p>
                    <p><?= $dados['avaliacao'] ?></p>
        </div>
            <?php
        }

    ?>

