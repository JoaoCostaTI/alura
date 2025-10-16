function calcularDescontoTotal(quantidadeDeJogos) {
    let desconto = 0;
    let i = 0;

    while (i < quantidadeDeJogos) {
        if (quantidadeDeJogos >= 5) {
            desconto += 0.1 * 50;
        } else if (quantidadeDeJogos >= 10) {
            desconto += 0.2 * 50;
        }
        i++;
    }

    return desconto;
}