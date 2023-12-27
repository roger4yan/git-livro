/*Elaborar um programa que leia o nome de uma fruta e um número. O
programa deve repetir a exibição do nome da fruta, de acordo com o número
informado. Utilize o “*” para separar os nomes.*/

const inFruta = document.getElementById("inFruta");
const inNumero = document.getElementById("inNumero");
const btRepet = document.getElementById("btRepet");
const outFruta = document.getElementById("outFruta");


function registroFruta() {
    const fruta = inFruta.value;
    const numero = Number(inNumero.value);

    if (fruta == "" || numero == 0 || isNaN(numero)) {
        alert("Defina os valores corretamente...");
        infruta.focus();
        return;
    }

    let resultado = ""; //Armazena a resposta do loop
    
    for (let i = 0; i < numero; i++) { //Exmplo fruta = uva, numero = 4. posição 1 
        resultado += fruta; //Concatena com a fruta escolhida

        if (i < numero - 1){ //Faz o teste 1 < 4 - 1 se sim
            resultado += "*" //uva*
        } 
        
    }
     
    outFruta.textContent = resultado;       
}

btRepet.addEventListener("click", registroFruta);