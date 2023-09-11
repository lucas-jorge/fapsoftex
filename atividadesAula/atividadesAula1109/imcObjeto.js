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

const readline = require('readline-sync');

const clientes = [];

function adicionarCliente() {
    const cliente = {
        nome: readline.question('Digite o nome do cliente: '),
        sobrenome: readline.question('Digite o sobrenome do cliente: '),
        dataNascimento: readline.question('Digite a data de nascimento do cliente: '),
        sexo: readline.question('Digite o sexo do cliente: '),
        cpf: readline.question('Digite o CPF do cliente: ')
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