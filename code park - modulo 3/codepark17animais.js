/*Nesta atividade, você deve criar um código em JavaScript com uma matriz bidimensional para armazenar informações sobre animais e as suas características.

Cada linha deve representar um animal e cada coluna terá as diferentes informações sobre ele, como nome, espécie e idade.*/
const prompt = require("prompt-sync")({ sigint: true});

let animals = [
    ["Bobby", "Pitbull", 5],
    ["Docinho", "Siamês", 3],
    ["Geólogo", "Papagaio Africano", 2],
    ["Elias", "Cavalo Mangalarga", 7],
    ["Odete", "Galinha da angola", 1],
];


let animalIndex = prompt("Digite o índice do animal que deseja ver -> ");

if (animalIndex >= 0 && animalIndex < animals.length) {
    let animal = animals[animalIndex];
    let nome = animal[0];
    let espécie = animal[1];
    let idade = animal[2];

    console.log("Informações do animal:");
    console.log("Nome:", nome);
    console.log("Espécie:", espécie);
    console.log("Idade:", idade);

} else {
    console.log("Animal não encontrado");
}