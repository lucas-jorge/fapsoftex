//função que retorna se a frase é palindroma ou não com true ou false no console.
const prompt = require("prompt-sync")({ sigint: true });

let palavra = prompt("Digite uma palavra: ");

function palindromo(palavra) {
    if (palavra.length <= 1) {
        return true;//é palíndromo.
    }
    if (palavra[0] !== palavra[palavra.length - 1]) {
        return false;//não é palíndromo.
    }
    return palindromo(palavra.slice(1, palavra.length - 1));
}

console.log(palindromo(palavra));