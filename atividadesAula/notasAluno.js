//fazer entrada de dados notas de alunos cadastrar alunos e notas, exibir relatório de notas e alunos.exibir aprovado ou nao usando array e switch case.usar for e while.

//biblioteca de entrada de dados.
const prompt = require("prompt-sync")({ sigint: true });

let alunos = [];//array vazio.

//menu para melhorar a usabilidade do código.
while (true) {
  console.log("Menu:");
  console.log("1 - Cadastrar aluno");
  console.log("2 - Exibir relatório");
  console.log("3 - Sair");

  const opcao = prompt("Escolha uma opção: ");//entrada de dados pelo usuário.

  switch (opcao) {
    case "1":
      let nome = prompt("Digite o nome do aluno: ");
      let nota1 = +prompt("Digite a primeira nota do aluno: ");
      let nota2 = +prompt("Digite a segunda nota do aluno: ");

      if (nota1 <= 10 && nota2 <= 10) {
        alunos.push(cadastro(nome, nota1, nota2));
        console.log("Aluno cadastrado com sucesso!\n");
      } else {
        console.log("Digite notas válidas (0 a 10)!\n");
      }
      break;
    case "2":
      console.log("Relatório de notas:\n");

      //percorrendo a entrada de dados do aluno no array.
      for (let i = 0; i < alunos.length; i++) {
        relatorio(alunos[i]);
        status(media(alunos[i].notas));
        console.log("");
      }
      break;
    case "3":
      console.log("Saindo...");
      return;
    default:
      console.log("Opção inválida!\n");
      break;
  }
}

//função para cadastrar aluno.
function cadastro(nome, nota1, nota2) {
  return {
    nome: nome,
    notas: [nota1, nota2],
  };
}

//retornar os dados do aluno cadastrado.
function relatorio(aluno) {
  console.log(
    `Aluno: ${aluno.nome} - Nota 1: ${aluno.notas[0]} - Nota 2: ${
      aluno.notas[1]
    } - Média: ${media(aluno.notas)}`
  );
}

//função para calcular médias.
function media(notas) {
  return (notas[0] + notas[1]) / 2;
}

//função para retornar se o aluno passou por média.
function status(media) {
  if (media >= 7) {
    console.log("Aluno aprovado.");
  } else if (media >= 5 && media < 7) {
    console.log("Aluno em recuperação.");
  } else if (media < 5) {
    console.log("Aluno reprovado.");
  } else {
    console.log("Erro!");
  }
}
