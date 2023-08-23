//crie uma agenda que tenha tres campos e que permita inserir dados e retorne todos os dados de determinada coluna.

const prompt = require('prompt-sync')({sigint: true});

let nome = [];
let telefone = [];
let email = [];
let i = 0;
let x = 0;

while (x < 5) {
    nome[i] = prompt('Digite o nome: ');
    telefone[i] = prompt('Digite o telefone: ');
    email[i] = prompt('Digite o email: ');
    i++;
    x++;
}

const agenda = [nome, telefone, email];

console.log(agenda);

const coluna = prompt('Digite a coluna que deseja visualizar: ');

for (i = 0; i < 5; i++) {
    console.log(agenda[coluna][i]);
}