/*A atividade que faremos é a da "calculadora de média". Para isso, você deve criar um programa JavaScript que calcule a média de três notas inseridas pelo usuário e exiba o resultado no console.

Primeiro, solicite que o usuário insira três notas (entre 0 e 10 usando a função prompt(). Elas devem ser armazenadas em variáveis adequadas, por exemplo, nota1, nota2 e nota3, com o tipo de dado Number. Depois, some-as e divida por três. O resultado deste cálculo será o valor da média, que deve ser armazenado em uma variável chamada media. Por fim, exiba esse valor no console usando a função console.log().*/

const prompt = require("prompt-sync")({ sigint: true });

function calcularMedia(notas) {
  let sum = 0;
  for (let i = 0; i < notas.length; i++) {
    sum += parseFloat(notas[i]);
  }
  return sum / notas.length;
}

let notas = [];

try {
  for (let i = 0; i < 3; i++) {
    const nota = parseFloat(prompt(`Digite a nota ${i + 1}: `));
    if (isNaN(nota)) {
      console.log("Digite apenas números");
    }
    notas.push(nota);
  }
} catch (err) {
  console.log(err.message);
  process.exit(1); // programa sai com código de erro.
}

const media = calcularMedia(notas);

switch (true) {
  case media >= 7:
    console.log(`Aprovado com média ${media}`);
    break;
  case media >= 5 && media < 7:
    console.log(`Recuperação com média ${media}`);
    break;
  default:
    console.log(`Reprovado com média ${media}`);
    break;
}