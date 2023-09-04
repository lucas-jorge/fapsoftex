const readlineSync = require('readline-sync');

function adicao(value1, value2) {
  return value1 + value2;
}

function subtracao(value1, value2) {
  return value1 - value2;
}

function multiplicacao(value1, value2) {
  return value1 * value2;
}

function divisao(value1, value2) {
  return value1 / value2;
}

function calcular(value1, value2, operator) {
  switch (operator) {
    case "+":
      return adicao(value1, value2);
    case "-":
      return subtracao(value1, value2);
    case "*":
      return multiplicacao(value1, value2);
    case "/":
      return divisao(value1, value2);
    default:
      console.log('Operador inválido');
      return null;
  }
}

console.log('Bem vindo ao CALCULATOR 2000');
console.log('Menu de opções:');
console.log('1 - Adição');
console.log('2 - Subtração');
console.log('3 - Multiplicação');
console.log('4 - Divisão');

const option = parseInt(readlineSync.question('Digite o número da operação desejada: '));

const value1 = parseFloat(readlineSync.question('Digite o primeiro valor: '));
const value2 = parseFloat(readlineSync.question('Digite o segundo valor: '));

let operator;
switch (option) {
  case 1:
    operator = "+";
    break;
  case 2:
    operator = "-";
    break;
  case 3:
    operator = "*";
    break;
  case 4:
    operator = "/";
    break;
  default:
    console.log('Opção inválida');
    return;
}

const result = calcular(value1, value2, operator);

if (result !== null) {
  console.log('Resultado:', result);
}
