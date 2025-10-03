
function clicou(){
    let nome = document.getElementById('nome').value;
    let idade = document.getElementById('idade').value;
    alert(`${nome} + ${idade}`);
    let p = document.querySelector('p');
    p.innerHTML = `Seu nome é ${nome} e você tem ${idade} anos `;
}