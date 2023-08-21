/*Com os conceitos aprendidos, crie um programa de calculadora que:

- receba dois valores, que devem ser salvos em variáveis;

o usuário deve colocar qual operador ele vai utilizar por meio dos símbolos aritméticos;

- com os dois valores e o operador definido, o programa deve fazer a operação e retornar o resultado;

- se houver divisão, você deve retornar o resultado e a sobra, caso haja alguma*/

const prompt = require("prompt-sync")({ sigint: true });

const valor1 = Number(prompt("Digite o primeiro valor: "));
const valor2 = Number(prompt("Digite o segundo valor: "));
const operador = prompt("Digite o operador: ");

let resultado = 0;
let resto = 0;

switch (operador) {
    case "+":
        resultado = valor1 + valor2;
        console.log(`O resultado da soma é ${resultado}`);
        break;
    case "-":
        resultado = valor1 - valor2;
        console.log(`O resultado da subtração é ${resultado}`);
        break;
    case "*":
        resultado = valor1 * valor2;
        console.log(`O resultado da multiplicação é ${resultado}`);
        break;
    case "/":
        resultado = valor1 / valor2;
        resto = valor1 % valor2;
        console.log(`O resultado da divisão é ${resultado} e o resto é ${resto}`);
        break;
    default:
        console.log("Operador inválido");
}