<?php 
    $idade = $_REQUEST['idade'];

    if($idade >= 18){
        echo "Está permitido";
    }else{
        echo "Não permitido";
    }
?>