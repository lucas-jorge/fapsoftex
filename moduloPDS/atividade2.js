/* Crie uma fábrica de veículos utilizando o padrão Prototype com base no exemplo apresentado no Hipertexto 2. Os requisitos do projeto devem ser:
-implemente uma classe abstrata Veículo com um construtor padrão e os métodos clone e represent -o construtor da classe Veiculo deve receber modelo, marca, cor e numeroRodas como parâmetros; crie pelo menos duas subclasses da classe Veículo, que acrescentem um ou mais atributos, por exemplo: carro que tem dois campos a mais, como numero Rodas e numeroPortas;
- desenvolva uma classe Aplicação que deve criar um array com seis veículos com dois tipos de veiculos diferentes (subclasses), utilizando o método clone dos objetos para preencher o array;
-na classe Aplicação, implemente um método que retorne um array com o mesmo tamanho do array de veículos, onde cada elemento deve ser um clone dos elementos do array veículos; -no final, deve imprimir na tela o retorno da função represent de cada elemento desse novo array de clones de veículos. */

// Solução:

class Veiculo {
    constructor(modelo, marca, cor, numeroRodas) {
        this.modelo = modelo;
        this.marca = marca;
        this.cor = cor;
        this.numeroRodas = numeroRodas;
    }

    clone() {
        return new Veiculo(this.modelo, this.marca, this.cor, this.numeroRodas);
    }

    represent() {
        return `Modelo: ${this.modelo}\nMarca: ${this.marca}\nCor: ${this.cor}\nNúmero de rodas: ${this.numeroRodas}\n`;
    }
}

class Carro extends Veiculo {
    constructor(modelo, marca, cor, numeroRodas, numeroPortas) {
        super(modelo, marca, cor, numeroRodas);
        this.numeroPortas = numeroPortas;
    }

    clone() {
        return new Carro(this.modelo, this.marca, this.cor, this.numeroRodas, this.numeroPortas);
    }

    represent() {
        return `Modelo: ${this.modelo}\nMarca: ${this.marca}\nCor: ${this.cor}\nNúmero de rodas: ${this.numeroRodas}\nNúmero de portas: ${this.numeroPortas}\n`;
    }
}

class Moto extends Veiculo {
    constructor(modelo, marca, cor, numeroRodas, tipo) {
        super(modelo, marca, cor, numeroRodas);
        this.tipo = tipo;
    }

    clone() {
        return new Moto(this.modelo, this.marca, this.cor, this.numeroRodas, this.tipo);
    }

    represent() {
        return `Modelo: ${this.modelo}\nMarca: ${this.marca}\nCor: ${this.cor}\nNúmero de rodas: ${this.numeroRodas}\nTipo: ${this.tipo}\n`;
    }
}

class Aplicacao {
    constructor() {
        this.veiculos = [];
        this.clones = [];
    }

    criarVeiculos() {
        this.veiculos.push(new Carro("Uno", "Fiat", "Vermelho", 4, 4));
        this.veiculos.push(new Carro("Gol", "Volkswagen", "Preto", 4, 4));
        this.veiculos.push(new Carro("Fiesta", "Ford", "Azul", 4, 4));
        this.veiculos.push(new Moto("CG", "Honda", "Azul", 2, "Street"));
        this.veiculos.push(new Moto("CB", "Honda", "Vermelha", 2, "Naked"));
        this.veiculos.push(new Moto("Ninja", "Kawasaki", "Verde", 2, "Esportiva"));
    }
}