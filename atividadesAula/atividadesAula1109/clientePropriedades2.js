/*Criar um objeto Cliente, que possui as propriedades: nome.
Realizar as operações para inserir (cadastrar) um novo cliente e em
seguida listar (relatório) os mesmos.*/

const readline = require('readline-sync');

const clientes = [];//array de objetos

function adicionarCliente() {//função para adicionar um novo cliente
  const cliente = {//objeto cliente
    nome: readline.question('Digite o nome do cliente: '),
  };

  clientes.push(cliente);//adiciona o objeto cliente ao array clientes

  console.log('Cliente adicionado com sucesso!');
}

function listarClientes() {//função para listar todos os clientes
  if (clientes.length === 0) {//verifica se o array clientes está vazio
    console.log('Nenhum cliente cadastrado!');
  } else {
    console.log('Lista de clientes:');
    clientes.forEach(cliente => console.log(cliente));//arrow function para percorrer o array clientes e imprimir os clientes
  }
}

let opcao = '';//variável para armazenar a opção do usuário

while (opcao !== '3') {//enquanto a opção for diferente de 3, o programa continua executando
  console.log('Menu de opções');
  console.log('1 - Adicionar cliente');
  console.log('2 - Listar clientes');
  console.log('3 - Sair');

  opcao = readline.question('Digite a opção desejada: ');//lê a opção do usuário

  switch (opcao) {//switch para executar a opção escolhida pelo usuário
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