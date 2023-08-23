//crie uma agenda que tenha tres campos e que permita inserir um numero x de vezes pelo teclado

const prompt = require('prompt-sync')({sigint: true});

let agenda = [];

for (let i = 0; i < 3; i++) {
    const nome = prompt('Digite o nome: ');
    const telefone = prompt('Digite o telefone: ');
    const email = prompt('Digite o email: ');

    agenda.push([nome, telefone, email]);
}

console.log(agenda);
