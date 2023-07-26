//Desenvolva um código que simule uma eleição com três candidatos.
//- candidato_X => 889
//- candidato_Y => 847
//- candidato_Z => 515
//- branco => 0

//O código deve perguntar se deseja finalizar a votação depois do voto. Caso o número do voto não corresponda a nenhum candidato ou seja branco, ele deve ser tratado como nulo. Se for inserido um texto ao invés de número, o código deve retornar uma mensagem para votar novamente.

//Quando a votação for finalizada, o código deverá mostrar o vencedor, aquele com o maior número de votos e, também, a quantidade de votos de cada candidato, os brancos e nulos. 

const prompt = require('prompt-sync')();

let candidatoX = 0;
let candidatoY = 0;
let candidatoZ = 0;
let branco = 0;
let nulo = 0;
let voto = 0;

while (voto != 5) {
    try {
        voto = prompt("Digite o número do candidato desejado: 1 para candidato X, 2 para candidato Y, 3 para candidato Z, 4 para branco e 5 para finalizar a votação -> ");
        voto = Number(voto);

        if (voto == 1) {
            candidatoX++;
        } else if (voto == 2) {
            candidatoY++;
        } else if (voto == 3) {
            candidatoZ++;
        } else if (voto == 4) {
            branco++;
        } else if (voto == 5) {
            break;
        } else {
            nulo++;
        }
    } catch (error) {
        console.log("Digite um número válido!");
    } console.log("Voto computado com sucesso!"); 
        console.log("Quer continuar votando? Digite a opção desejada no menu a seguir");
}console.log(`O candidato X recebeu ${candidatoX} votos, o candidato Y recebeu ${candidatoY} votos, o candidato Z recebeu ${candidatoZ} votos, os votos brancos foram ${branco} e os votos nulos foram ${nulo}.`);