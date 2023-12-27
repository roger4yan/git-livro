/*Elaborar um programa que leia as últimas notícias da sua região e
armazene-as em um vetor. Exibir na página, a cada inclusão, somente a
quantidade de notícias cadastradas. O programa deve conter um botão que
solicite o número de notícias que o usuário deseja visualizar e, então, liste as
notícias em ordem inversa da inclusão. Ou seja, apenas as notícias mais
recentes devem ser listadas, de acordo com o número informado pelo
usuário. Validar esse número para que seja inferior ou igual à quantidade de
notícias cadastradas. A Figura 5.16 ilustra a página do exercício com um
exemplo em que o usuário solicitou as 3 últimas notícias.*/

const inNoticia = document.getElementById("inNoticia");
const btnAdd = document.getElementById("btnAdd");
const btnList = document.getElementById("btnList");
const outNoticias = document.getElementById("outNoticias");
const outList = document.getElementById("outList");

let noticias = [];

function addNoticias () {
    const noticia = inNoticia.value;
    
    if (noticia == "") {
        alert("Insira uma informação valida!");
        inNoticia.focus();
        return;
    }

    noticias.push(noticia);

    outNoticias.textContent = `Notícias Cadastradas: ${noticias.length}`
}



btnList.addEventListener("click", )
btnAdd.addEventListener("click", addNoticias);