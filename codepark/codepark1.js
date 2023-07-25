console.log('Bem vindo ao seu boletim do aluno!');

let nota1 = 6;
let nota2 = 8;
let faltas = 2;
let somaNotas = nota1 + nota2;
let mediaNotas = somaNotas / 2;

if (mediaNotas < 7 || faltas > 3){
    console.log("Que pena, o aluno está reprovado.");
} else {
    console.log('O aluno está aprovado!');
}

console.log('Fim de programa!');