/* const pessoa = {};
pessoa.nome = "Lucas";
pessoa.sobrenome = "Jorge";
pessoa.idade = 35;
pessoa.sexo = "H";
pessoa.bairro = 'Casa Forte';
pessoa.cidade = 'Recife';
pessoa.saudacao = function () {
    return 'Olá, tudo bem? O meu nome é ' + this.nome + ', meu sobrenome é ' + this.sobrenome + ' e tenho ' + this.idade + ' anos.';
};

console.log(pessoa.saudacao()); */

function Pessoa(nome_pessoa, idade_pessoa, genero_pessoa) {
    this.nome = nome_pessoa;
    this.idade = idade_pessoa;
    this.genero = genero_pessoa;
    this.saudacao = function () {
        return 'Olá, tudo bem? O meu nome é ' + this.nome + '.';
    };
}

const pessoa1 = new Pessoa('Lucas', 35, 'H');
const pessoa2 = new Pessoa('Bruna', 33, 'M');
//imprime as propriedades da pessoa1
console.log(pessoa1.nome);
console.log(pessoa1.idade);
console.log(pessoa1.genero);
console.log(pessoa1.saudacao());
//imprime as propriedades da pessoa2
console.log(pessoa2.nome);
console.log(pessoa2.idade);
console.log(pessoa2.genero);
console.log(pessoa2.saudacao());