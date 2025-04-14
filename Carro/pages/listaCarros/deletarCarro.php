<h1>Deletar carro</h1>

<?php
$id=$_GET['idCarro'];

$sql="DELETE FROM carros WHERE idCarro='$id'";

$query=mysqli_query($conexao,$sql) or die("Erro ao deletar".mysqli_error($conexao));

echo"O carro foi deletado com sucesso!";

?>