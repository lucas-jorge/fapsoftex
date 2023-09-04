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
    default:
      console.log('Opção inválida! Por favor, escolha uma opção válida.');
  }
}