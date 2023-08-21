/*Crie dois códigos de sistema de notas para uma escola. O primeiro código deve ser um programa que informa se o aluno reprovou, ou não, com base nas três notas que ele adicionou ao programa. Utilize, no mínimo, um operador de atribuição e um operador ternário. O segundo código é um programa que o aluno deve escrever duas notas e o retorno informa a nota mínima que ele deve tirar na próxima prova para poder passar com nota sete*/

//primeiro código que informa se o aluno foi aprovado ou não.

const prompt = require("prompt-sync")({ sigint: true });

const nota1 = Number(prompt("Digite a primeira nota: "));
const nota2 = Number(prompt("Digite a segunda nota: "));
const nota3 = Number(prompt("Digite a terceira nota: "));

let media = (nota1 + nota2 + nota3) / 3;
let resultado = media >= 7 ? "Aprovado" : "Reprovado";

console.log(`O aluno foi ${resultado}`);

//segundo código que informa a nota necessária.

const nota4 = Number(prompt("Digite a primeira nota: "));
const nota5 = Number(prompt("Digite a segunda nota: "));

let media2 = (nota4 + nota5) / 2;
let notaMinima = 7 - media2;

console.log(`A nota mínima que você precisa tirar é ${notaMinima}`);
