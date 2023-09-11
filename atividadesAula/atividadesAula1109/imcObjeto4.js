/*Uma nutricionista deseja fazer um programa para sua clínica com a
finalidade de manter o controle de seus clientes(usar Objeto). Segue
abaixo os requisitos:
● O cliente é identificado pelo: nome, sobrenome, data de
nascimento, cpf.
● O programa deve realizar o cálculo do IMC.
● O programa deve exibir um relatório que exiba: nome, sexo,
idade, IMC e a classificação. Conforme abaixo:
○ IMC entre 25,0 e 29,9 Kg/m2: sobrepeso;
○ IMC entre 30,0 e 34,9 Kg/m2: obesidade grau I;
○ IMC entre 35,0 e 39,9 Kg/m2: obesidade grau II;
○ IMC maior do que 40,0 Kg/m2: obesidade grau III.)*/

const readline = require('readline-sync');//importa o módulo readline-sync

const clientes = [];//array de objetos

//função para adicionar um novo cliente
function adicionarCliente() {
    const cliente = {
        nome: readline.question('Digite o nome do cliente: '),
        sobrenome: readline.question('Digite o sobrenome do cliente: '),
        dataNascimento: readline.question('Digite a data de nascimento do cliente: '),
        sexo: readline.question('Digite o sexo do cliente: '),
        cpf: readline.question('Digite o CPF do cliente: ')
    };

    clientes.push(cliente);//adiciona o objeto cliente ao array clientes

    console.log('Cliente adicionado com sucesso!');
    }

    //função para listar todos os clientes
    function listarClientes() {
        if (clientes.length === 0) {//verifica se o array clientes está vazio
            console.log('Nenhum cliente cadastrado!');
        } else {
            console.log('Lista de clientes:');
            clientes.forEach(cliente => console.log(cliente));//imprime todos os objetos do array clientes
        }
    }

    //função para calcular o IMC
    function calcularIMC() {
        if (clientes.length === 0) {
            console.log('Nenhum cliente cadastrado!');
        } else {
            console.log('Lista de clientes:');
            clientes.forEach(cliente => console.log(cliente));
        }
    }

let opcao = '';

while (opcao !== '4') {
    console.log('Menu de opções');
    console.log('1 - Adicionar cliente');
    console.log('2 - Listar clientes');
    console.log('3 - Calcular IMC');
    console.log('4 - Sair');

    opcao = readline.question('Digite a opção desejada: ');

    switch (opcao) {
        case '1':
            adicionarCliente();
            break;
        case '2':
            listarClientes();
            break;
        case '3':
            calcularIMC();
            break;
        case '4':
            console.log('Saindo do sistema...');
            break;
        default:
            console.log('Opção inválida!');
    }
}

console.log('Fim do programa!');