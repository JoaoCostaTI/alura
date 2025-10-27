let amigos = [];

function adicionar() {

    let amigo = document.getElementById('nome-amigo');

    if(amigo.value == ""){
        return alert('É necessário digitar algo no nome! ')
    }
    if(amigos.includes(amigo.value)){
        return alert('Nome já adicionado!')
    }
    let lista = document.getElementById('lista-amigos');

    amigos.push(amigo.value);

    if (lista.textContent == '') {
        lista.textContent = amigo.value;
    } else {
        lista.textContent = lista.textContent + ', ' + amigo.value;
    }

    amigo.value = '';
}


function sortear(){
    embaralha(listaCompletaAmigos)
    let LA = document.getElementById('lista-sorteio')

    for(let i = 0; i < listaCompletaAmigos.length; i++){
        if (i == listaCompletaAmigos.length-1){
           LA.innerHTML += `${listaCompletaAmigos[i]} => ${listaCompletaAmigos[0]}<br>` 
        }else{
            LA.innerHTML += `${listaCompletaAmigos[i]} => ${listaCompletaAmigos[i+1]}<br>`
        }
    }
}

