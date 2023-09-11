/*Criar um Array (lista) Cliente, que possui as propriedades: nome.
Realizar as operações para inserir (cadastrar) um novo cliente e em
seguida listar (relatório) os mesmos.*/

const readline = require('readline-sync');

const clientes = [];

function adicionarCliente() {
    const cliente = readline.question('Digite o nome do cliente: ');
    
    clientes.push(cliente);
    
    console.log('Cliente adicionado com sucesso!');
    }

function listarClientes() {
    if (clientes.length === 0) {
        console.log('Nenhum cliente cadastrado!');
    } else {
        console.log('Lista de clientes:');
        clientes.forEach(cliente => console.log(cliente));
    }
}

let opcao = '';

while (opcao !== '3') {
    console.log('Menu de opções');
    console.log('1 - Adicionar cliente');
    console.log('2 - Listar clientes');
    console.log('3 - Sair');

    opcao = readline.question('Digite a opção desejada: ');

    switch (opcao) {
        case '1':
            adicionarCliente();
            break;
        case '2':
            listarClientes();
            break;
        case '3':
            console.log('Saindo do sistema...');
            break;
        default:
            console.log('Opção inválida!');
    }
}

console.log('Fim do programa!');