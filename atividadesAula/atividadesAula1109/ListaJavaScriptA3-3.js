/*Criar um objeto Cliente, que possui as propriedades: nome, sobrenome,
dataNascimento, sexo, cpf, idade. Realizar as operações para inserir
(cadastrar) um novo cliente e em seguida listar (relatório) os mesmos.*/

const readline = require('readline-sync');//importa a biblioteca readline-sync

const clientes = [];//cria um array vazio

function adicionarCliente() {//cria uma função para adicionar um cliente
    const cliente = {
        nome: readline.question('Digite o nome do cliente: '),
        sobrenome: readline.question('Digite o sobrenome do cliente: '),
        dataNascimento: readline.question('Digite a data de nascimento do cliente: '),
        sexo: readline.question('Digite o sexo do cliente: '),
        cpf: readline.question('Digite o CPF do cliente: '),
        idade: readline.question('Digite a idade do cliente: ')
    };

    clientes.push(cliente);//adiciona o cliente no array clientes

    console.log('Cliente adicionado com sucesso!');
    }

function listarClientes() {//cria uma função para listar os clientes
    if (clientes.length === 0) {//verifica se o array clientes está vazio
        console.log('Nenhum cliente cadastrado!');
    } else {
        console.log('Lista de clientes:');
        clientes.forEach(cliente => console.log(cliente));//arrow function para percorrer o array clientes e imprimir os clientes
    }
}

let opcao = '';//cria uma variável vazia para armazenar a opção do usuário

while (opcao !== '3') {//enquanto a opção for diferente de 3, o programa continua executando
    console.log('Menu de opções');
    console.log('1 - Adicionar cliente');
    console.log('2 - Listar clientes');
    console.log('3 - Sair');

    opcao = readline.question('Digite a opção desejada: ');

    switch (opcao) {//cria um switch para verificar a opção do usuário
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