/*Elaborar um programa que leia um número e exiba estrelas na página, em
linhas diferentes. A cada nova linha, o número de estrelas deve ser
incrementado. Observação: caso você informe um valor alto, as linhas
podem ultrapassar o tamanho da imagem e se alinhar à margem esquerda
da página. Para evitar que isso ocorra, crie uma nova classe no arquivo
estilos.css, que de½na uma ¾utuação à direita para essa imagem.*/

const inputNumero = document.getElementById('inputNumero');
const btnEstrelas = document.getElementById('btnEstrelas');
const outEstrelas = document.getElementById('outEstrelas');

function mostrarEstrelas() {
    let numeroDeEstrelas = Number(inputNumero.value);
    
    if (numeroDeEstrelas == 0 || numeroDeEstrelas == '' || isNaN(numeroDeEstrelas)) {
        alert('Preencha o campo corretamente!');
        inputNumero.value = '';
        inputNumero.focus();
        return;
    }

    let estrelas = ''; //Cria uma variavel para lista de estrelas
    
    for (let linha = 0; linha <= numeroDeEstrelas; linha++) { //Cria uma lista em forma de linha
        for (let i = 0; i <= linha; i++) { //Cria uma lista em forma de piramide
            estrelas += '*';
        }
        estrelas += '<br>';  
    }

    outEstrelas.innerHTML = estrelas;
}

btnEstrelas.addEventListener('click', mostrarEstrelas);
