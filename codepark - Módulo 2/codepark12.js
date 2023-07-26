//Desenvolva um programa que recebe do usuário nome completo e ano de nascimento que seja entre 1922 e 2021. A partir dessas informações, o sistema mostrará o nome do usuário e a idade que completou, ou completará, no ano atual (2022).

//Caso o usuário não digite um número ou apareça um inválido no campo do ano, o sistema informará o erro e continuará perguntando até que um valor correto seja preenchido.

const prompt = require('prompt-sync')();

let nome = prompt("Digite seu nome completo: ");
let ano;
let idade;

while (ano < 1922 || ano > 2021 || isNaN(ano)) {
    try{

        let ano = prompt("Digite seu ano de nascimento: ");
        ano = Number(ano);
        idade = 2022 - ano;

    if (ano >= 1922 && ano <= 2021) {
        ano = Number(ano);
        idade = 2022 - ano;
    console.log(`Olá, ${nome}! Você completará em 2022,  ${idade} anos!`);
    break;
    } else {
    throw new Error("Ano inválido, tente inserir um ano válido!");
}
    } catch (err) {
        console.log(err);
    }
}