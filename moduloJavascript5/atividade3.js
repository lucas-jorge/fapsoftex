/*utilizando javascript crie um código que tenha uma classe e um metodo estatico*/

class Pessoa {
    constructor(nome, idade, sexo) {
        this.nome = nome;
        this.idade = idade;
        this.sexo = sexo;
    }

    static mostrarPessoa(pessoa) {
        console.log(pessoa);
    }
}

const pessoa1 = new Pessoa('Lucas', 35, 'Masculino');
const pessoa2 = new Pessoa('Maria', 20, 'Feminino');

Pessoa.mostrarPessoa(pessoa1);
Pessoa.mostrarPessoa(pessoa2);
