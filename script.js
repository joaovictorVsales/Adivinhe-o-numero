numA = Math.floor(Math.random()*21);
win = false;
let tentativa = 0;

while(!win && tentativa < 10){
    let input = Number(prompt("Digite um número de um a vinte: "))
    tentativa++;

if(input < 0 || input > 20){
    console.log ("Digite um número entre UM e VINTE")
}

if(input === numA){
    console.log (`Acertou!!! tentativa:  ${tentativa}/10`)
    break;
}

else if(input > numA){
    console.log (`Errou!!! o número é menor tentativa:  ${tentativa}/10`)
}

else if(input < numA){
    console.log (`Errou!!! o número é maior tentativa:  ${tentativa}/10`)
}
if(tentativa === 10 && !win){
    console.log (`PERDEU!!! o número era ${numA}`)
    break;
}

}

