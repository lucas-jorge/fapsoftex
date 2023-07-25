let nome = 'Lucas';
let nota1 = 3;
let nota2 = 9;
let somaNotas = nota1 + nota2;
let mediaNotas = somaNotas / 2;
let numFaltas = 2;

if (mediaNotas < 7 || numFaltas > 3 || mediaNotas >= 7 || numFaltas > 3 || mediaNotas < 7 || numFaltas < 2) {

    console.log('O aluno está reprovado.');

} else {
    console.log('O aluno está aprovado.');
}