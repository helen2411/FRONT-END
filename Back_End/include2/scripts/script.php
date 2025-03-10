<?php 
         function explicacao3() {
            // Em PHP, não podemos usar prompt() diretamente. Precisamos de um formulário HTML para obter a entrada do usuário.
            if (isset($_POST['idade'])) {
                $idade = intval($_POST['idade']); // Obtém a idade do formulário e converte para inteiro.
        
                if ($idade >= 18) {
                    echo "Seja bem vindo(a) ao Website! Logado com sucesso!";
                    // Em PHP, não podemos manipular o DOM diretamente como no JavaScript.
                    // Para atualizar a página, precisaríamos recarregar ou usar AJAX.
                } else {
                    echo "Idade inválida!";
                    // Em PHP, para redirecionar, usamos header().
                    header("Location: https://www.google.com");
                    exit; // Certifique-se de sair após o redirecionamento.
                }
            } else {
                // Exibe um formulário HTML para inserir a idade.
                echo '<form method="post">';
                echo '<label for="idade">Digite a sua idade:</label>';
                echo '<input type="number" name="idade" id="idade">';
                echo '<button type="submit">Enviar</button>';
                echo '</form>';
            }
        }
        
        explicacao3();
    ?>