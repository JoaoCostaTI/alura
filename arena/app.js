let numeroSecreto = parseInt(Math.random() * 10 + 1)
let tentativas = 1

let campo1 = document.querySelector('h1')
let campo2 = document.querySelector('p')

campo1.innerHTML = 'Jogo do número Secreto'
campo2.innerHTML = 'Escolha um número entre 1 e 10'

function chutar(){
    let chute = parseInt(document.getElementById('chute').value)
    let campoTentativas = tentativas > 1 ? 'Tentativas' : 'Tentativa'
    if (chute == numeroSecreto){
        campo2.innerHTML = `Você acertou o numero!<br>Utilizou ${tentativas} ${campoTentativas}`
        document.getElementById('novoJogo').removeAttribute('disabled')
    }else{
        if(chute > numeroSecreto){
            campo2.innerHTML = 'O numero secreto é MENOR'
        }else{
            campo2.innerHTML = 'O numero secreto é MAIOR'
        }
        tentativas++
    
    }
}

