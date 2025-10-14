alert('Bem vindo ao jogo do número secreto! ')
let tetoMaximo = 500
let numeroSecreto = parseInt(Math.random() * tetoMaximo + 1);
console.log(numeroSecreto);
let chute, tentativas = 1;

while (chute != numeroSecreto){
    chute = prompt(`Escolha um numero entre 1 e ${tetoMaximo}: `)
    if(chute == numeroSecreto){
        break
    }else{
        if(chute > numeroSecreto){
            alert(`O numero secreto é menor que ${chute}\nNumero de tentativas: ${tentativas}`);
        }else {
        alert(`O numero secreto é maior que ${chute}\nNumero de tentativas: ${tentativas}`);
        }
        tentativas++;
    }
}
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
alert(`Isso ai! Você descobriu o numero secreto que é: ${numeroSecreto}\nE acertou com ${tentativas} ${palavraTentativa}`);