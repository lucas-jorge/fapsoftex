/*utilizando somente comandos para saída (apenas console.log) de dados crie um menu de um cadastro de tarefas onde seja possível:
listar todas as tarefas, cadastrar uma nova tarefa, editar/atualizar uma tarefa existente, remover uma tarefa e sair do sistema.*/

const prompt = require('prompt-sync')({ sigint: true });

const tarefas = [];

function adicionarTarefa() {
  const tarefa = prompt('Digite a tarefa: ').toLowerCase();

  tarefas.push(tarefa);

  console.log('Tarefa adicionada com sucesso!');
}

function removerTarefa() {
  console.log('Qual tarefa deseja remover?');
  const tarefaRemover = prompt('Digite a tarefa: ');
  const index = tarefas.findIndex(tarefa => tarefa === tarefaRemover);

  if (index !== -1) {
    tarefas.splice(index, 1);
    console.log('Tarefa removida com sucesso!');
    console.log('Tarefa não encontrada!');
  }
}

function atualizarTarefa() {
  console.log('Qual tarefa deseja atualizar?');
  const tarefaAtualizar = prompt('Digite a tarefa: ');
  const index = tarefas.findIndex(tarefa => tarefa === tarefaAtualizar);

  if (index !== -1) {
    const novaTarefa = prompt('Digite a nova tarefa: ');
    tarefas.splice(index, 1, novaTarefa);
    console.log('Tarefa atualizada com sucesso!');
  } else {
    console.log('Tarefa não encontrada!');
  }
}

function exibirTarefas() {
  if (tarefas.length === 0) {
    console.log('Nenhuma tarefa cadastrada!');
  } else {
    console.log('Lista de tarefas:');
    tarefas.forEach(tarefa => console.log(tarefa));
  }
}

while (true) {
  console.log('Menu de opções');
  console.log('1 - Adicionar tarefa');
  console.log('2 - Remover tarefa');
  console.log('3 - Atualizar tarefa');
  console.log('4 - Exibir tarefas');
  console.log('5 - Sair');

  const opcao = prompt('Digite uma opção: ');

  switch (opcao) {
    case '1':
      adicionarTarefa();
      break;
    case '2':
      removerTarefa();
      break;
    case '3':
      atualizarTarefa();
      break;
    case '4':
      exibirTarefas();
      break;
    case '5':
      console.log('Saindo...');
      break;
  }
}