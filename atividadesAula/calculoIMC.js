<<<<<<< HEAD
const readlineSync = require('readline-sync');

const peso = readlineSync.question('Digite seu peso: ');
const altura = readlineSync.question('Digite sua altura: ');

const imc = peso / (altura * altura);
if (imc < 18.5) {
    console.log('Abaixo do peso');
} else if (imc >= 18.5 && imc < 25) {
    console.log('Peso normal');
} else if (imc >= 25 && imc < 30) {
    console.log('Sobrepeso');
} else if (imc >= 30 && imc < 35) {
    console.log('Obesidade grau 1');
} else if (imc >= 35 && imc < 40) {
    console.log('Obesidade grau 2');
} else {
    console.log('Obesidade grau 3');
}

=======
const readlineSync = require('readline-sync');

const peso = readlineSync.question('Digite seu peso: ');
const altura = readlineSync.question('Digite sua altura: ');

const imc = peso / (altura * altura);
if (imc < 18.5) {
    console.log('Abaixo do peso');
} else if (imc >= 18.5 && imc < 25) {
    console.log('Peso normal');
} else if (imc >= 25 && imc < 30) {
    console.log('Sobrepeso');
} else if (imc >= 30 && imc < 35) {
    console.log('Obesidade grau 1');
} else if (imc >= 35 && imc < 40) {
    console.log('Obesidade grau 2');
} else {
    console.log('Obesidade grau 3');
}

>>>>>>> fc5de2a4a60c5661f91caa9516e55cd6ce4756ad
console.log(`Seu IMC é ${imc.toFixed(2)}`);