/*Elaborar um programa que leia nome e número de acertos de candidatos
inscritos em um concurso. Listar os dados a cada inclusão. Ao clicar no
botão Aprovados 2ª Fase, ler o número de acertos para aprovação dos
candidatos para a 2ª fase do concurso, conforme ilustra a Figura 5.14. O
programa deve, então, exibir os candidatos aprovados, ou seja, apenas os que
obtiveram nota maior ou igual à nota informada. Exibir os candidatos
aprovados em ordem decrescente de número de acertos (Figura 5.15). Caso
nenhum candidato tenha sido aprovado, exibir mensagem.*/

const inNome = document.getElementById("inNome");
const inAcerto = document.getElementById("inAcerto");
const btnAdd = document.getElementById("btnAdd");
const btnList = document.getElementById("btnList");
const btnAprov = document.getElementById("btnAprov");
const outLista = document.getElementById("outLista");

let candidatos = [];

function addNome() {
    const nome = inNome.value;
    const acerto = Number(inAcerto.value);

    if (nome == "" || acerto == 0 || isNaN(acerto)) {
        alert("Informe corretamente os dados");
        inNome.focus();
        return;
    }

    candidatos.push({ nome: nome, acerto: acerto });

    inNome.value = "";
    inAcerto.value = "";
    inNome.focus();

    listNome();
}

function listNome() {
    if (candidatos.length == 0) {
        alert("Não há nomes na lista");
        return;
    }

    let list = "";

    for (let i = 0; i < candidatos.length; i++) {
        list += `${candidatos[i].nome} - ${candidatos[i].acerto} acertos \n`;
    }

    outLista.textContent = list;
}

function aprovCandidatos() {
    let min = Number(prompt('Números de acerto para aprovação?'));

    if (min == 0 || isNaN(min)) {
        return;
    }

    let copia = candidatos.slice(); //Faz uma copia do array cadindatos
    copia.sort(function (a, b) { return a.acerto - b.acerto}) //Ordena de forma crescente
    copia.reverse();//Ordena de forma decrescente

    let list = "";
        
    for (let i = 0; i < candidatos.length; i++) {
        if (copia[i].acerto >= min) { 
        list += `${copia[i].nome} - ${copia[i].acerto} acertos \n`;
        }
    }

    if (list == "") {
        outLista.textContent = "Não há candidatos aprovados";
    } else {
        outLista.textContent = list;
    }
}

btnAprov.addEventListener("click", aprovCandidatos);
btnList.addEventListener("click", listNome);
btnAdd.addEventListener("click", addNome);
