const numA = Math.floor(Math.random() * 21);
win = false;

while(!win){
function adivinhar(){
    let input = Number(prompt("Digite um número entre 1 e 20: "));

    if (input === numA) {
        console.log("Acertou!!!");
        win = true
    } 
    else if (input < numA) {
        console.log("Errou! O número é maior");
    } 
    else if (input > numA) {
        console.log("Errou! O número é menor");
    }
}
}


adivinhar();
