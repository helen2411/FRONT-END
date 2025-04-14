<h1>Adicionar um novo Carro</h1>

<form action="index.php?menu=dbAdicionarCarro" method="post">
    <div class="form-group">
        <label for="modelo">Modelo:</label>
        <input type="text" id="modelo" name="modelo">
    </div>
    <div class="form-group">
        <label for="marca">Marca:</label>
        <input type="text" id="marca" name="marca">
    </div>
    <div class="form-group">
        <label for="valor">Valor:</label>
        <input type="number" id="valor" name="valor">
    </div>
    <div class="form-group">
        <label for="modelo">Ano:</label>
        <input type="date" id="ano" name="ano">
    </div>
    <div class="form-group">
        <label for="modelo">Cor:</label>
        <input type="text" id="cor" name="cor">
    </div>
    <button type="submit">Cadastrar</button>
</form>