//Criando classe JavaScript

/* class Pessoa {
constructor(nome, idade) {
this.nome = nome;
this.idade = idade;
}
}
const pessoa1 = new Pessoa("João", 20);
const pessoa2 = new Pessoa("José", 51);

console.log(pessoa1.nome); // João
console.log(pessoa2.nome); // José */

/* class Pessoa {
    constructor(nome) {
    this.nome = nome;
    }
    get nomePessoa() {
    return this.nome;
    }
    set nomePessoa(x) {
    this.nome = x;
    }
    }
    let pessoa1 = new Pessoa("Lucas");
    console.log(pessoa1.nome);
    pessoa1.nomePessoa = "Bruna";
    console.log(pessoa1.nome); // Bruna */

/*     class Pessoa {//classe pai

        constructor(nome) {
        this.nome = nome;
        }
        saudacao() {
        console.log(`Olá ${this.nome}`);
        }
        }
        class Aluno extends Pessoa {}//herdando da classe pai
        
        let aluno1 = new Aluno("José");
        aluno1.saudacao(); */

        class Pessoa {
            constructor(nome) {
            this.nome = nome;
            }
            saudacao() {
            console.log(‘Olá’, this.nome);
            }
            }

            class Aluno extends Pessoa {
                constructor(nome) {
                console.log("Criando turma de aluno");
                super(nome);
                }
                }

                let pessoa1 = new Pessoa("José");
console.log(pessoa1.nome);
pessoa1.saudacao();
let aluno1 = new Aluno('Paula');
console.log(aluno1.nome);
aluno1.saudacao();