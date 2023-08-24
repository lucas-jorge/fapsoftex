//crie uma agenda que tenha tres campos e que permita inserir dados e retorne todos os dados de determinada coluna.

const prompt = require('prompt-sync')({sigint: true});

// usando 1 for e switch

let agenda = [];
let quantidade = prompt('Quantas pessoas há na agenda? ');

for (let i = 0; i < quantidade; i++) {
    let pessoa = {
        nome: prompt('Nome: '),
        telefone: prompt('Telefone: '),
        email: prompt('Email: ')
    };
    agenda.push(pessoa);
}

let opcao = prompt('Deseja buscar por nome, telefone ou email? ');

for (let i = 0; i < agenda.length; i++) {
    switch (opcao) {
        case 'nome':
            console.log(agenda[i].nome);
            break;
        case 'telefone':
            console.log(agenda[i].telefone);
            break;
        case 'email':
            console.log(agenda[i].email);
            break;
        default:
            console.log('Opção inválida.');
    }
}