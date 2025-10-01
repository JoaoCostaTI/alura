let desafio = document.querySelector('h1')
desafio.innerHTML = 'Hora do Desafio'

function clicarBotaoConsole(){
    console.log('Botão Console foi clicado!')
}
function euAmoJS(){
    alert('Eu amo JS!')
}
function cidade(){
    let nomeCidade = prompt('Nome da cidade: ')
    alert(`Eu estive em ${nomeCidade} e lembrei de você`)
}
function somar(){
    let n1, n2

    n1 = parseInt(prompt('Numero 1: '))
    n2 = parseInt(prompt('Numero 2: '))
    let soma = n1 + n2
    alert(`${n1} + ${n2} = ${soma}`)
}