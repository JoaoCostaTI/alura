

function comprar(){
    let tipo = document.getElementById('tipo-ingresso');
    let qtd = parseInt(document.getElementById('qtd').value);

    if(tipo.value == 'pista'){
        comprarPista(qtd);
    }
    if(tipo.value == 'superior'){
        comprarSuperior(qtd)
    }
    if(tipo.value == 'inferior'){
        comprarInferior(qtd)
    }

}

function comprarPista(qtd){
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);

    if(qtd > qtdPista){
        alert('Quantidade indisponível para tipo PISTA')
    }else{
        qtdPista -= qtd
        document.getElementById('qtd-pista').textContent = qtdPista
    }
}

function comprarSuperior(qtd){
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);

    if(qtd > qtdSuperior){
        alert('Quantidade indisponível para tipo SUPERIOR')
    }else{
        qtdSuperior -= qtd
        document.getElementById('qtd-superior').textContent = qtdSuperior
    }
}

function comprarInferior(qtd){
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);

    if(qtd > qtdInferior){
        alert('Quantidade indisponível para tipo INFERIOR')
    }else{
        qtdInferior -= qtd
        document.getElementById('qtd-inferior').textContent = qtdInferior
    }
}