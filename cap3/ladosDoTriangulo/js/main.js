
/*Elaborar um programa que leia três lados e veri½que se eles podem ou não
formar um triângulo. Para formar um triângulo, um dos lados não pode ser
maior que a soma dos outros dois. Caso possam formar um triângulo, exiba
também qual o tipo do triângulo: Equilátero (3 lados iguais), Isósceles (2
lados iguais) e Escaleno (3 lados diferentes).*/

const inLadoA = document.getElementById('inLadoA');
const inLadoB = document.getElementById('inLadoB');
const inLadoC = document.getElementById('inLadoC');
const btVerificar = document.getElementById('btVerificar');
const outInformarTriangulo = document.getElementById('outInformarTriangulo');
const outInformarTipo = document.getElementById('outInformarTipo');

function triangulo() {
	
	const ladoA = Number(inLadoA.value);
	const ladoB = Number(inLadoB.value);
	const ladoC = Number(inLadoC.value);

	

	if ((ladoA == 0 || ladoB == 0 || ladoC == 0 ) || ( isNaN(ladoA) || isNaN(ladoB) || isNaN(ladoC))) {
		alert('Informar um valor para todos os lados');
		inLadoA.focus();
		return;
	}


	if((ladoA > ladoB + ladoC) || (ladoB > ladoA + ladoC) || (ladoC > ladoA + ladoB)) {
		outInformarTriangulo.textContent = "Os lados não formam um triângulo";
		inLadoA.focus();
	}else if (ladoA == ladoB && ladoA == ladoC) {
		outInformarTriangulo.textContent = "Lados podem formar um triangulo";
		outInformarTipo.textContent = "Tipo: Equilátero";
	}else if (ladoA == ladoB || ladoB == ladoC || ladoC == ladoA) {
		outInformarTriangulo.textContent = "Lados podem formar um triangulo";
		outInformarTipo.textContent = "Tipo: Isósceles";
	}else
	
	if (ladoA !== ladoB && ladoB !== ladoC && ladoC !== ladoA) {
		outInformarTriangulo.textContent = "Lados podem formar um triangulo";
		outInformarTipo.textContent = "Tipo: Escaleno";			
	}
}

btVerificar.addEventListener("click", triangulo);