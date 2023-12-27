const inNomeAutor = document.getElementById("inNomeAutor");
const btnGerar = document.getElementById("btnGerar");
const outCitacao = document.getElementById("outCitacao");

function gerarCitacao () {

    const nomeAutor = inNomeAutor.value;

    if (nomeAutor == "" || nomeAutor.indexOf(" ") == -1){
        alert("Insira o nome completo")
        inNomeAutor.focus();
        return;
    }

    const partes = nomeAutor.split(" ")
    let citacao = "";
    const tamanho = partes.length

    for (let i = 0; i < tamanho - 1; i++) {
        citacao += partes[i].charAt(0) + ".";        
    }

    outCitacao.textContent = `Citação Bibliográfica: ${partes[tamanho - 1]}, ${citacao}`

}

btnGerar.addEventListener("click", gerarCitacao);