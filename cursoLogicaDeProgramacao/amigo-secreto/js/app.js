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
    let LA = document.getElementById('lista-sorteio')

    for(let i = 0; i < listaCompletaAmigos.length; i++){
        if (i == listaCompletaAmigos.length-1){
           LA.innerHTML += `${listaCompletaAmigos[i]} => ${listaCompletaAmigos[0]}<br>` 
        }else{
            LA.innerHTML += `${listaCompletaAmigos[i]} => ${listaCompletaAmigos[i+1]}<br>`
        }
    }
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
    let limparLA = document.getElementById('lista-sorteio')
    limparLA.textContent = ""
    listaCompletaAmigos = []
}
