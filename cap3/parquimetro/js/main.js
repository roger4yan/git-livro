/*Elaborar um programa para simular um parquímetro, o qual leia o valor
de moedas depositado em um terminal de estacionamento rotativo. O
programa deve informar o tempo de permanência do veículo no local e o
troco (se existir), como no exemplo da Figura 3.9. Se o valor for inferior ao
tempo mínimo, exiba a mensagem: “Valor Insufciente”.*/

const inValor = document.getElementById("inValor");
const btDepositar = document.getElementById("btDepositar");
const outTime = document.getElementById("outTime");
const outTroco = document.getElementById("outTroco");

function parquimetro () {
    const valor = Number(inValor.value);
        
   if (valor < 1.00) {
    outTime.textContent = "Valor Insuficiente"
    inValor.focus();   
   } else if (valor >= 1 && valor < 1.75){
    outTime.textContent = "Tempo: 30 min";
    troco = valor % 1;
        if (troco != 0) {
            outTroco.textContent = "Troco R$: " + troco.toFixed(2);
        }
   } else if (valor >= 1.75 && valor < 3.00){
    outTime.textContent = "Tempo: 60 min";
    troco = valor % 1.75
        if (troco != 0){
            outTroco.textContent = "Troco R$: " + troco.toFixed(2);
        }
   } else if (valor >= 3.00) {
    outTime.textContent = "Tempo: 120 min";
    troco = valor % 3.00
        if (troco != 0){
            outTroco.textContent = "Troco R$: " + troco.toFixed(2);
        }
   }
}

btDepositar.addEventListener("click", parquimetro);