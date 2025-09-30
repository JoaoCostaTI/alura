alert('Bem vindo ao jogo do número secreto! ')
let numeroSecreto = 2;
console.log(numeroSecreto);
let chute, tentativas = 1;

while (chute != numeroSecreto){
    chute = prompt('Escolha um numero entre 1 e 10: ')
    if(chute == numeroSecreto){
        alert(`Isso ai! Você descobriu o numero secreto que é: ${numeroSecreto}\nE acertou com ${tentativas} tentativas`);
    }else{
        if(chute > numeroSecreto){
            alert(`O numero secreto é menor que ${chute}\nNumero de tentativas: ${tentativas}`);
        }else {
        alert(`O numero secreto é maior que ${chute}\nNumero de tentativas: ${tentativas}`);
        }
        tentativas++;
    }
}