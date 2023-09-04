const readlineSync = require('readline-sync');

function calcular(valor1, valor2, operador) {
  switch (operador) {
    case "+":
      return valor1 + valor2;
    case "-":
      return valor1 - valor2;
    case "*":
      return valor1 * valor2;
    case "/":
      return valor1 / valor2;
    default:
      console.log('Operador inválido');
      return null;
  }
}

console.log('Bem vindo(a) ao CALCULATOR 2000');
console.log('Menu de opções');
console.log('1 - Adição');
console.log('2 - Subtração');
console.log('3 - Multiplicação');
console.log('4 - Divisão');

const valor1 = parseFloat(readlineSync.question('Digite o primeiro valor: '));
const valor2 = parseFloat(readlineSync.question('Digite o segundo valor: '));
const operador = readlineSync.question('Digite o operador (+, -, *, /): ');

const resultado = calcular(valor1, valor2, operador);
if (resultado !== null) {
  console.log('Resultado:', resultado);
}