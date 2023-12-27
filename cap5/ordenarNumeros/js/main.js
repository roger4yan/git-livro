/*Elaborar um programa que adicione números a um vetor. O programa
deve impedir a inclusão de números repetidos. Exibir a lista de números a
cada inclusão. Ao clicar no botão Verificar Ordem, o programa deve analisar o
conteúdo do vetor e informar se os números estão ou não em ordem
crescente.*/
const inNumero = document.getElementById("inNumero");
const btnAdd = document.getElementById("btnAdd");
const btnOrdenar = document.getElementById("btnOrdenar");
const outList = document.getElementById("outList");
const outOrdenar = document.getElementById("outOrdenar");

let numeros = [];

function addNumero () {
    const numero = Number(inNumero.value);

    if (numero == 0 || isNaN(numero)) {
        alert("Insira os dados corretamente!")
        inNumero.focus();
        return;
    }

    if (numeros.indexOf(numero) >= 0) {
        alert(`Você ja cadastrou o número ${numero}. Tente outro.`)
    } else {
        numeros.push(numero);
    }

    inNumero.value = "";
    outList.textContent = `Números: ${numeros.join(", ")}`
    
}

function ordenarList () {
    if (numeros.length == 0) {
        alert("A lista está vazia");
        return;
    }

    let ordem = true //Estou presumindo que a lista está em ordem crescente (flag)

    //Exemplo numeros = [10, 5, 20]
    for (let i = 0; i < numeros.length - 1; i++) { //(length - 1) evita acessar um indice fora do array 
        if (numeros[i] > numeros[i + 1]) { // ((i = posição 0) = 10) > ((i + 1 = posição 0 + posição 1 = 1) = 5), a condição é verdadeira.
            ordem = false //Entao define a ordem como falsa ou seja a lista nao esta em ordem.
            break //Entao o loop é interrompido
        }        
    }

    outList.textContent = `Números: ${numeros.join(", ")}`;
    outOrdenar.textContent = ordem ? "Os números estão em ordem crescente." : "Os números não estão em ordem crescente."; //Expressao condicional ternária if-else
    //A condição esta sendo avaliada se a "ordem" for true retorna a primeira parte apos "?" se nao, retorna a segunda parte apos ":"
    //Formula genrica --> nomeVariavel ? valorSeVerdadeiro : valorSeFalso
}

btnAdd.addEventListener("click", addNumero);
btnOrdenar.addEventListener("click", ordenarList);