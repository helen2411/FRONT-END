

function dividirConta(numeroClientes, valorTotal) {
   
    // Calcula a divisão da conta
    const valorPorPessoa = valorTotal / numeroClientes;

    // Formata o valor para moeda (ajuste o formato conforme necessário)
    const valorFormatado = valorPorPessoa.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    return `Cada pessoa deve pagar: ${valorFormatado}`;
}

// Exemplo de uso:
const numeroClientes = prompt("Digite o número de clientes:");
const valorTotal = prompt("Digite o valor total da conta:");

const resultado = dividirConta(Number(numeroClientes), Number(valorTotal));
alert(resultado);