<h1>Adicionar Receita</h1>

<form action="index.php?menu=dbAdicionarReceita" method="post">
    <div class="form-group">
        <label for="titulo">Título:</label>
        <input type="text" id="titulo" name="titulo">
    </div>
    <div class="form-group">
        <label for="descricao">Descrição:</label>
        <input type="text" id="descricao" name="descricao">
    </div>
    <div class="form-group">
        <label for="receitatexto">Receita:</label>
        <input type="longtext" id="receitatexto" name="receitatexto">
    </div>
    <div class="form-group">
        <label for="autor">Autor:</label>
        <input type="text" id="autor" name="autor">
    </div>
    <div class="form-group">
        <label for="tipo_receita">Tipo:</label>
        <input type="text" id="tipo_receita" name="tipo_receita">
    </div>
    <div class="form-group">
        <label for="imagem_url">Imagem:</label>
        <input type="url" id="imagem_url" name="imagem_url">
    </div>
    <button type="submit">Cadastrar</button>
</form>