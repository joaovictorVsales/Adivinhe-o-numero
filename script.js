let numA = Math.floor(Math.random() * 21);
let win = false;
let tentativa = 0;

document.getElementById("Confirmar").addEventListener("click", function() {
    let input = parseInt(document.getElementById("box").value);
    tentativa++;

    if (input < 1 || input > 20) {
        console.log("Digite um número entre UM e VINTE");
        return;
    }

    if (input === numA) {
        console.log(`Acertou!!! tentativa: ${tentativa}/10`);
        win = true;
        return;
    } else if (input > numA) {
        console.log(`Errou!!! o número é menor tentativa: ${tentativa}/10`);
    } else if (input < numA) {
        console.log(`Errou!!! o número é maior tentativa: ${tentativa}/10`);
    }

    if (tentativa === 10 && !win) {
        console.log(`PERDEU!!! o número era ${numA}`);
        return;
    }
});
