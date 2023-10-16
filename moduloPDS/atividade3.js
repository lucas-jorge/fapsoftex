/* Aplique o padrão de projeto decorator para criar um sanduíche de frango assado com pepperoni e queijo mussarela ralado. O projeto deve seguir os seguintes critérios:
- deve imprimir no console: Sanduíche de Carne, Bacon, QueijoMussarelaRalado custa $7,49. 
- o sanduíche de frango assado custa $4,50.
- o ingrediente adicional pepperoni custa $0,99.
- o ingrediente adicional queijo mussarela ralado custa $2,00.
- crie as classes necessárias: FrangoAssado, Pepperoni e QueijoMussarelaRalado. */

class Sanduiche {
    constructor() {
        this.descricao = "Sanduíche";
        this.custo = 0.0;
    }

    getDescricao() {
        return this.descricao;
    }

    getCusto() {
        return this.custo;
    }
}

class FrangoAssado extends Sanduiche {
    constructor() {
        super();
        this.descricao = "Sanduíche de Frango Assado";
        this.custo = 4.50;
    }
}

class IngredienteDecorator extends Sanduiche {
    constructor(sanduiche) {
        super();
        this.sanduiche = sanduiche;
    }

    getDescricao() {
        return `${this.sanduiche.getDescricao()}, ${this.descricao}`;
    }

    getCusto() {
        return this.sanduiche.getCusto() + this.custo;
    }
}

class Pepperoni extends IngredienteDecorator {
    constructor(sanduiche) {
        super(sanduiche);
        this.descricao = "Pepperoni";
        this.custo = 0.99;
    }
}

class QueijoMussarelaRalado extends IngredienteDecorator {
    constructor(sanduiche) {
        super(sanduiche);
        this.descricao = "Queijo Mussarela Ralado";
        this.custo = 2.00;
    }
}

function main() {
    let sanduiche = new FrangoAssado();
    sanduiche = new Pepperoni(sanduiche);
    sanduiche = new QueijoMussarelaRalado(sanduiche);

    console.log(`${sanduiche.getDescricao()} custa $${sanduiche.getCusto().toFixed(2)}`);
}

main();
