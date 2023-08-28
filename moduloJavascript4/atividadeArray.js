/*Vamos criar um array de objetos pessoa com, no mínimo, quatro itens. Cada um deles será composto por quatro propriedades: nome, idade, profissão e cidade.

Dessa forma, declare os objetos pessoa dentro do array e, depois, desenvolva um código que utilize for in e for of para que todos os objetos e propriedades sejam impressos.*/

let pessoas = [
    {nome: "Lucas", idade: 37, profissão: "Programador", cidade: "Recife"},
    {nome: "Bruna", idade: 33, profissão: "Advogada", cidade: "Recife"},
    {nome: "Thiago", idade: 41, profissão: "Engenheiro", cidade: "Rio de Janeiro"},
    {nome: "Ana", idade: 28, profissão: "Professora", cidade: "Belo Horizonte"}
];

for (let pessoa of pessoas) {
    console.log("Pessoa:");
    for (let propriedade in pessoa) {
        console.log(`  ${propriedade}: ${pessoa[propriedade]}`);
    }
}