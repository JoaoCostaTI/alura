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

<<<<<<< HEAD
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
=======
function sortear() {
    if(amigos.length < 4){
        return alert('Adicione pelo menos 4 amigos.')
    }
    embaralhar(amigos);
>>>>>>> 16a7757d9e7264aba14646c5cbc32297298c40fc

    let sorteio = document.getElementById('lista-sorteio');
    for (let i = 0; i < amigos.length; i++) {
        if (i == amigos.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] +' --> ' +amigos[0] + '<br/>';
        } else {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] +' --> ' +amigos[i + 1] + '<br/>';
        }
    }
}

<<<<<<< HEAD
function reiniciar(){
    document.getElementById('nome-amigo').value = ""
    listaAmigos = document.getElementById('lista-amigos')
    listaAmigos.textContent = ""
    let limparLA = document.getElementById('lista-sorteio')
    limparLA.textContent = ""
    listaCompletaAmigos = []
=======
function embaralhar(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
>>>>>>> 16a7757d9e7264aba14646c5cbc32297298c40fc
}

function reiniciar() {
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}