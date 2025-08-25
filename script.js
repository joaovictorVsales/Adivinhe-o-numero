let numA = Math.floor(Math.random() * 21);
let win = false;
let tentativa = 0;

document.getElementById("confirmar").addEventListener("click", function() {
    let input = parseInt(document.getElementById("box").value);
    let mensagem = document.getElementById("mensagem")
    tentativa++;

    if (input < 1 || input > 20) {
        mensagem.textContent ="Digite um número entre UM e VINTE";
        return;
    }

    if (input === numA) {
        mensagem.textContent=`Acertou!!! tentativa: ${tentativa}/10`;
        win = true;
        return;
    } else if (input > numA) {
        mensagem.textContent=`Errou!!! o número é menor tentativa: ${tentativa}/10`;
    } else if (input < numA) {
        mensagem.textContent=`Errou!!! o número é maior tentativa: ${tentativa}/10`;
    }

    if (tentativa === 10 && !win) {
        mensagem.textContent=`PERDEU!!! o número era ${numA}`;
        return;
    }
});
