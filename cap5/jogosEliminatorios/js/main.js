/*Elaborar um programa para gerar uma tabela com os jogos de uma fase
eliminatória de um campeonato. O programa deve conter três funções (a
serem executadas no evento click de cada botão) para: 1) validar o
preenchimento, adicionar um clube ao vetor e listar os clubes; 2) listar os
clubes (se houver); 3) montar a tabela de jogos, no formato primeiro x
último, segundo x penúltimo e assim por diante. Exibir mensagem e não
listar a tabela de jogos, caso o número de clubes informados seja ímpar.*/


const inTime = document.getElementById("inTime");
const btnAdd = document.getElementById("btnAdd");
const btnList = document.getElementById("btnList");
const btnResum = document.getElementById("btnResum");
const outList = document.getElementById("outList");

let times = [];

function addTime() {
    const time = inTime.value;

    if (time == "") {
        alert("Informe corretamente os dados");
        inTime.focus();
        return;
    }

    times.push(time); //Adiciona um time
    inTime.value = "";
    inTime.focus();

    listTimes();
}

function listTimes() {
    if (times.length == 0) {
        alert("Não há times na lista");
    }

    let list = ""; 

    for (let i = 0; i < times.length; i++) { //Cria uma lista dos times com uma quebra de linha
        list += `${i + 1}. - ${times[i]} \n`; 
    }

    outList.textContent = list;
}

function tabelaDeTimes() {
    if (times.length % 2 != 0) { //Verifica se o numero de itens dentro do array é impar
        alert("Não há times suficientes");
        return;
    }

    let games = "";
    //exmplo com um array de 8 posições [Palmeiras(0),1,2,3,4,5,6,7,Santos(8)]
    let lasttimeIndex = times.length - 1; // Armazena o ultimo elemento do array (8) = Santos

    for (let i = 0; i < times.length / 2; i++) { //primeiro loop i = posição 0
        let time1 = times[i]; //Guarda a primeira posição i = 0 (palmeiras) na variavel time1
        let time2 = times[lasttimeIndex - i]; //Guarda a ultima posição lasttimeIndex(8) - 0 = 8 (santos)
        games += `${time1} x ${time2}\n`; //Concatena a posicação 0 x a posição 8 (palmeiras x santos) e adiciona na lista games.
    }

    outList.textContent = games; //Quando acabar o loop imprime a lista inteira.
}

btnResum.addEventListener("click", tabelaDeTimes);
btnList.addEventListener("click", listTimes);
btnAdd.addEventListener("click", addTime);
