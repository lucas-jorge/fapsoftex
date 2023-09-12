//crie uma classe e insira no minimo dois atributos. No codigo utilize o metodo acessor get() e set() para manipular os atributos da classe.

class Pessoa {//classe
    constructor(nome, idade){//construtor
        this._nome = nome;
        this._idade = idade;
    }

    get nome(){//metodo acessor get
        return this._nome;
    }

    set nome(nome){//metodo acessor set
        this._nome = nome;
    }

    get idade(){//metodo acessor get
        return this._idade;
    }

    set idade(idade){//metodo acessor set
        this._idade = idade;
    }
}

const pessoa = new Pessoa("Lucas", 37);//instancia
console.log(pessoa.nome);//get
console.log(pessoa.idade);//get

pessoa.nome = "Bruna";//set
pessoa.idade = 33;//set

console.log(pessoa.nome);//get
console.log(pessoa.idade);//get