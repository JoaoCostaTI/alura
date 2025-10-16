function adicionar(){
    /*Recuperar valores, nome do produto, quantidade e valor*/ 
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = parseFloat(produto.split('R$')[1]);
    let quantidade = parseInt(document.getElementById('quantidade').value);

    let valorTotal = quantidade * valorUnitario

    alert(`Produto: ${nomeProduto}\nQuantidade: ${quantidade}\nValor Total: R$${valorTotal}`)
    /* calcular o preço, o nosso subtotal */
    // adicionar produto no carrinho
    // atualizar o valor total 
}

function limpar(){
    alert('Voce clicou em LIMPAR')
}