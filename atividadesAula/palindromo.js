//função que retorna se a frase é palindroma ou não com true ou false no console.
const prompt = require("prompt-sync")({ sigint: true });

let palavra = prompt("Digite uma palavra: ");

//usar função com 2 for i e for j.

function palindromo(palavra) {
    for (let i = 0, j = palavra.length - 1; i < palavra.length / 2; i++, j--) {
        if (palavra[i] !== palavra[j]) {
            return false;
        }
    }
    return true;
}

console.log(palindromo(palavra));