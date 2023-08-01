/*Você deve criar três listas em JavaScript:

1. para guardar os nomes de dez pessoas;
2. para guardar as suas idades;
3. para guardar as suas cores favoritas.

Em seguida, imprima essas listas. Depois, faça algumas modificações, alterando uma cor e uma idade. Ao terminar, imprima novamente todas as informações das três listas.*/

let names = ["Ana", "Bia", "Carla", "Diana", "Eva", "Fernanda", "Gabriela", "Helena", "Iara", "Julia"];
let ages = [20, 21, 22, 23, 24, 25, 26, 27, 28, 29];
let colors = ["Azul", "Branco", "Cinza", "Dourado", "Escarlate", "Fúcsia", "Grená", "Havana", "Índigo", "Jade\n"];

console.log("Nomes: " + names);
console.log("Idades: " + ages);
console.log("Cores: " + colors);
console.log("Em seguida, mostraremos as arrays modificadas...\n");

// modificando os arrays

ages.splice(0, 1, 30);
colors.splice(0, 2, 'Laranja');

// imprimindo os resultados com as arrays modificadas

console.log("Nomes: " + names);
console.log("Idades com o número 30 adicionado: " + ages);
console.log("Cores(com Laranja adicionada): " + colors);
