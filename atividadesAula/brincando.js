//brincando na aula

const prompt = require('prompt-sync')({sigint: true});

let personagem = [Lucas, Thiago, Mateus, Didio];
let classe = [Guerreiro, Mago, Arqueiro, Ladino];
let arma = [Espada, Cajado, Arco, Adaga];

const heroi1 = personagem[Math.floor(Math.random() * personagem.length)];
const classe1 = classe[Math.floor(Math.random() * classe.length)];
const arma1 = arma[Math.floor(Math.random() * arma.length)];

console.log("Seu personagem é: " + heroi1);
console.log("Sua classe é: " + classe1);
console.log("Sua arma é: " + arma1);