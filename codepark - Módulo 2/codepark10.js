const prompt = require('prompt-sync')();

function calculadora() {

let num1 = prompt("Digite o primeiro número: ");
num1 = Number(num1);
let num2 = prompt("Digite o segundo número: ");
num2 = Number(num2);
const operator = prompt("Digite o operador desejado: 1 para soma, 2 para subtração, 3 para multiplicação e 4 para divisão ->  ");


    if (operator == '1') {
        return console.log(num1 + num2);
    } else if (operator == '2') {
        return console.log(num1 - num2);
    } else if (operator == '3') {
        return console.log(num1 * num2);
    } else if (operator == '4') {
        return console.log(num1 / num2);
    } else {
        return console.log("0");
    }
} calculadora();