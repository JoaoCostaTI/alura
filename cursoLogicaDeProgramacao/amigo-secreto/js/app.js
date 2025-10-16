let listaCompletaAmigos = []

function adicionar(){
    let nomeAmigo = document.getElementById('nome-amigo').value
    let listaAmigos = document.getElementById('lista-amigos')
    listaAmigos.textContent += `${nomeAmigo} ,`

    listaCompletaAmigos.push(nomeAmigo)

    document.getElementById('nome-amigo').value = ""

}

function sortear(){
    embaralha(listaCompletaAmigos)
}

function embaralha(lista){
    for (let indice = lista.length; indice; indice--){
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio],lista[indice - 1]] 
    }
}

function reiniciar(){
    document.getElementById('nome-amigo').value = ""
    listaAmigos = document.getElementById('lista-amigos')
    listaAmigos.textContent = ""
    listaCompletaAmigos = []
}
