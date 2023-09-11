const readline = require('readline-sync');

const meses = ['Jan', 'Fev', 'Mar', 'Abr'];
meses.map(mes => mes.toUpperCase());

let status = 1;

while (status == 1) {

  console.log("-------Sistema de cadastro de registro--------");
  console.log("1 - Inserir");
  console.log("2 - Alterar");
  console.log("3 - Excluir");
  console.log("4 - Listar");

  let op = readline.question("Digite a opcao desejada: ");

  switch (op) {
    case '1':
      inserirMes();
      break;
    case '2':
      alterar();
      break;
    case '3':
      excluirMes();
      break;
    case '4':
      listarMes();
      break;
    default:
      console.log("Opção inválida.");
      break;
  }

  status = readline.question("Digite 1 para continuar no sistema ou 2 para sair: ");
}

function inserirMes() {
  console.log("-------Tela de cadastro de registro--------");
  let mes = readline.question("Digite o mês: ").toUpperCase();
  meses.push(mes);
  listarMes();
}

function listarMes() {
  console.log("-------Relatório de todos os registros--------");
  for (let i = 0; i < meses.length; i++) {
    console.log(meses[i]);
  }
}

function getIndexByText(texto) {
  let index = meses.indexOf(texto);
  return index;
}

function alterar() {
  console.log("-------Tela para alterar o registro--------");
  listarMes();
  let mesAlterar = readline.question("Escolha o registro a ser alterado: ");
  let novoValor = readline.question("Informe o novo conteúdo: ").toUpperCase();
  let registro = getIndexByText(mesAlterar);
  
  if (registro !== -1) {
    meses[registro] = novoValor;
    listarMes();
  } else {
    console.log("Registro não encontrado.");
  }
}

function excluirMes() {
  console.log("-------Tela para excluir o registro--------");
  listarMes();
  let mesExcluir = readline.question("Escolha o registro a ser excluído: ").toUpperCase();
  let registro = getIndexByText(mesExcluir);
  
  if (registro !== -1) {
    meses.splice(registro, 1);
    listarMes();
  } else {
    console.log("Registro não encontrado.");
  }
}
