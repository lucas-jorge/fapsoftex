//cria um código que determina se um número é par ou ímpar

const readline = require ('readline-sync');

const numero = readline.questionInt('Digite um número: ');

if (numero % 2 === 0) {
    console.log('O número é par');
} else {
    console.log('O número é ímpar');
}
