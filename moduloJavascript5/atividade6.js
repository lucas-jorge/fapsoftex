/*Utilizando o javascript desenvolva uma classe chamada Pessoa. Ela precisa possuir, pelo menos, dois objetos. Essa classe servirá como base para a classe Funcionario, a qual vai herdar os atributos e metodos da Pessoa. Além disso inclua os atributos adicionais cargo e salario na classe Pessoa.*/

//cria uma classe Pessoa
class Pessoa {
    constructor(nome_pessoa, idade_pessoa, genero_pessoa) {
        this.nome = nome_pessoa;
        this.idade = idade_pessoa;
        this.genero = genero_pessoa;
    }

    saudacao() {
        return 'Olá, tudo bem? O meu nome é ' + this.nome + '.';
    }
}

//cria uma classe Funcionario que herda os atributos e métodos da classe Pessoa
class Funcionario extends Pessoa {
    constructor(nome_pessoa, idade_pessoa, genero_pessoa, cargo_funcionario, salario_funcionario) {
        super(nome_pessoa, idade_pessoa, genero_pessoa);
        this.cargo = cargo_funcionario;
        this.salario = salario_funcionario;
    }
} 

//cria um novo objeto Pessoa
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

//cria um novo objeto Funcionario
const funcionario1 = new Funcionario('Lucas', 35, 'H', 'Analista de Sistemas', 5000);
const funcionario2 = new Funcionario('Bruna', 33, 'M', 'Advogada', 4000);

//imprime as propriedades do funcionario1
console.log(funcionario1.nome);
console.log(funcionario1.idade);
console.log(funcionario1.genero);
console.log(funcionario1.saudacao());
console.log(funcionario1.cargo);
console.log(funcionario1.salario);

//imprime as propriedades do funcionario2
console.log(funcionario2.nome);
console.log(funcionario2.idade);
console.log(funcionario2.genero);
console.log(funcionario2.saudacao());
console.log(funcionario2.cargo);
console.log(funcionario2.salario);
