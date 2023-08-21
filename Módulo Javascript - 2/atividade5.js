/*Crie um programa que contenha os seguintes tipos de funções:

1. uma função tradicional com a palavra reservada "Function" e sem nenhum parâmetro;

2. uma função tradicional com parâmetros e um retorno de valor;

3. uma arrow function com parâmetros e que retorne um valor.

Crie um programa que utilize essas três funções de forma lógica, por exemplo: um programa de calculadora.*/

//primeira função.
function funcao1() {
    console.log("primeira função");
}
funcao1();

//uma função tradicional com parâmetros e um retorno de valor.
function soma1(a, b) {
    return a + b;
}
soma1(1, 2);
console.log(soma1(1, 2));

//uma arrow function com parâmetros e que retorne um valor.
const multiplicacaoArrow = (a, b) => {
    return a * b;
}
multiplicacaoArrow(2, 2);
console.log(multiplicacaoArrow(2, 2));

//Crie um programa que utilize essas três funções de forma lógica, por exemplo: um programa de calculadora.
const prompt = require("prompt-sync")({ sigint: true });

const calcularOperacao = (num1, num2, operacao) => {
    switch (operacao) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num1 / num2;
        default:
            throw new Error("Operação inválida");
    }
};

const main = () => {
    const num1 = Number(prompt("Digite o primeiro número: "));
    const num2 = Number(prompt("Digite o segundo número: "));
    const operacao = prompt("Digite a operação: ");

    try {
        const resultado = calcularOperacao(num1, num2, operacao);
        console.log(resultado);
    } catch (error) {
        console.log(error);
    }
};

main();