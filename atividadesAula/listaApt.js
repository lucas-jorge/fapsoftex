//programinha básico para fazer uma lista pro apt novo.


const prompt = require('prompt-sync')({ sigint: true });

let lista = [];

while (true) {
  console.log('Menu de opções');
  console.log('1 - Adicionar item');
  console.log('2 - Remover item');
  console.log('3 - Exibir lista');
  console.log('4 - Sair');

  let opcao = prompt('Digite uma opção: ');

    switch (opcao) {
    case '1':
      let comodo = prompt('Digite o comodo: ').toLowerCase();
      let categoria = prompt('Digite a categoria: ').toLowerCase();
      let item = prompt('Digite o item: ').toLowerCase();

      lista.push({
        comodo: comodo,
        categoria: categoria,
        item: item
      });
      console.log('Item adicionado com sucesso!');
      break;

    case '2':
      console.log('Qual item deseja remover?');
      let itemRemover = prompt('Digite o item: ');
      let index = lista.findIndex(item => item.item === itemRemover);
      if (index !== -1) {
        lista.splice(index, 1);
        console.log('Item removido com sucesso!');
      } else {
        console.log('Item não encontrado!');
      }
      break;

    case '3':
      console.log('Lista de itens:');
      for (let i = 0; i < lista.length; i++) {
        console.log(lista[i]);
       //se a lista estiver vazia retornar uma mensagem.
       if (lista.length === 0) {
         console.log('Lista vazia!');
       }
      }
      break;

    case '4':
      console.log('Saindo...');
      return;

    default:
      console.log('Opção inválida!');
      break;
  }
}
