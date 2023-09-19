/* Utilizando a linguagem JavaScript, crie uma situação matemática na qual os números precisam ser informados pelo usuário. Além disso, deve ocorrer uma exceção dentro do código. Utilize os métodos try(), catch() e finally() para realizar a captura e o tratamento dessa exceção. */
const prompt = require("prompt-sync")();

function calculaDivisao(dividendo, divisor) {
    if (divisor == 0) {
        throw new Error("Divisão por zero!");
    }
    return dividendo / divisor;
}

try {
    let dividendo = parseInt(prompt("Informe o dividendo: "));
    let divisor = parseInt(prompt("Informe o divisor: "));
    let resultado = calculaDivisao(dividendo, divisor);
    console.log(`Resultado: ${resultado}`);
} catch (e) {
    console.log(e.message);
} finally {
    console.log("Fim do programa");
}