const carrinho = document.getElementById('Carrinho');
const itens = [];

function adicionarItem(item) {
    itens.push(item);
    const li = document.createElement('li');
    li.textContent = item;
    carrinho.appendChild(li);
}