function adicionarAoCarrinho(itemId, itemNome) {
    // Construindo a URL com os parâmetros
    var url = "../Páginas/Carrinho.html" + itemId + "&item_nome=" + itemNome;
    // Redirecionando para a página do carrinho
    window.location.href = url;
}