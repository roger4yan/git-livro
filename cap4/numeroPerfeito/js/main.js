/* Elaborar um programa que leia um número e veri½que se ele é ou não
perfeito. Um número dito perfeito é aquele que é igual à soma dos seus
divisores inteiros (exceto o próprio número). O programa deve exibir os
divisores do número e a soma deles*/

const inNumero = document.getElementById("inNumero");
const btCheck = document.getElementById("btCheck");
const outDiv = document.getElementById("outDiv");
const outResult = document.getElementById("outResult");

function numPerf () {
  const num = Number(inNumero.value);

  if (num == 0 || isNaN(num)) {
    alert("Número invalido...");
    inNumero.value = "";
    inNumero.focus();
    return;
  }
  
  let numDiv = 0;
  let div = [];
 
  for (let i = 1; i < num; i++) { //Exemplo num = 6 se é perfeito
    if (num % i == 0){ //num % i = num - (Math.floor(num / i) * i)
        numDiv += i; //Concatena (soma) (1 + 2 + 3) que são os divisores de 6 que o restante é 0
        div.push(i); //Adiciona o divisor a variavel div [1, 2, 3]
    }
  }

  if (numDiv === num){
    outDiv.textContent = `Divisores de ${num}: ${div.join(', ')} (Soma: ${num})`
    outResult.textContent = `${num} É um Número Perfeito`
  } else {
    outDiv.textContent = "";
    outResult.textContent = `${num} Não é Um Número Perfeito`
  }

}

btCheck.addEventListener("click", numPerf);