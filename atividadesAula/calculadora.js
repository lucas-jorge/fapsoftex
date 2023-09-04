const readlineSync = require('readline-sync');

function calcular(valor1, valor2, operador) {
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
      console.log('Operador inválido');
  }
}

const valor1 = Number(readlineSync.question("Digite o primeiro valor: "));
const valor2 = Number(readlineSync.question("Digite o segundo valor: "));
const operador = readlineSync.question("Digite o operador: ");

calcular(valor1, valor2, operador);