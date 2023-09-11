/*Criar um objeto Cliente, que possui as propriedades: nome, sobrenome,
dataNascimento, sexo, cpf, idade. Realizar as operações para inserir
(cadastrar) um novo cliente e em seguida listar (relatório) os mesmos.*/

const readline = require('readline-sync');

const clientes = [];

function adicionarCliente() {
    const cliente = {
        nome: readline.question('Digite o nome do cliente: '),
        sobrenome: readline.question('Digite o sobrenome do cliente: '),
        dataNascimento: readline.question('Digite a data de nascimento do cliente: '),
        sexo: readline.question('Digite o sexo do cliente: '),
        cpf: readline.question('Digite o CPF do cliente: '),
        idade: readline.question('Digite a idade do cliente: ')
    };

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