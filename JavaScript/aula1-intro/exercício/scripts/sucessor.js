function mostrarSequencia(numero) {
    const antecessor = numero - 1;
    const sucessor = numero + 1;

    return `A sequência é: ${antecessor}, ${numero}, ${sucessor}`;
}

// Exemplo de uso:
const numeroDigitado = prompt("Digite um número:");

const resultado = mostrarSequencia(Number(numeroDigitado));
alert(resultado);