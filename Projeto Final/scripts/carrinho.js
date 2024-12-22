// Obtendo os parâmetros da URL
const urlParams = new URLSearchParams(window.location.search);
const itemId = urlParams.get('item_id');
const itemNome = urlParams.get('item_nome');

// Exibindo as informações do item (por exemplo, em um elemento HTML)
document.getElementById('item-adicionado').textContent = "Você adicionou: " + itemNome;