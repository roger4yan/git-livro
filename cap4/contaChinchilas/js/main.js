/*Digamos que o número de chinchilas de uma fazenda triplica a cada ano,
após o primeiro ano. Elaborar um programa que leia o número inicial de
chinchilas e anos e informe ano a ano o número médio previsto de chinchilas
da fazenda. Validar a entrada para que o número inicial de chinchilas seja
maior ou igual a 2 (um casal)*/

const inChinch = document.getElementById("inChinch");
const inAnos = document.getElementById("inAnos");
const btChinch = document.getElementById("btChinch");
const outChinch = document.getElementById("outChinch");


function registChinch() {
    const chinch = Number(inChinch.value);
    const ano = Number(inAnos.value);

    if (chinch <= 2 || isNaN(chinch) || ano == 0 || isNaN(ano)) {
      alert("Preencha os campo corretamente...");
      inChinch.value = "";
      inAnos.value = "";
      inChinch.focus();
      return;
     }

     let total = chinch //Criado uma variavel para multiplicar conforme proposto (acumulador)       
     let result = ""; //Vatiavel para criar uma lista a partir do for
      
     for (let i = 0; i < ano; i++) {
        result += `${i + 1}ª Ano: ${total} Chinchilas <br>` //Concatena (soma) na variavel result em forma de lista
        total *= 3; // total = total * 3 Concatena (multiplicando)
     }
       
 outChinch.innerHTML = result;

}

btChinch.addEventListener("click", registChinch);