/*
10 itens ou mais, e/ou valor unitário igual ou superior a 100 reais
*/ 

function calcular(){
    /*
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let valor = parseFloat(document.getElementById('valor').value);
    */
    let quantidade = 12
    let valor = 120
    let total = quantidade * valor;

    if(quantidade >= 10 || valor >= 100){
        total = total - (total/100 * 5)
    }

    console.log(`Valor Total: R$${total}`)
}

function reiniciar(){
    quantidade.value = ''
    valor.value = ''
}