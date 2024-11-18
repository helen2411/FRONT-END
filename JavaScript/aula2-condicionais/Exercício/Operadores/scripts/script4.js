// script.js
const result = document.getElementById('result');
let currentNumber = '';
let operator = '';

// Função para atualizar o visor
function updateResult() {
    result.value = currentNumber;
}

// Função para adicionar um número ao visor
function addNumber(number) {
    currentNumber += number;
    updateResult();
}

// Função para definir o operador
function setOperator(op) {
    operator = op;
    currentNumber = '';
}

// Função para calcular o resultado
function calculate() {
    const firstNumber = parseFloat(currentNumber);
    if (operator === '+') {
        // ... outros operadores
    }
    currentNumber = result.value = result;
    operator = '';
}

// Adicionando eventos aos botões (exemplo)
const buttons = document.querySelectorAll('.buttons button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;
        if (!isNaN(value)) {
            addNumber(value);
        } else if (value === '=') {
            calculate();
        } else {
            setOperator(value);
        }
    });
});