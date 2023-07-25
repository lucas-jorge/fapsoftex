//Faça um código, utilizando o Google Blockly, que execute a contagem regressiva de uma bomba, informando o número de segundos para explodir. Ele deverá mostrar a mensagem “iniciando contagem regressiva”, os segundos passados e, no final, a mensagem “BUM!”.

let bomba = 11;
console.log("Iniciando contagem regressiva");

while (bomba > 0) {

    bomba--;
    console.log(`Corram! Apenas ${bomba} segundos para a bomba explodir!`);
    if (bomba == 0) {
        console.log("BOOM!");
    } else {
        console.log("Ainda não explodiu...");
    } 
}