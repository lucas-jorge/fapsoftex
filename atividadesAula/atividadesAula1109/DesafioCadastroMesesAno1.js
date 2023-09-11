const readline = require('readline-sync');

const meses = ['Jan', 'Fev', 'Mar', 'Abr'];
meses.map(mes => mes.toUpperCase());//converte todos os meses para maiúsculo

let status = 1;//variável para armazenar a opção do usuário

//loop para que o usuário possa escolher as opções do sistema
while (status == 1) {

  console.log("-------Sistema de cadastro de registro--------");
  console.log("1 - Inserir");
  console.log("2 - Alterar");
  console.log("3 - Excluir");
  console.log("4 - Listar");

  let op = readline.question("Digite a opcao desejada: ");

  //switch para executar a opção escolhida pelo usuário
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
  //condição para que o loop continue
  status = readline.question("Digite 1 para continuar no sistema ou 2 para sair: ");
}

//adiciona um novo registro no array.
function inserirMes() {
  console.log("-------Tela de cadastro de registro--------");
  let mes = readline.question("Digite o mês: ").toUpperCase();
  meses.push(mes);
  listarMes();
}

//lista todos os registros do array.
function listarMes() {
  console.log("-------Relatório de todos os registros--------");
  for (let i = 0; i < meses.length; i++) {//percorre o array meses
    console.log(meses[i]);
  }
}

//retorna o indice do registro no array.
function getIndexByText(texto) {
  let index = meses.indexOf(texto);
  return index;
}

//altera o registro no array.
function alterar() {
  console.log("-------Tela para alterar o registro--------");
  listarMes();
  let mesAlterar = readline.question("Escolha o registro a ser alterado: ");
  let novoValor = readline.question("Informe o novo conteúdo: ").toUpperCase();
  let registro = getIndexByText(mesAlterar);//retorna o indice do registro no array
  //se o registro for encontrado, altera o valor.
  if (registro !== -1) {
    meses[registro] = novoValor;
    listarMes();
  } else {
    console.log("Registro não encontrado.");
  }
}

//exclui o registro no array.
function excluirMes() {
  console.log("-------Tela para excluir o registro--------");
  listarMes();
  let mesExcluir = readline.question("Escolha o registro a ser excluído: ").toUpperCase();
  let registro = getIndexByText(mesExcluir);
  //se o registro for encontrado, exclui o valor.
  if (registro !== -1) {
    meses.splice(registro, 1);
    listarMes();
  } else {
    console.log("Registro não encontrado.");
  }
}
