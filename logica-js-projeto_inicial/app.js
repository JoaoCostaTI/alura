function olaMundo(){
    console.log('olá Mundo! ')
}

olaMundo()

function exibirNome(nome){
    console.log(`Olá ${nome}!`)
}

exibirNome('João Costa')

function retornarDobroDoNumero(n){
    return n * 2
}

console.log(retornarDobroDoNumero(4))

function mediaNumeros(n1,n2,n3){
    return (n1 + n2 + n3) / 3 
}

console.log(mediaNumeros(4,5,6))

function maiorNumero(n1, n2){
    if (n1 == n2){
        console.log('Numeros iguais!')
    } else if(n1 > n2){
        console.log(`${n1} é MAIOR que ${n2} `)
    } else{
        console.log(`${n2} é MAIOR que ${n1}`)
    }
}

maiorNumero(7,8)

function multiplicacaoPorEleMesmo(n){
    return n * n
}

console.log(multiplicacaoPorEleMesmo(4))