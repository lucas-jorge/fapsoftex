//crie uma agenda que tenha tres campos e que permita inserir um numero, x de vezes pelo teclado

const prompt = require('prompt-sync')({sigint: true});

let agenda = [];
let nome = [];
let telefone = [];
let email = [];
let i = 0;
var x = 0;

while (x < 3) {
    nome[i] = prompt('Digite o nome: ');
    telefone[i] = prompt('Digite o telefone: ');
    email[i] = prompt('Digite o email: ');
    i++;
    x++;
}

for (i = 0; i < 2; i++) {
    agenda[i] = [nome[i], telefone[i], email[i]];
} 

console.log(agenda);