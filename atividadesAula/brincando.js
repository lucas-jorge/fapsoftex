//brincando na aula

const characters = ['Lucas', 'Thiago', 'Mateus', 'Didio'];
const classes = ['Guerreiro', 'Mago', 'Arqueiro', 'Ladino'];
const weapons = ['Espada', 'Cajado', 'Arco', 'Adaga'];

const randomCharacter = characters[Math.floor(Math.random() * characters.length)];
const randomClass = classes[Math.floor(Math.random() * classes.length)];
const randomWeapon = weapons[Math.floor(Math.random() * weapons.length)];

console.log("Seu personagem é:", randomCharacter);
console.log("Sua classe é:", randomClass);
console.log("Sua arma é:", randomWeapon);


