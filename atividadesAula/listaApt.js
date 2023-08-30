//programinha básico para fazer uma lista pro apt novo.

const prompt = require('prompt-sync')({ sigint: true });

const lista = [];

function adicionarItem() {
  const comodo = prompt('Digite o cômodo: ').toLowerCase();
  const categoria = prompt('Digite a categoria: ').toLowerCase();
  const item = prompt('Digite o item: ').toLowerCase();

  lista.push({
    comodo,
    categoria,
    item
  });

  console.log('Item adicionado com sucesso!');
}

function removerItem() {
  console.log('Qual item deseja remover?');
  const itemRemover = prompt('Digite o item: ');
  const index = lista.findIndex(item => item.item === itemRemover);

  if (index !== -1) {
    lista.splice(index, 1);
    console.log('Item removido com sucesso!');
  } else {
    console.log('Item não encontrado!');
  }
}

function exibirLista() {
  if (lista.length === 0) {
    console.log('Lista vazia!');
  } else {
    console.log('Lista de itens:');
    lista.forEach(item => console.log(item));
  }
}

while (true) {
  console.log('Menu de opções');
  console.log('1 - Adicionar item');
  console.log('2 - Remover item');
  console.log('3 - Exibir lista');
  console.log('4 - Sair');

  const opcao = prompt('Digite uma opção: ');

  switch (opcao) {
    case '1':
      adicionarItem();
      break;
    case '2':
      removerItem();
      break;
    case '3':
      exibirLista();
      break;
    case '4':
      console.log('Saindo...');
      return;
    default:
      console.log('Opção inválida!');
      break;
  }
}
