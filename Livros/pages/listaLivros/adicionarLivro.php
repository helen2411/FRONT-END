<h1>Adicionar um novo Livro</h1>

<form action="index.php?menu=dbAdicionarLivro" method="post">
    <div class="form-group">
        <label for="modelo">Nome:</label>
        <input type="text" id="modelo" name="modelo">
    </div>
    <div class="form-group">
        <label for="valor">Descrição:</label>
        <input type="number" id="valor" name="valor">
    </div>
    <div class="form-group">
        <label for="modelo">Avaliacao:</label>
        <input type="date" id="ano" name="ano">
    </div>
    <button type="submit">Cadastrar</button>
</form>