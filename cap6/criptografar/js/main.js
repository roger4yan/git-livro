const inMensagem = document.getElementById("inMensagem");
const btnCriptografar = document.getElementById("btnCriptografar");
const btnDecriptografar = document.getElementById("btnDecriptografar");
const outMensagem = document.getElementById("outMensagem");

let mensagens = [];

function criptografar() {
  const mensagem = inMensagem.value;

  if (mensagem === "") {
      alert("Insira os dados corretamente");
      inMensagem.focus();
      return;
  }

  mensagens = [];

  mensagens.push(mensagem);
  
  const tamanho = mensagem.length;
  let respostaPar = "";
  let respostaImpar = "";

  for (let i = 0; i < tamanho; i++) {
      if (i % 2 === 0) {
          respostaPar += mensagem[i];
      } else {
          respostaImpar += mensagem[i];
      }
  }

  outMensagem.textContent = respostaImpar + respostaPar;
}


function decriptografar() {
    if (mensagens.length === 0) {
        alert("Insira os dados corretamente");
        inMensagem.focus();
        return;
    }

    // Alteração aqui: use join para obter a mensagem completa
    outMensagem.textContent = mensagens[0];
}

btnDecriptografar.addEventListener("click", decriptografar);
btnCriptografar.addEventListener("click", criptografar);
