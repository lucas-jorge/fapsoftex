/*Estamos rodeados por dados no nosso cotidiano e, nas aulas, aprendemos sobre os seus diversos tipos. Agora, vamos criar variáveis do tipo boolean, Bigint, string e symbol. No primeiro momento, após declará-las, precisamos exibir seus conteúdos, que devem ser UNDEFINED. Em seguida, vamos deixar essas variáveis com valores nulos e imprimir. Por fim, cada uma deve receber um dos tipos como atribuição e os seus respectivos valores devem ser impressos na tela.*/

let booleanVar;
let bigIntVar;
let stringVar;
let symbolVar;

console.log(booleanVar); // undefined
console.log(bigIntVar); // undefined
console.log(stringVar); // undefined
console.log(symbolVar); // undefined

booleanVar = null;
bigIntVar = null;
stringVar = null;
symbolVar = null;

console.log(booleanVar); // null
console.log(bigIntVar); // null
console.log(stringVar); // null
console.log(symbolVar); // null

booleanVar = true;
bigIntVar = 1234567890123456789012345678901234567890n;
stringVar = "Hello, World!";
symbolVar = Symbol("foo");

console.log(booleanVar); // true
console.log(bigIntVar); // 1234567890123456789012345678901234567890n
console.log(stringVar); // Hello, World!
console.log(symbolVar); // Symbol(foo)