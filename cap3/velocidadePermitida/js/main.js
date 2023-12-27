/*Elaborar um programa que leia a velocidade permitida em uma estrada e
a velocidade de um condutor. Se a velocidade for inferior ou igual à
permitida, exiba “Sem Multa”. Se a velocidade for de até 20% maior que a
permitida, exiba “Multa Leve”. E, se a velocidade for superior a 20% da
velocidade permitida, exiba “Multa Grave”*/


const inVelPer = document.getElementById("inVelPer");
const inVelCon = document.getElementById("inVelCon");
const btCheck = document.getElementById("btCheck");
const outResult = document.getElementById("outResult");

function verVel () {
    const velPer = Number(inVelPer.value);
    const velCon = Number(inVelCon.value);


    if (velPer == 0 || isNaN(velPer)) {
        alert("Preencha o valor corretamente...");
        inVelPer.focus();
        return;
    } 
    if (velCon == 0 || isNaN(velCon)) {
        alert("Preencha o valor corretamente...");
        inVelCon.focus();
        return;
    }

     const velVinte = velPer * 1.2
   
    if (velCon <= velPer) {
        outResp.textContent = `Situação: Sem Multa`
    } else if (velCon > velPer && velCon <= velVinte) {
        outResp.textContent = `Situação: Multa Leve`
    } else {
        outResp.textContent = `Situação: Multa Grave`
    }
    
}

btCheck.addEventListener("click", verVel);