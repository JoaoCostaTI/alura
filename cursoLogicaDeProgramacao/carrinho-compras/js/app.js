let totalGeral;
limpar()


function adicionar(){
    /*Recuperar valores, nome do produto, quantidade e valor*/ 
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = parseFloat(produto.split('R$')[1]);
    let quantidade = parseInt(document.getElementById('quantidade').value);

    /* calcular o preço, o nosso subtotal */
    let valorTotal = quantidade * valorUnitario

    // adicionar produto no carrinho
    let carrinho = document.getElementById('lista-produtos')
    carrinho.innerHTML += `<section class="carrinho__produtos__produto">
                                <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${valorTotal}</span>
                            </section>`
    totalGeral += valorTotal
    // atualizar o valor total 
    let campoTotal = document.getElementById('valor-total')
    campoTotal.innerHTML = `R$ ${totalGeral}`
    document.getElementById('quantidade').value = 0
    
}

function limpar(){
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = ''
    document.getElementById('valor-total').innerHTML = ''
}